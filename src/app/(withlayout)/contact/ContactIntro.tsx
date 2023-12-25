import React from "react";

const ContactIntro = () => {
  return (
    <>
      <section className="">
        <div>
          <h1 className="text-4xl font-bold mt-6">Get In Touch</h1>
          <p className="opacity-75 mt-4">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illo
            exercitationem similique eaque ducimus labore rerum sunt aliquam
            sapiente, aspernatur, accusantium vel odit, perferendis esse magni
            cupiditate tenetur nulla. Quo, autem!
          </p>
        </div>
        <div className="md:flex gap-10 mt-7 ">
          <div className="border-2 md:w-[50%] sm:w-[75%] border-gray-400 p-4 rounded-lg">
            <h1 className="font-semibold text-xl">Address</h1>
            <address className="mt-1">
              1200 Dhaka-Uttora,What to say, <br /> Dhaka-Bangladesh
            </address>
          </div>
          <div className="border-2 md:w-[50%] sm:w-[75%] md:mt-0 mt-2  border-gray-400 p-4 rounded-lg">
            <h1 className="font-semibold text-xl">Contact</h1>
            <address className="mt-1">
            mdabujayed2006@gmail.com <br /> 01950-165017
            </address>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactIntro;
