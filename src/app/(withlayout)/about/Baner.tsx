import classes from "./index.module.css";

const Baner = () => {
  return (
    <section className={`${classes.banerImg} px-[16px]`}>
      <div className="text-center">
        <h1 className="text-[#33435c] uppercase text-4xl font-bold">
          Welcome To Diginieit litblog
        </h1>
        <p className="text-[18px] mb-[16px] text-[#52627a]">
          Check this Page to Learn More about Our Team and Expertise
        </p>
        <a href="#meet-the-team" className="cursor-pointer uppercase bg-[#ef831d] text-white rounded-md p-3 font-bold ">meet the team</a>
      </div>
    </section>
  );
};

export default Baner;
