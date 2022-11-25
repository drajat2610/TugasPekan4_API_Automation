const request = require("supertest")("https://petstore.swagger.io/v2");
const expect = require("chai").expect;

describe("DELETE /pet", function(){
    it("delete a pet",async function(){
        const response = await request
            .delete("/pet/101")

        expect(response.status).to.eql(200);
        expect(response.body.code).to.eql(200);
    })

    it("delete a pet with invalid id", async function(){
        const response = await request
            .delete("/pet/5000");

        expect(response.status).to.eql(404);
    })
})