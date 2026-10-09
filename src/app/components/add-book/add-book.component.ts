import { Component, OnInit, HostListener } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Location } from '@angular/common';
import { BookServiceService, Author, Genre } from 'src/app/services/book-service.service';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent implements OnInit {

  bookForm!: FormGroup;
  isSubmitting: boolean = false;
  message: { type: string; text: string } = { type: '', text: '' };

  authors: Author[] = [];
  genres: Genre[] = [];
  isLoadingOptions: boolean = true;

  imagePreview: string | null = null;
  isDragging: boolean = false;

  constructor(
    private fb: FormBuilder,
    private bookService: BookServiceService,
    private location: Location 
  ) {}

  ngOnInit(): void {
    this.initForm();
    this.loadDropdownData();
  }

  private initForm(): void {
    this.bookForm = this.fb.group({
      idAuthor: ['', [Validators.required]],
      idGenre: ['', [Validators.required]],
      title: ['', [Validators.required, Validators.maxLength(255)]],
      description: [''],
      image: ['']
    });
  }

  private loadDropdownData(): void {
    this.isLoadingOptions = true;

    // Cargar autores
    this.bookService.getAuthors().subscribe({
      next: (data) => this.authors = data,
      error: (err) => console.error('Error al cargar autores', err)
    });

    // Cargar géneros
    this.bookService.getGenres().subscribe({
      next: (data) => {
        this.genres = data;
        this.isLoadingOptions = false;
      },
      error: (err) => {
        console.error('Error al cargar géneros', err);
        this.isLoadingOptions = false;
      }
    });
  }

  goBack(): void {
    this.location.back();
  }

  // --- MANEJO DE IMAGEN EN BASE64 ---

  onFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files[0]) {
      this.processFile(input.files[0]);
    }
  }

  onDragOver(event: DragEvent): void {
    event.preventDefault();
    event.stopPropagation();
    this.isDragging = true;
  }

  onDragLeave(event: DragEvent): void {
    event.preventDefault();
    event.stopPropagation();
    this.isDragging = false;
  }

  onDrop(event: DragEvent): void {
    event.preventDefault();
    event.stopPropagation();
    this.isDragging = false;

    if (event.dataTransfer?.files && event.dataTransfer.files[0]) {
      this.processFile(event.dataTransfer.files[0]);
    }
  }

  @HostListener('window:paste', ['$event'])
  onPaste(event: ClipboardEvent): void {
    const items = event.clipboardData?.items;
    if (items) {
      for (let i = 0; i < items.length; i++) {
        if (items[i].type.indexOf('image') !== -1) {
          const file = items[i].getAsFile();
          if (file) {
            this.processFile(file);
            break;
          }
        }
      }
    }
  }

  private processFile(file: File): void {
    if (!file.type.startsWith('image/')) {
      alert('Por favor selecciona un archivo de imagen válido.');
      return;
    }

    const reader = new FileReader();
    reader.onload = () => {
      const base64String = reader.result as string;
      this.imagePreview = base64String;
      this.bookForm.patchValue({ image: base64String });
    };
    reader.readAsDataURL(file);
  }

  removeImage(): void {
    this.imagePreview = null;
    this.bookForm.patchValue({ image: '' });
  }

  // --- ENVÍO DEL FORMULARIO ---

  onSubmit(): void {
    if (this.bookForm.invalid) {
      this.bookForm.markAllAsTouched();
      return;
    }

    this.isSubmitting = true;
    this.message = { type: '', text: '' };

    // Convertir a número por seguridad
    const payload = {
      ...this.bookForm.value,
      idAuthor: Number(this.bookForm.value.idAuthor),
      idGenre: Number(this.bookForm.value.idGenre)
    };

    this.bookService.addBook(payload).subscribe({
      next: (success: boolean) => {
        this.isSubmitting = false;
        if (success) {
          this.message = { type: 'success', text: '¡Libro guardado exitosamente!' };
          this.bookForm.reset();
          this.removeImage();
        } else {
          this.message = { type: 'error', text: 'No se pudo guardar el libro.' };
        }
      },
      error: (err) => {
        this.isSubmitting = false;
        this.message = { type: 'error', text: 'Ocurrió un error al intentar guardar el libro.' };
        console.error(err);
      }
    });
  }
}