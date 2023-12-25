import React from "react";

const ContactForm = () => {
  return (
    <div className="bg-gray-200 rounded-xl mt-4 grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 xl:grid-cols-1 justify-between  mx-auto gap-10">
      <div className="mt-10 ">
        <form className="max-w-3xl mx-auto ">
          <h2 className="text-2xl mb-5 font-bold">Send Us a Message</h2>
          <div className="flex gap-5">
            <div className="relative z-0 w-full mb-5 group">
              <input
                type="text"
                name="floating_first_name"
                id="floating_first_name"
                className="block py-2.5 bg-white w-full text-sm  bg-transparent border-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 peer rounded-md px-3"
                placeholder="Enter your name"
                required
              />
              {/* <label className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                Enter Your Name
              </label> */}
            </div>
            <div className="relative z-0 w-full mb-5 group">
              <input
                type="text"
                name="floating_first_name"
                id="floating_first_name"
                className="block py-2.5 bg-white w-full text-sm  bg-transparent border-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 peer rounded-md px-3"
                placeholder="Enter your Mobile Number"
                required
              />
            </div>
          </div>
          <div className="flex gap-5">
            <div className="relative z-0 w-full mb-5 group">
              <input
                type="email"
                name="floating_first_name"
                id="floating_first_name"
                className="block py-2.5 bg-white w-full text-sm  bg-transparent border-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 peer rounded-md px-3"
                placeholder="Enter your email"
                required
              />
            </div>
            <div className="relative z-0 w-full mb-5 group">
              <input
                type="text"
                name="floating_first_name"
                id="floating_first_name"
                className="block py-2.5 bg-white w-full text-sm  bg-transparent border-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 peer rounded-md px-3"
                placeholder="Project Subject"
                required
              />
            </div>
          </div>

          <div className="grid md:grid-cols-1 md:gap-6">
            <div className="relative z-0 w-full mb-5 group">
              <textarea
                className="w-full block py-2.5 bg-white mx-auto text-sm  bg-transparent border-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 peer rounded-md px-3"
                name=""
                id=""
                placeholder="Write your message..."
                rows={4}
              ></textarea>
            </div>
          </div>
          <p className="mb-3 opacity-75 text-sm">We care about your data <span className="text-green-600">Privacy</span></p>
          <button
            type="submit"
            className="mb-8 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
