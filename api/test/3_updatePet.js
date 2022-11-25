const request = require("supertest")("https://petstore.swagger.io/v2");
const expect = require("chai").expect;

describe("PUT /pet", function () {
    it("updates a pet in the store", async function () {
        const response = await request
            .put("/pet")
            .send({
                "id": 101,
                "category": {
                    "id": 2,
                    "name": "Cat"
                },
                "name": "Asep Bambang",
                "photoUrls": [
                    "string"
                ],
                "tags": [
                    {
                        "id": 23,
                        "name": "test tags"
                    }
                ],
                "status": "available"
            })

        expect(response.status).to.eql(200);
        expect(response.body.name).to.include("Asep Bambang");
    })
    it("updates a pet with invalid url", async function () {
        const response = await request
            .post("/pets")
            .send({
                "id": 101,
                "category": {
                    "id": 2,
                    "name": "Cat"
                },
                "name": "Asep Bambang",
                "photoUrls": [
                    "string"
                ],
                "tags": [
                    {
                        "id": 23,
                        "name": "test tags"
                    }
                ],
                "status": "available"
            })

        expect(response.status).to.eql(404);
    })
})