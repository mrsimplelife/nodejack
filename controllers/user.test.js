const { addFollowing } = require("./user");
jest.mock("../models");
const { User } = require("../models");

describe("addFollowing", () => {
  const req = {
    user: { id: 1 },
    params: { id: 2 },
  };
  const res = {
    status: jest.fn(() => res),
    send: jest.fn(),
  };
  const next = jest.fn();
  test("find user and response success", async () => {
    User.findOne.mockReturnValue(
      Promise.resolve({
        id: 1,
        name: "hi",
        addFollowing() {
          return Promise.resolve();
        },
      })
    );
    await addFollowing(req, res, next);
    expect(res.send).toBeCalledWith("success");
  });
  test("when no user response 404", async () => {
    User.findOne.mockReturnValue(Promise.resolve(null));
    await addFollowing(req, res, next);
    expect(res.status).toBeCalledWith(404);
    expect(res.send).toBeCalledWith("no user");
  });
  test("when db error", async () => {
    const error = "error";
    User.findOne.mockReturnValue(Promise.reject(error));
    await addFollowing(req, res, next);
    expect(next).toBeCalledWith(error);
  });
});
