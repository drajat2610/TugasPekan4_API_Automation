const request = require("supertest")("https://petstore.swagger.io/v2");
const expect = require("chai").expect;

describe("GET /pet", function(){
    it("find pet by id",async function(){
        const response = await request
            .get("/pet/101")

        expect(response.status).to.eql(200);
        expect(response.body.status).to.eql("available".toString());
    })

    it("find pet by id with invalid id", async function(){
        const response = await request
            .get("/pet/0982");

        expect(response.status).to.eql(404);
        expect(response.body.message).to.eql("Pet not found".toString());
    })
})