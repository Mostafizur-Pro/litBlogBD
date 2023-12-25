import React from "react";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import CreateAccountForm from "./SignUpForm";

import classes from "./index.module.css";

const SignUpPage = () => {

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
            <h3>Create Account</h3>
            <Image
              src="/assets/icons/hand.png"
              alt="hand"
              width={30}
              height={30}
            />
          </div>

          <p>Please enter details</p>

          <CreateAccountForm />
        </div>
      </div>
    </section>
  );
};

export default SignUpPage;

export const metadata: Metadata = {
  title: "Account",
  description: "Create an account or log in to your existing account.",
};
