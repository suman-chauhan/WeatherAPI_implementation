import app from "../app.js";
import supertest from "supertest";
import { CONNECTION_URL } from "../config/index.js";
import mongoose from "mongoose";
const requestWithSupertest = supertest(app);
var  server ;
beforeAll(async () => {
  mongoose
    .connect(CONNECTION_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => app.listen(3000))
    .catch((error) => console.log(`${error} did not connect`));
});

afterAll(() => {
  try {
    mongoose.connection.close();
  } catch (error) {
    console.log(error);
  }
});

describe("wetherApi Endpoints", () => {
  it("POST /wetherApi should inserted data ", async () => {
    const res = await requestWithSupertest.post("/api/insertData");
    expect(res.status).toEqual(200);
    expect(res.type).toEqual(expect.stringContaining("json"));
    expect(res.type).toEqual(expect.stringContaining("json"));
    console.log(res.text);
  });
});
