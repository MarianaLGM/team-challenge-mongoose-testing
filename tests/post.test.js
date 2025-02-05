const request = require("supertest");
const app = require("../index.js");

//CAMBIO: const {Post} = require("../models/Post.js");esto teníamos mal lo correcto sería:
const Post = require("../models/Post.js")

/*Definimos post que se usará en el test de creación de publicación. 
Este post sería el equivalente al que envíamos por el body en el Postman.*/

describe("/create", () => { //aquí tenía puesto testing/posts CAMBIO
    const post = {
        title: "postTitle",
        body: "postDescription"
    }
    //Creamos nuestro primer test, que testea que se haya creado una publicación.
  test("Create a post", async () => {
    let postsCount = await Post.countDocuments({});
    expect(postsCount).toBe(0);//chequeamos que no haya ninguña publicación
    resPost = await request(app).post("/create").send(post).expect(201);//Hacemos la petición para crear una petición
  
    postsCount = await Post.countDocuments({});//Devuelve un número entero correspondiente a la cantidad de documentos que coinciden con la consulta de la colección o vista.
    expect(postsCount).toBe(1); //chequeamos que haya un publicación

    //expect(resPost.param.post._id).toBeDefined();
    //expect(resPost.body.post.createdAt).toBeDefined();
   // expect(resPost.body.post.updatedAt).toBeDefined();
  });
  afterAll(() => {
    return Post.deleteMany();//Una vez se ejecuten los tests limpiamos la colección de publicaciones:
  });
});






