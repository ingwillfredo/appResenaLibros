import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IniciocomponentComponent } from './iniciocomponent.component';

describe('IniciocomponentComponent', () => {
  let component: IniciocomponentComponent;
  let fixture: ComponentFixture<IniciocomponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IniciocomponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IniciocomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
