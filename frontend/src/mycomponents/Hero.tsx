import { Link } from "react-router-dom";
const Hero = () => {
  return (
    <>
      <section className="bg-secondary py-[9.6rem] px-[3.2rem]">
        <div className="grid grid-cols-2 max-w-[130rem] mx-auto items-center gap-[9.6rem] ">
          <div className="">
            <h1 className="text-[5.2rem] font-custom font-bold leading-[1.05] text-[#333] tracking-[-0.5px] mb-[3.2rem] ">
              Farmers' yields, cold-stored for freshness and swift distribution.
            </h1>
            <p className="text-[2rem] font-custom font-normal leading-[1.6] mb-[4.8rem] ">
              Elevate farmers' well-being with a personalized cold storage
              subscription, offering flexibility to access crops at their
              convenience for a continuous supply of healthful harvests, 365
              days a year.
            </p>
            <Link to="#">
              <a className="inline-block font-semibold font-custom bg-primary text-foreground text-[2rem] py-[1.6rem] px-[3.2rem] rounded-[9px] no-underline mr-[1.6rem] duration-100 hover:bg-primary/90 shadow  ">
                Start storing
              </a>
              <a className="inline-block font-semibold font-custom bg-primary text-foreground text-[2rem] py-[1.6rem] px-[3.2rem] rounded-[9px] no-underline ml-[1.6rem] duration-100 hover:bg-primary/90 shadow">
                Learn more &darr;
              </a>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
