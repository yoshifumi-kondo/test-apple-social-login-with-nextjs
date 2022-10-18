// /lib/passport-google-auth.ts
import { Profile, Strategy as GoogleStrategy } from "passport-google-oauth20";
import passport from "passport";

// logic to save your user or check if user exists in your record to proceed.
const saveUser = (user: Profile) => {
  return new Promise((resolve, reject) => {
    resolve("Successful");
  });
};

const GOOGLE_CLIENT_ID =
  "857358950138-i8mj6usk9jee5i62n6ug6itekabf01be.apps.googleusercontent.com";
const GOOGLE_CLIENT_SECRET = "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";

passport.use(
  new GoogleStrategy(
    {
      clientID: GOOGLE_CLIENT_ID,
      clientSecret: GOOGLE_CLIENT_SECRET,
      callbackURL: "/api/oauth2/redirect/google", // this is the endpoint you registered on google while creating your app. This endpoint would exist on your application for verifying the authentication
    },
    async (_accessToken, _refreshToken, profile, cb: any) => {
      try {
        await saveUser(profile);
        return cb(null, profile);
      } catch (e: any) {
        throw new Error(e);
      }
    }
  )
);

// passport.serializeUser stores user object passed in the cb method above in req.session.passport
passport.serializeUser((user, cb) => {
  process.nextTick(function () {
    return cb(null, user);
  });
});

// passport.deserializeUser stores the user object in req.user
passport.deserializeUser(function (
  user: any,
  cb: (arg0: null, arg1: any) => any
) {
  process.nextTick(function () {
    return cb(null, user);
  });
});

// for broader explanation of serializeUser and deserializeUser visit https://stackoverflow.com/questions/27637609/understanding-passport-serialize-deserialize

// An article that explains the concept of process.nextTick https://nodejs.dev/learn/understanding-process-nexttick

export default passport;
