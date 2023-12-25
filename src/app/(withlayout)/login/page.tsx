import React from "react";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import LoginForm from "./LoginForm";

import classes from "./index.module.css";

const LoginPage = () => {

  return (
    <section className={classes.createAccount}>
      <div className={classes.heroImg}>
        <Link href="/">
          <Image
            src="/Logo.svg"
            alt="logo"
            width={250}
            height={23}
            className={classes.logo}
          />
        </Link>
      </div>

      <div className={classes.formWrapper}>
        <div className={classes.formContainer}>

          <div className={classes.formTitle}>
            <h3 className="text-3xl font-semibold">Welcome</h3>
            <Image
              src="/assets/icons/hand.png"
              alt="hand"
              width={30}
              height={30}
            />
          </div>

          <p className="text-gray-600 font-semibold">Please Login Here</p>

          <LoginForm />
        </div>
      </div>
    </section>
  );
};

export default LoginPage;

export const metadata: Metadata = {
  title: "Account",
  description: "Create an account or log in to your existing account.",
};
