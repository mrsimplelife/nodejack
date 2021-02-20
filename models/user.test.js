const { sequelize, User } = require(".");

describe("User", () => {
  test("init", () => {
    expect(User.init(sequelize)).toBe(User);
  });
  test("associate", () => {
    const db = {
      User: {
        hasMany: jest.fn(),
        belongsToMany: jest.fn(),
      },
      Post: {},
    };
    User.associate(db);
    expect(db.User.hasMany).toBeCalledWith(db.Post);
    expect(db.User.belongsToMany).toBeCalledTimes(2);
  });
});
