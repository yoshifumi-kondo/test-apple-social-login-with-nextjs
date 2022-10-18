// import * as bodyParser from "body-parser";
import { NextApiRequest, NextApiResponse } from "next";
import passport from "passport";
var GoogleStrategy = require("passport-google-oauth20");

const GOOGLE_CLIENT_ID =
  "857358950138-i8mj6usk9jee5i62n6ug6itekabf01be.apps.googleusercontent.com";
const GOOGLE_CLIENT_SECRET = "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";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "GET") {
    try {
      passport.use(
        new GoogleStrategy(
          {
            clientID: GOOGLE_CLIENT_ID,
            clientSecret: GOOGLE_CLIENT_SECRET,
            callbackURL: "https://www.example.com/oauth2/redirect/google",
            scope: ["profile"],
            state: true,
          },
          function verify(
            accessToken: any,
            refreshToken: any,
            profile: any,
            cb: any
          ) {
            res.status(200).json({ accessToken, refreshToken, profile, cb });
          }
        )
      );
    } catch (e: unknown) {
      if (e instanceof Error) {
        res.status(400).send(e.message);
      }
    }
  }
}
