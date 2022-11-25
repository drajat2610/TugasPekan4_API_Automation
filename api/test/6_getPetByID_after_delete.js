const request = require("supertest")("https://petstore.swagger.io/v2");
const expect = require("chai").expect;

describe("GET /pet", function () {
    it("find pet by id after delete", async function () {
        const response = await request
            .get("/pet/101")

        expect(response.status).to.eql(404);
        expect(response.body.type).to.eql("error".toString());
        expect(response.body.message).to.eql("Pet not found".toString());
    })
})