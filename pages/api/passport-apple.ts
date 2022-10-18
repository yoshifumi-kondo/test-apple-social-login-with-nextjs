// import * as bodyParser from "body-parser";
import { json } from "body-parser";
import { NextApiRequest, NextApiResponse } from "next";
import passport from "passport";
import AppleStrategy from "passport-apple";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "GET") {
    try {
      passport.use(
        new AppleStrategy(
          {
            clientID: "",
            teamID: "DP83K2TK6L",
            callbackURL: "",
            keyID: "",
            privateKeyLocation: "",
            passReqToCallback: true,
          },
          function (
            req: any,
            accessToken: any,
            refreshToken: any,
            idToken: any,
            profile: any,
            cb: (arg0: null, arg1: any) => void
          ) {
            console.log(req, accessToken, refreshToken, idToken, profile);
            cb(null, idToken);
          }
        )
      );

      res.status(200).json({ result: "success" });
    } catch (e: unknown) {
      if (e instanceof Error) {
        res.status(400).send(e.message);
      }
    }
  }
}
