const request = require("supertest")("http://restapi.adequateshop.com");
const expect = require("chai").expect;

describe("GET /users", function(){
    it("returns all users",async function(){
        const response = await request
            .get("/api/users?page=1")
            .set({Authorization : "Bearer 648ca832-7a40-4935-8b90-61f608a23f8f"});

        expect(response.status).to.eql(200);
        expect(response.body.data.length).to.eql(10);
    })

    it("returns all users without token", async function(){
        const response = await request
            .get("/api/users?page1");

        expect(response.status).to.eql(401);
        expect(response.text).to.include("please send bearer token in header");
    })
})