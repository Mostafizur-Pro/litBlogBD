"use client";

import React, { useCallback, useRef, useState } from "react";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";

import classes from "./index.module.css";
import "./index.module.css"

type FormData = {
  name: string;
  email: string;
  password: string;
  passwordConfirm: string;
};

const LoginForm = () => {
  const searchParams = useSearchParams();
  const allParams = searchParams.toString()
    ? `?${searchParams.toString()}`
    : "";
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const onSubmit = (event: { preventDefault: () => void; }) => {
    event.preventDefault();
  };

  return (
    <>
      <div>
        <form onSubmit={onSubmit} className={classes.form}>
          {/* <p>{error}</p> */}
          <input
            className="input bg-gray-100 w-full border  focus:border-hidden border-gray-500  "
            name="email"
            placeholder="Email Address"
            required
            type="email"
          />
          {/* <input
            className="input bg-gray-100 w-full border  focus:border-hidden border-gray-500  "
            name="name"
            placeholder="Full name"
            required
            type="text"
          /> */}
          <input
            className="input bg-gray-100 w-full border  focus:border-hidden border-gray-500  "
            name="password"
            type="password"
            placeholder="Password"
            required
          />
          {/* <input
            className="input bg-gray-100 w-full border  focus:border-hidden border-gray-500  "
            name="passwordConfirm"
            type="password"
            placeholder="Confirm Password"
            required
          /> */}
          <button className="bg-black text-white input w-full" type="submit" disabled={loading}>
            {loading ? "Processing" : "Login"}
          </button>
          <div>
            {"Don't have an account? "}
            <Link href={`/signUp`} className="underline">SignUp</Link>
          </div>
        </form>
      </div>
    </>
  );
};

export default LoginForm;
