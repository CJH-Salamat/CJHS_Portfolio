import { content } from "../Content";
import { createElement } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import { Pagination } from "swiper";
import { useState } from "react";

const Projects = () => {
  const { Projects } = content;
  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <section className="min-h-fit bg-bg_light_primary" id="projects">
      <div className="md:container px-5 pt-14">
        <h2 className="title" data-aos="fade-down">
          {Projects.title}
        </h2>
        <h4 className="subtitle" data-aos="fade-down">
          {Projects.subtitle}
        </h4>
        <br />
        <Swiper
          direction={"vertical"}
          pagination={{
            clickable: true,
          }}
          data-aos="fade-up"
          loop={true}
          spaceBetween={40}
          slidesPerView={1.7}
          onSlideChange={(e) => {
            console.log(e.realIndex);
            setActiveIndex(e.realIndex);
          }}
          modules={[Pagination]}
          className="md:h-96 h-screen max-w-3xl"
        >
          {Projects.Project_Content.map((content, i) => (
            <SwiperSlide key={i}>
              <div
                className={` duration-500 mx-8 border-2 
              p-8 h-full rounded-2xl flex items-center gap-6
               border-slate-200 md:flex-row flex-col bg-white
                ${activeIndex !== i && "scale-75 blur-sm"}`}
              >
                <img src={content.img} alt="..." className="h-24" />
                <div className="text-xl absolute top-3 right-0 h-16 w-16">
                  <a href={content.link} target="_blank" rel="noreferrer">
                    {createElement(Projects.icon)}
                  </a>                
                </div>
                
                <div className="w-full">
                  <h6>{content.name}</h6>            
                  <br />
                  <p className="sm:text-base text-sm">{content.Proj_Description}</p>
                  
                  <div className="flex flex-wrap gap-4 justify-end mt-5">
                    {content.Proj_T_stack.map((stack, i2) => (
                      <div
                        key={i2}
                        className={`inline-flex items-center rounded-md px-3 py-1 
                          text-xs md:flex-row flex-col bg-primaryLinear
                          ${activeIndex !== i && "scale-75 blur-sm"}`}
                      >
                          <p className="text-white text-sm font-bold">{stack.StackID}</p>               
                      </div>
                    ))}
                  </div>                      
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Projects;
