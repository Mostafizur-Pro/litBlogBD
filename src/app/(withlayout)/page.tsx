;
import Advertisement from "@/components/Advertisement/Advertisement";
import BannerCard from "@/components/Home/BannerCard";

import HeroSection from "@/components/Home/HeroSection";

import EditorPick from "@/components/Home/Editor";

import PostCard from "@/components/Home/PostCard";
import TrendingPost from "@/components/Home/TrendingPost";
import Link from "next/link";

const Home = () => {
  return (
    <main className="container mx-auto">
    {/* Banner Component */}
    <section>
       <HeroSection />
    </section>
    {/* TrendingPost Component */}
    <section>
       <TrendingPost />
    </section>
    {/* EditorPick Component */}
    <section>
       <EditorPick />
    </section>

    {/* Advertisement Component */}
    <section className="pt-12">
       {/* <Advertisement /> */}
    </section>

    <section className="pt-12">
      {/* <HeroSection></HeroSection> */}
    </section>

    {/* trending post */}
    <section className="pt-12">
      {/* <TrendingPost></TrendingPost> */}
    </section>

    {/* Latest Post */}
    {/* <section className="my-20">
       <h3 className="text-base-content font-bold text-2xl mb-8 font-work leading-8">
          Latest Post
       </h3>
       <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((item: any) => (
             <PostCard key={item} />
          ))}
       </div>
       <div className="flex items-center justify-center w-full mt-8">
          <Link
             href={`/blog`}
             className="btn btn-outline btn-secondary text-secondary-content/60 font-work font-medium text-base"
          >
             View All Post
          </Link>
       </div>
    </section> */}

    {/* Advertisement Component */}
    <section className="mb-24">
       {/* <Advertisement /> */}
    </section>
 </main>
  );
};

export default Home;
