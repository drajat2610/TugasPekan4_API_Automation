const request = require("supertest")("https://petstore.swagger.io/v2");
const expect = require("chai").expect;

describe("POST /pet", function () {
    it("add a new pet to the store", async function () {
        const response = await request
            .post("/pet")
            .send({
                "id": 101,
                "category": {
                    "id": 2,
                    "name": "Cat"
                },
                "name": "Bambang",
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
        expect(response.body.name).to.eql("Bambang");
    })
    it("add a new pet with invalid url", async function () {
        const response = await request
            .post("/pets")
            .send({
                "id": 101,
                "category": {
                    "id": 2,
                    "name": "Cat"
                },
                "name": "Bambang",
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