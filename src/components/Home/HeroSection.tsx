import React from "react";
import SingleImage from "../SingleImage/SingleImage";
import { heroSectionData } from "../data/heroSectionData";
import classes from "./herosection.module.css"
import Image from "next/image";
import img1 from "../../../public/HeroSection/img-1.jpeg";
import img2 from "../../../public/HeroSection/img-2.webp";
import img3 from "../../../public/HeroSection/img-3.jpeg";
import "./herosection.module.css"

const HeroSection = () => {
  return (
    <div>
      <p className="text-4xl">Hero Section Here</p>
      <section className="grid gap-4 md:grid-cols-12 ">
        {/* first div start */}
        <div className="relative bg-black bg-opacity-60 lg:col-span-6 md:w-full sm:w-[75%] mx-auto md:col-span-5 sm:col-span-6 ">
          <Image
            className="mix-blend-overlay rounded-[13px]"
            src={img1}
            alt="img"
          ></Image>
          <div className="absolute lg:top-[290px] ml-2 ">
            <span className="bg-blue-600 py-[2px] rounded-md text-white lg:ml-6  px-1">
              Travel
            </span>
          </div>
          <div className="w-[75%] absolute lg:top-[325px] lg:ml-5 text-white font-bold">
            <p className="text-3xl">
              6 Things Everyone Must Should Know See Befor Visiting Europe.
            </p>
          </div>
        </div>
        {/* second div start */}
        <div className="lg:col-span-6 md:col-span-7 sm:col-span-6 gap-4 grid grid-cols-12 ">
          <div className={`col-span-6 ${classes.img1} relative`}>
          <div className="absolute lg:top-[116px] md:top-[100px] ml-2 ">
                <span className="bg-purple-600 rounded-sm text-white px-1">
                  Travel
                </span>
              </div>
            <div className="md:w-[75%] sm:w-[95%] w-full font-normal absolute lg:top-36 md:top-32 ml-2 text-white md:font-bold sm:font-normal ">
              <p>6 Things You Must See Befor Visiting Europe</p>
            </div>
          </div>

          <div className="col-span-6 relative">
            <div className=" bg-black bg-opacity-60">
              <Image
                className="rounded-[10px] mix-blend-overlay"
                src={img3}
                alt="img"
              ></Image>
            </div>
            <div className="absolute top-[116px] ml-2 ">
              <span className="bg-purple-600 rounded-sm text-white px-1">
                Travel
              </span>
            </div>
            <div className="w-[75%] absolute top-36 ml-2 text-white font-bold">
              <p>6 Things You Must See Befor Visiting Europe</p>
            </div>
          </div>
          <div className="col-span-6 relative">
            <div className=" bg-black bg-opacity-60">
              <Image
                className="rounded-[10px] mix-blend-overlay"
                src={img3}
                alt="img"
              ></Image>
            </div>
            <div className="absolute top-[116px] ml-2 ">
              <span className="bg-purple-600 rounded-sm text-white px-1">
                Travel
              </span>
            </div>
            <div className="w-[75%] absolute top-36 ml-2 text-white font-bold">
              <p>6 Things You Must See Befor Visiting Europe</p>
            </div>
          </div>
          <div className="col-span-6 relative">
            <div className=" bg-black bg-opacity-60">
              <Image
                src={img2}
                alt="img"
                className="mix-blend-overlay rounded-[10px]"
              ></Image>
            </div>
            <div className="absolute top-[116px] ml-2 ">
              <span className="bg-purple-600 rounded-sm text-white px-1">
                Travel
              </span>
            </div>
            <div className="w-[75%] absolute top-36 ml-2 text-white font-bold">
              <p>6 Things You Must See Befor Visiting Europe</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HeroSection;
