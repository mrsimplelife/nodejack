const passport = require("passport");
const loaclStrategy = require("passport-local").Strategy;
const bcrypt = require("bcrypt");

const { User } = require("../models");

module.exports = () => {
  passport.use(
    new loaclStrategy(
      {
        usernameField: "email",
        passwordField: "password",
      },
      async (email, password, done) => {
        try {
          const exUser = await User.findOne({ where: { email } });
          if (exUser) {
            const result = await bcrypt.compare(password, exUser.password);
            if (result) {
              done(null, exUser);
            } else {
              done(null, false, { message: "no password" });
            }
          } else {
            done(null, false, { message: "no user" });
          }
        } catch (error) {
          console.log(error);
          done(error);
        }
      }
    )
  );
};
