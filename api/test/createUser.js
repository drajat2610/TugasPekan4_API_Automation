const request = require("supertest")("http://restapi.adequateshop.com");
const expect = require("chai").expect;

describe("POST /users", function() {
    it("create new user", async function(){
        const response = await request
            .post("/api/users")
            .set({Authorization : "Bearer 2cd2dafb-bc22-4882-be7f-7de55c37b464"})
            .send({
                "name":"tester3388",
	            "email":"tester3388@gmail.com",
	            "location":"Indonesia"
            })
        
        expect(response.status).to.eql(201);
        expect(response.body.name).to.eql("tester3388");
    })
    it("create existing user", async function(){
        const response = await request
            .post("/api/users")
            .set({Authorization : "Bearer 2cd2dafb-bc22-4882-be7f-7de55c37b464"})
            .send({
                "name":"tester3388",
	            "email":"tester3388@gmail.com",
	            "location":"Indonesia"
            })
        
        expect(response.status).to.eql(400);
        expect(response.text).to.include("Pleae try with different email address!");
    })
})