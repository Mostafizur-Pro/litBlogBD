
import React from "react";
import SingleImage from "../SingleImage/SingleImage";
import { trendingPostData } from "../data/trendingPostData";

const TrendingPost = () => {
  return (
    <>
      <div className="">
        <section className="flex items-center justify-between px-2 pt-12 mb-4">
          <div>
            <h1 className="font-bold text-4xl">Trending Post</h1>
          </div>
          <div>
            <button className="uppercase p-2 border-2 rounded-lg">
              View All Post
            </button>
          </div>
        </section>
        <div className="grid lg:grid-cols-4 md:grid-cols-4 grid-cols-2 sm:grid-cols-4  gap-3  justify-around h-[544px] lg:h-64 w-full">
          {trendingPostData.map((data, i) => {
            return (
              <div key={i}>
                <SingleImage data={data}></SingleImage>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default TrendingPost;
