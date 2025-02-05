
//PASO 4: Rutas y endpoints

const express = require("express");
const router = express.Router();
const Post = require("../models/Post.js")//IMPORTANTE el nombre de MODELS Siempre va la primer letra en MAYÚSCULAS!

//- POST /create: Endpoint para crear una publicación.
router.post("/create", async(req, res) => {
    try {
        const createPost = await Post.create(req.body);    
        res
            .status(201)
            .json(createPost);
    } catch (error) {
        console.error(error);
        res
            .status(500)
            .send({ message: "There was a problem trying to create a task" });
    }
});

//-GET /: Endpoint para traer todas las publicaciones.


//- GET /id/:_id: Endpoint para buscar publicación por id.


//- GET /title/:title: Endpoint para buscar una publicación por su titulo.


//- PUT /id/:_id: Endpoint para actualizar una publicación.


//- DELETE /id/:_id: Endpoint para eliminar una publicación.


module.exports = router;