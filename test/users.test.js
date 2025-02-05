const request = require("supertest");
const app = require("../index.js");

describe("testing/users", () =>{

    const user = {
        name: "username",
        email: "test@example.com",
        password: "1234546",
    }
})


Test("Create a user", async () =>{
    let usersCount = await User.countDocuments({})

    expect(usersCount).toBe(0); //chequeamos que no haya ningún usuario
    resUser = (await request(app).post("/create")).send(user).expect(201)  //Hagamos la peticion para crear un usuario

    usersCount = await User.countDocuments({})
    expect(usersCount).toBe(1) //chequeamos que haya un usuario
    expect(resUser.body.user._id).toBeDefined()
    expect(resUser.body.createdAt).toBeDefined()
    expect(resUser.body.updatedAt).toBeDefined()
})

