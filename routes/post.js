
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
            .send({ message: "There was a problem trying to create a post" });
    }
});

//-GET /: Endpoint para traer todas las publicaciones.
router.get("/", async(req, res) => {
    try {
        const findPost = await Post.find();
        res
            .status(201)
            .json(findPost);
    } catch (error) {
        console.error(error);
        res
            .status(500)
            .send({ message: "There was a problem trying to get a post" });
    }
});

//- GET /id/:_id: Endpoint para buscar publicación por id.
router.get("/id/:_id", async(req, res) => {
    try {
        const id=req.params.id;
        const findPostbyId = await Post.find({id});
        res
            .status(200)
            .json(findPostbyId);
    } catch (error) {
        console.error("el error es:",error);
        res
            .status(500)
            .send({ message: "There was a problem trying to get a post" });
    }
});

//- GET /title/:title: Endpoint para buscar una publicación por su titulo.

router.get("/title/:title", async(req, res) => {
    try {
        const title=req.params.title;
        const findPostTitle = await Post.find({title});
        res
            .status(200)
            .json(findPostTitle);
    } catch (error) {
        console.error("el error es:",error);
        res
            .status(500)
            .send({ message: "There was a problem trying to get a post" });
    }
});

//PUT /id/:_id: Endpoint para actualizar una publicación.
router.put("/id/:_id", async(req, res) => {
    try {
        const id=req.params.id;
        const updatePost = await Post.updateOne({id});
        res
            .status(200)
            .json(updatePost);
    } catch (error) {
        console.error(error);
        res
            .status(500)
            .send({ message: "There was a problem trying to update a post" });
    }
});

/*- PUT /id/:_id: Endpoint para actualizar una publicación.
router.put("/id/:_id", async(req, res) => {
    try {
        const id=req.params.id;
        const updateData = req.body;
        const updatePost = await Post.findByIdAndUpdate(
            id, 
            updateData, 
            { new: true}
        );
        res
            .status(200)
            .json(updatePost);
    } catch (error) {
        console.error(error);
        res
            .status(500)
            .send({ message: "There was a problem trying to update a post" });
    }
});*/


//- DELETE /id/:_id: Endpoint para eliminar una publicación.
router.delete("/id/:_id", async(req, res) => {
    try {
        const id=req.params.id;
        const deletePost = await Post.find({id});
        console.log(deletePost)
        res
            .status(200)
            .send({ message: `The post was deleted` });
    } catch (error) {
        console.error(error);
        res
            .status(400)
            .send({ message: "There was a problem trying to delete the post" });
    }
});

module.exports = router;