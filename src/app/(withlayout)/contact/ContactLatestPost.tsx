import Image from "next/image";
import React from "react";
import Image1 from "../../../../public/HeroSection/img-1.jpeg";

const ContactLatestPost = () => {
  return (
    <>
      <div className="">
        <h2 className="font-bold text-4xl m-4">latest Post</h2>
        <div className="flex mt-2">
          <div>
            <Image className="w-48 rounded-md " src={Image1} alt="" />
          </div>
          <div className="flex flex-col ps-2 ">
            <h4 className="font-bold text-2xl ">
              Editor Pick thisis the title
            </h4>
            <h1>Dec 27, 2023</h1>
          </div>
        </div>
        <div className="flex mt-2">
          <div>
            <Image className="w-48 rounded-md " src={Image1} alt="" />
          </div>
          <div className="flex flex-col ps-2 ">
            <h4 className="font-bold text-2xl ">
              Editor Pick thisis the title
            </h4>
            <h1>Dec 27, 2023</h1>
          </div>
        </div>
        <div className="flex mt-2">
          <div>
            <Image className="w-48 rounded-md " src={Image1} alt="" />
          </div>
          <div className="flex flex-col ps-2 ">
            <h4 className="font-bold text-2xl ">
              Editor Pick thisis the title
            </h4>
            <h1>Dec 27, 2023</h1>
          </div>
        </div>
        <div className="flex mt-2">
          <div>
            <Image className="w-48 rounded-md " src={Image1} alt="" />
          </div>
          <div className="flex flex-col ps-2 ">
            <h4 className="font-bold text-2xl ">
              Editor Pick thisis the title
            </h4>
            <h1>Dec 27, 2023</h1>
          </div>
        </div>
        <div className="flex mt-2">
          <div>
            <Image className="w-48 rounded-md " src={Image1} alt="" />
          </div>
          <div className="flex flex-col ps-2 ">
            <h4 className="font-bold text-2xl ">
              Editor Pick thisis the title
            </h4>
            <h1>Dec 27, 2023</h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactLatestPost;
