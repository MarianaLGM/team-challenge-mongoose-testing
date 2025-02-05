const request = require("supertest");
const app = require("../index.js");
const { Post } = require("../models/Post.js");

/*Definimos post que se usará en el test de creación de publicación. 
Este post sería el equivalente al que envíamos por el body en el Postman.*/

describe("testing/posts", () => {
    const post = {
        title: "postTitle",
        body: "postDescription"
    }
});

//Creamos nuestro primer test, que testea que se haya creado una publicación.
test("Create a post", async () => {
    let postsCount = await Post.countDocuments({});
    expect(postsCount).toBe(0);//chequeamos que no haya ninguña publicación
    resPost = await request(app).post("/create").send(post).expect(201);//Hacemos la petición para crear un usuario
    
    postsCount = await Post.countDocuments({});
    expect(postsCount).toBe(1); //chequeamos que haya un publicacióo

    resPost = await request(app).post("/create").send(post).expect(201);
   // expect(resPost.param.post._id).toBeDefined();
    expect(resPost.body.post.createdAt).toBeDefined();
    expect(resPost.body.post.updatedAt).toBeDefined();
  });


//Una vez se ejecuten los tests limpiamos la colección de publicaciones:

describe("testing/posts", () => { 
afterAll(() => {
    return Post.deleteMany();
  });
});
