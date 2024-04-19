// import content
import { useEffect } from "react";
import { content } from "../Content";
const Banner = () => {
  const { Banner } = content;

  return (
    <section id="home" className="overflow-hidden">
      <div className="min-h-screen relative flex md:flex-row flex-col-reverse md:items-end justify-center items-center">
        <div
          data-aos="slide-left"
          data-aos-delay="1200"
          className="absolute h-full md:w-4/12 w-8/12 top-0 right-0 bg-primaryLinear bottom-0 -z-10"
        >
          <h1 className="rotate-90 absolute top-[32%] right-[-40%] text-[#EAF2FA]">
            {Banner.firstName}{" "}
            <span className="text-dark_primary">{Banner.LastName}</span>
          </h1>
        </div>

        {/* first col */}
        <div className="pb-16 px-6 pt-5" data-aos="fade-down">
          <h1>{Banner.title}</h1>          
          
          <div className="flex flex-col gap-10 mt-10">
            <div
              data-aos="fade-down"
              className={`flex items-center w-80 gap-5`}
            >
              <h4>{Banner.AboutTitle}</h4>
              
            </div >
            <div data-aos="fade-down" className="flex-row-reverse indent-10 text-justify w-80 gap-5">
              <p >{Banner.AboutBody}</p>
              </div> 
          </div>

          <br />
          <div className="flex justify-end">
          <a href={Banner.docs} target='_blank'>
            <button className="btn">{Banner.btnText}</button>
          </a>
          </div>
        </div>

        {/* sec col */}
        <div className="md:h-[37rem] h-96">
          <img
            src={Banner.image}
            data-aos="slide-up"
            alt="..."
            className="h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default Banner;
