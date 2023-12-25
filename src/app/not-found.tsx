import Image from "next/image";
import React from "react";
import img1 from "../../public/404-error-page.jpeg";
import Link from "next/link";

const NotFound = () => {
  return (
    <>
      <section className="flex pt-20 max-w-6xl h-[100vh] mx-auto gap-8">
        <div className="w-[70%]">
          <Image src={img1} className="h-[60vh] w-full" alt="404 img"></Image>
        </div>
        <div>
          <h1 className="text-4xl">Sorry, This page is lost.</h1>
          <p>
            Uhh... Looks like we broke something. This page you were looking for
            has vanished or got eaten.
          </p>
          <br />
          <h1>
            Why not try with{" "}
            <span className="font-bold text-green-700">
              <Link href={"/"}>HOME</Link>
            </span>{" "}
            page or these Popular pages.
          </h1>
          <ul className="text-green-700 font-semibold">
            <li>
              <Link href={"/blog"}> - Blog</Link>
            </li>
            <li>
              <Link href={"/technology"}> - Technology</Link>
            </li>
            <li>
              <Link href={"/contact"}> - Contact</Link>
            </li>
            <li>
              <Link href={"/about"}> - About Us</Link>
            </li>
          </ul>
        </div>
      </section>
    </>
  );
};

export default NotFound;
