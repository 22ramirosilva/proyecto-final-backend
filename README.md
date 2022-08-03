Al tener bajado el proyecto de Github, para poder abrirlo tenes que utilizar el comando npm install en una nueva terminal.
Para correr el proyecto debes ejecutar el comando nodemon.

Dentro de controllers, en pokemon.js linea 6 y en auth.js linea 9 cambiar contraseña por la contraseña usada en pgadmin.

En pgadmin crear una base de datos llamada "pokemones", una vez creada click derecho Restore...
en la nueva ventana importar el archivo pokedex.sql

Luego descargar el repositorio de frontend: "https://github.com/22ramirosilva/proyecto-final-frontend.git"


Poekmones:
GET 
"/pokemon" te trae la lista de todos los pokemones.
"/pokemon/:id" te trae el pokemon correspondiente al id que hayas elegido.
POST
"/pokemon" es para agregar un nuevo pokemon.
DELETE
"pokemon/:id" elimina al pokemon correspondiente al id que hayas elegido.


Usuarios:
POST
"/register" para registrar usuario
"/login" para logear usuario
