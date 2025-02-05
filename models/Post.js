// Aqui ira el modelo de la publicación con los campos title, body y los timestamps.

//PASO 3: Modelo User

const mongoose = require("mongoose");

const PostSchema = new mongoose.Schema({
    title: String,
    body: String
}, { timestamps: true });

const Post = mongoose.model("Post", PostSchema);

module.exports = Post;


//IMPORTANTE el nombre de MODELS Siempre va la primer letra en MAYÚSCULAS!