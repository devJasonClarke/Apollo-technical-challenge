import React, { useEffect } from "react";
import style from "./Login.module.scss";
import { Link } from "react-router-dom";
import { Paragraph } from "../../components/Paragraph/Paragraph";
import { Heading } from "../../components/Heading/Heading";
import { CustomConnectButton } from "../../components/ConnectButton/ConnectButton";

const Login: React.FC = () => {
  return (
    <div className={style.container}>
      <Heading text="connect" />
      <Paragraph
        text="  Please connect your Ethereum wallet to view the collection."
        color="reg"
      />

      <CustomConnectButton />

      {/*  <Link className={style.cta_button} to="/collections">
      <ConnectButton />
      </Link> */}
    </div>
  );
};

export default Login;
