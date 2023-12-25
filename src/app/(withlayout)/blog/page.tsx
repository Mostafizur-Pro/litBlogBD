import PageInfo from "@/components/Blog/PageInfo";
import PostOverlayCard from "@/components/Blog/PostOverlayCard";
import Advertisement from "@/components/Advertisement/Advertisement";
import PostCard from "@/components/Home/PostCard";

const BlogListing = () => {
  return (
    <main>
      <div className="container mx-auto">
        {/* Page title info */}
        <section>
          <PageInfo />
        </section>

        {/* Banner */}
        <section className="my-12">
          <PostOverlayCard />
        </section>

        {/* All posts component */}
        <section className="my-20">
          <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((item: any) => (
              <PostCard key={item} />
            ))}
            BlogComponent{" "}
          </div>
          <div className="flex items-center justify-center w-full mt-8">
            <button className="btn btn-outline btn-secondary font-work px-5 text-base font-medium">
              Load More
            </button>
          </div>
        </section>

        {/* Advertisement component */}
        <section className="mb-24">
          <Advertisement />
        </section>
      </div>
    </main>
  );
};

export default BlogListing;
