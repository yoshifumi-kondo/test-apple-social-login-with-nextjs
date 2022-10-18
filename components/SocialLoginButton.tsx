import { Button } from "@mui/material";
import axios from "axios";
import Link from "next/link";
import React, { FC, useState } from "react";

const SocialLoginButton: FC<{
  providerName: string;
  apiPath: string;
}> = ({ providerName, apiPath }) => {
  const [info, setInfo] = useState({
    error: false,
    message: "click the above button",
  });
  const onClickHandler = async () => {
    try {
      const res = await axios(apiPath);
      await console.log(res);
    } catch (e: any) {
      setInfo({
        error: true,
        message: e.response.data as string,
      });
    }
  };
  return (
    <>
      <Button variant="contained" onClick={onClickHandler}>
        CONNECT TO {providerName}
      </Button>
      <p style={{ margin: 5 }}>{info.error && "error"}</p>
      <p style={{ margin: 5 }}>{info.message}</p>
    </>
  );
};

export const AppleLoginButton = () => (
  <SocialLoginButton providerName="Apple" apiPath="/api/passport-apple" />
);

export const GoogleLoginButton = () => (
  <Link href="/api/passport-google" passHref>
    <button
      style={{
        border: "1px solid black",
        backgroundColor: "white",
        borderRadius: "10px",
        height: "50px",
        width: "200px",
        cursor: "pointer",
      }}
    >
      CONNECT TO GOOGLE
    </button>
  </Link>
);
