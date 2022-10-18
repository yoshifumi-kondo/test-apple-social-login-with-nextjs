// import * as bodyParser from "body-parser";
import { NextApiRequest, NextApiResponse } from "next";
import passport from "passport";
import AppleStrategy from "passport-apple";

try {
  passport.use(
    new AppleStrategy(
      {
        clientID: "",
        teamID: "",
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
} catch {
  console.log("error");
}

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "GET") {
    res.status(200).json({ result: "success" });
  }
}
