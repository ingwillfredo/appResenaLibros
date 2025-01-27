# AppResenaLibros



Proyecto realizado en el back con .Net C# y base de datos sql server

En el front con Angular 15

BackEnd
=======

Se adjunta script con instrucciones para crear la base de datos, 
crear tablas, insertar informacion necesaria para el funcionamiento del Web Api.

Para Tener acceso hacer funcionar el api se debe clonar el proyecto y ejecutarlo... 
Aunque como esta publicado el front esta apuntando al api publicada.
Si se quiere ejecutar con al api local clonada se debe cambiar los 
apuntamientos en los servicios del Aplicativo angular a los que genere el api local clonada.

Las siguientes son las Url de los end point ya creados

https://pruebatecnica.somee.com/api/Access/GetAllBooks

https://pruebatecnica.somee.com/api/Access/GetBookById/

https://pruebatecnica.somee.com/api/Access/GetAllReviewsByBook/

https://pruebatecnica.somee.com/api/Reviews/AddReview

https://pruebatecnica.somee.com/api/Access/ValidateEmail/

https://pruebatecnica.somee.com/api/Access/AddUser

https://pruebatecnica.somee.com/api/Access/LoginUser

http://localhost:7099/api/Access/TokenValidate


FrontEnd
==========


Se debe clonar el proyecto 
en una maquina con node js Instalado y desde la carpeta donde se guardo,
llamar una consola del cmd y ejecutar el comando 
ng serve -o

Para visitar la pagina publicada se debe visitar la siguiente URL

https://pru-tec-publicada.vercel.app/
