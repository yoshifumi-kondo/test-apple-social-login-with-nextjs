// import * as bodyParser from "body-parser";
import passport from "../../lib/passport-google-auth";
import nextConnect from "next-connect";

export default nextConnect()
  .use(passport.initialize())
  .use(passport.session())
  .get(
    passport.authenticate("google", {
      scope: ["profile", "email"],
    })
  );
