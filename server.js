const app = require("./app");
const { sequelize } = require("./models");

sequelize
  .sync({ force: false })
  .then(() => {
    console.log("connected");
  })
  .catch((err) => {
    console.error(err);
  });
app.listen(app.get("port"), () => {
  console.log(`http://localhost:${app.get("port")}`);
});
