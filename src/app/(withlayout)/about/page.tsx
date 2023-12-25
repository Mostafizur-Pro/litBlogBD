import Baner from "./Baner";
import Services from "./Services";
import img1 from "../../../../public/About_Us/1694499760578.png";
import Image from "next/image";
import classes from "./index.module.css";
import Link from "next/link";

const AboutPage = () => {
  return (
    <>
      <Baner></Baner>
      <section className="max-w-7xl mx-auto ">
        <div className="md:grid md:grid-cols-3">
          {/* main div */}
          <div className="md:col-span-2 mt-20 px-4">
            {/* about us part */}
            <div className="">
              <h1 className="relative pb-3 text-4xl text-center font-bold uppercase text-[#33435c]">
                About Us{" "}
              </h1>
              <div className="bg-orange-500 h-1 absolute w-8  left-[29.2%]  "></div>
              <p className="mt-3 md:mb-28 mb-20 opacity-90 text-[15px] pt-10 ">
                We craft the digital experience that excites and inspires using
                our cutting edge strategic website design, content development,
                and the art of online marketing (SEO, PPC, Social Media,
                Outreach, Photography, Video Production, Graphics design &
                Branding) campaign. All of these help you to boost online
                reputation, quality traffic, targeted leads, and conversion.
              </p>
              <hr />
            </div>
            {/* our story part */}
            <div className="mt-24">
              <h1 className="relative pb-3 text-4xl text-center font-bold uppercase text-[#33435c]">
                Our Story{" "}
              </h1>
              <div className="bg-orange-500 h-1 absolute w-8  left-[29.2%]  "></div>
              <p className="mt-3 md:mb-28 mb-20 opacity-90 text-[15px] pt-10 ">
                DIGINIEIT initially began as a website services provider. The
                Founder and CEO,{" "}
                <span className="text-red-500 hover:cursor-pointer">
                  Mostafizur Rahman
                </span>{" "}
                &{" "}
                <span className="text-red-500 hover:cursor-pointer">
                  Rafin Hossain
                </span>{" "}
                worked hard to establish this service. They saw that there is a
                lot to improve and provide a better services to local and
                foriegn customers. <br /> <br /> They saw that there is a lot to
                improve and provide a better services to local and foriegn
                customers. After working a while they were able to expand the
                services. Now our company provide various services like design,
                seo, website and Hoasting. also we help them to grow their sells
                and revenew.
              </p>
              <hr />
            </div>
            {/* Our Goal part */}
            <div className="mt-24">
              <h1 className="relative pb-3 text-4xl text-center font-bold uppercase text-[#33435c]">
                Our Goal{" "}
              </h1>
              <div className="bg-orange-500 h-1 absolute w-8  left-[29.2%]  "></div>
              <p className="mt-3 md:mb-28 mb-20 opacity-90 text-[15px] pt-10 ">
                DIGINIEIT initially began as a website services provider. The
                Founder and CEO,{" "}
                <span className="text-red-500 hover:cursor-pointer">
                  Mostafizur Rahman
                </span>{" "}
                &{" "}
                <span className="text-red-500 hover:cursor-pointer">
                  Rafin Hossain
                </span>{" "}
                worked hard to establish this service. They saw that there is a
                lot to improve and provide a better services to local and
                foriegn customers. <br /> <br />
              </p>
              <hr />
            </div>
          </div>
          {/* service part */}
          <div className="md:col-span-1">
            <Services></Services>
          </div>
        </div>
        {/* ceo sections */}
        <div className="mt-10 mb-10">
          <h1 className="uppercase text-center text-4xl font-bold text-[#33435c]">
            founder & ceo
          </h1>
          <hr className="w-10 border-2 border-orange-600 mx-auto mt-2 mb-3" />
          <p className="text-sm opacity-90 mb-16 text-center">
            Creative mind with years of executive experience in marketing,
            technology, and media.
          </p>
          <Link href={"/"}>
            <Image
              src={img1}
              alt="ceo img"
              className={`w-[253px] mx-auto h-[253px] rounded-xl border-4 border-white shadow-xl shadow-black ${classes.custom_shadow}`}
            ></Image>
          </Link>
          <Link href={"/"}>
            <h1 className="text-center mt-20 text-gray-700 text-2xl font-bold">
              Mostafizur Rahman
            </h1>
            <p className="text-sm opacity-90 text-center">
              Founder & CEO Of DeginieIt and Web Developer with 4 in Bangladesh
              since 2018
            </p>
          </Link>
        </div>
        {/* employee img */}
        <div className="mt-10 mb-10">
          <h1 className="uppercase text-center text-4xl font-bold text-[#33435c]">
            founder & ceo
          </h1>
          <hr className="w-10 border-2 border-orange-600 mx-auto mt-2 mb-3" />
          <p className="text-sm opacity-90 mb-16 text-center">
            Creative mind with years of executive experience in marketing,
            technology, and media.
          </p>
          <section className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2">
            <div>
              <Link href={"/"}>
                <Image
                  src={img1}
                  alt="ceo img"
                  className={`w-[253px] mx-auto h-[253px] rounded-xl border-4 border-white shadow-xl shadow-black ${classes.custom_shadow}`}
                ></Image>
              </Link>
              <Link href={"/"}>
                <h1 className="text-center mt-20 text-gray-700 text-2xl font-bold">
                  Mostafizur Rahman
                </h1>
                <p className="text-sm opacity-90 text-center">
                  Founder & CEO Of DeginieIt and Web Developer with 4 in
                  Bangladesh since 2018
                </p>
              </Link>
            </div>
            <div>
              <Link href={"/"}>
                <Image
                  src={img1}
                  alt="ceo img"
                  className={`w-[253px] mx-auto h-[253px] rounded-xl border-4 border-white shadow-xl shadow-black ${classes.custom_shadow}`}
                ></Image>
              </Link>
              <Link href={"/"}>
                <h1 className="text-center mt-20 text-gray-700 text-2xl font-bold">
                  Mostafizur Rahman
                </h1>
                <p className="text-sm opacity-90 text-center">
                  Founder & CEO Of DeginieIt and Web Developer with 4 in
                  Bangladesh since 2018
                </p>
              </Link>
            </div>
            <div>
              <Link href={"/"}>
                <Image
                  src={img1}
                  alt="ceo img"
                  className={`w-[253px] mx-auto h-[253px] rounded-xl border-4 border-white shadow-xl shadow-black ${classes.custom_shadow}`}
                ></Image>
              </Link>
              <Link href={"/"}>
                <h1 className="text-center mt-20 text-gray-700 text-2xl font-bold">
                  Mostafizur Rahman
                </h1>
                <p className="text-sm opacity-90 text-center">
                  Founder & CEO Of DeginieIt and Web Developer with 4 in
                  Bangladesh since 2018
                </p>
              </Link>
            </div>
          </section>
        </div>
      </section>
    </>
  );
};

export default AboutPage;
