// Añadiremos nuestro servidor, conexión a la base de datos y uniremos el resto de la aplicación

/*PASO 1: Crear un Servidor Express
    -Lo primero creamos un servidor de express y lo levantamos.
    -Para ello inicializamos proyecto de node e instalamos dependencias:
    Instalamos express para crear el servidor, mongoose para la conexión a la base de datos y dotenv para poder usar las variables de entorno.
        -npm init -y
        -npm i express mongoose dotenv
        -npm install mongodb
    -crearemos el .gitignore*/

    const express = require("express");
    const app = express();
    const PORT = 8080;
    const routes = require("./routes");
    
    //PASO 2_BIS: Nos importaremos dicha conexión en index.js. 
    const { dbConnection } = require("./config/config");
    
    /*PASO 6: Por último nos importamos las rutas en nuestro archivo principal index.js, añadimos el express JSON para parsear el body, y
    añadimos la ruta:*/
    app.use(express.json());
    app.use('/', routes);
    
    
    //PASO 2_BIS: llamamos la función para que cuando levantemos el servidor haga la conexión.
    dbConnection();
    
    //PASO 1:
    app.listen(PORT, () => console.log(`Server started on port ${PORT}`));