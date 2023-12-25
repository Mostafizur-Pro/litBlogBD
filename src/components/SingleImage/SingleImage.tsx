import Image from "next/image";
import React from "react";

const SingleImage = (param: { data: any; }) => {
  const { data } = param;
  return (
    <>
      <div className="">
        <div className="relative border-red-60">
          <Image
            className="absolute rounded-lg h-[240px] w-[220px]"
            src={data.img}
            alt="img"
          />
          <div className="absolute  px-1 top-36">
            {/* {data.tag} */}
            {data.tag.map((stag: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | React.PromiseLikeOfReactNode | null | undefined, i: React.Key | null | undefined) => {
              return (
                <span className="text-white bg-purple-600 p-[2px] rounded-sm ml-2" key={i}>
                  {stag}
                </span>
              );
            })}
          </div>
          <div className="items-center flex justify-center ml-2 lg:-ml-14">
            <p className="relative font-bold text-white pt-3 top-40 w-[220px]">
              {data.title}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleImage;
