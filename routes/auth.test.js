const request = require("supertest");
const { sequelize } = require("../models");
const app = require("../app");
beforeAll(async () => {
  await sequelize.sync({ force: true });
});
describe("POST /join", () => {
  test("join", (done) => {
    request(app)
      .post("/auth/join")
      .send({
        email: "hihi@naver.com",
        nick: "hihi",
        password: "hihi",
      })
      .expect("Location", "/")
      .expect(302, done);
  });
});
describe("POST /login", () => {
  test("login", (done) => {
    request(app)
      .post("/auth/login")
      .send({
        email: "hihi@naver.com",
        password: "hihi",
      })
      .expect("Location", "/")
      .expect(302, done);
  });
});

// describe("POST /login", () => {});
// describe("POST /login", () => {});
// afterAll((done) => {
//   sequelize.close().then(
//     console.log('hi')
//     done());
// });
// afterAll(async (done) => {
//   //   await sequelize.sync({ force: true });
//   done();
// });
