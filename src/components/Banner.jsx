// import content
import { createElement } from "react";
import { useEffect } from "react";
import { content } from "../Content";
import { TypeAnimation } from 'react-type-animation';
const Banner = () => {
  const { Banner } = content;

  return (
    <section id="home" className="overflow-hidden">
      <div className="min-h-screen relative flex md:flex-row flex-col-reverse md:items-end justify-center items-center">
        <div
          data-aos="slide-left"
          data-aos-delay="1200"
          className="absolute h-full md:w-4/12 w-8/12 top-0 right-0 bottom-0 -z-10
                      bg-primaryLinear"
        >
          <h1 className="rotate-90 absolute lg:top-[35%] lg:right-[-40%] top-[15%] right-[-50%] text-[#EAF2FA]">
            {Banner.firstName}{" "}
            <span className="text-dark_primary">{Banner.LastName}</span>
          </h1>
        </div>

        {/* first col */}
        <div className="pb-16 px-6 pt-5 lg:w-4/12 w-full" data-aos="fade-down">

          <TypeAnimation
            sequence={[          
              'Web Developer ',
              3000, 
              'System Analyst ',
              3000,
              'Database Admin ',
              3000,
            ]}
            wrapper="h1"
            speed={20}
            style={{ }}
            repeat={Infinity}
          />

          <div className="flex flex-wrap gap-4 justify-start">
            {Banner.Banner_media.map((content, i) => (
              <div
                key={i}
                data-aos="fade-down"
                data-aos-delay={i * 200}
                className="flex items-center gap-1 mt-5"
              >
                <a className="font-Poppins" title={content.Icon_title} href={content.link} target="_blank">
                  <h4 className="color: #000000">{createElement(content.icon)}</h4>
                </a>                
              </div>
            ))}
          </div>

          <br />
          
          <div className="flex flex-col gap-10 lg:mt-10 mt-20">
            <div
              data-aos="fade-down"
              className={`btn bg-white flex justify-start gap-5`}
            >
              <h4>{Banner.AboutTitle}</h4>
              
            </div >
            <div className="flex justify-center gap-5">
              <div data-aos="fade-down" className="flex-row-reverse indent-10 text-justify w-80 gap-5">
                <p>{Banner.AboutBody}</p>
              </div> 
            </div>
          </div>

          <br />
          <div className="flex justify-end">
          <a href={Banner.docs} target='_blank'>
            <button className="btn bg-white">{Banner.btnText}</button>
          </a>
          </div>
        </div>

        {/* sec col */}
        <div className="md:h-[37rem] h-96 lg:mt-0 mt-10">
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
