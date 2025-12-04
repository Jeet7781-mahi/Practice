import React from "react";
import muj from "../Images/muj-logo.png";
import vit from "../Images/desktop-wallpaper-vit-logo-vellore-institute-of-technology-vector-indian-institute-logo-thumbnail.jpg";
import srm from "../Images/images.png";
import left from "../Images/circled-left-chevron-svgrepo-com.svg";
import right from "../Images/circled-right-chevron-svgrepo-com.svg";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

/*
  NOTE:
  - We use custom prev/next elements with classes .uni-prev and .uni-next
  - The navigation option references those selectors.
  - CSS below positions the circular green buttons outside the slider.
*/

export default function UniversitiesCarousel() {
  const logos = [
    { id: 1, img: muj },
    { id: 2, img: vit },
    { id: 3, img: srm },
    { id: 4, img: muj },
    { id: 5, img: vit },
    { id: 6, img: srm },
  ];

  return (
    <section id="collaborations" className="container py-12 bg-white relative">
      <div className=" px-5 text-center mx-auto relative">

        {/* heading */}
        <p className="text-sm text-gray-500">Domestic</p>
        <h2 className="text-3xl font-bold mb-6">
          <span className="text-indigo-600">Offline</span> University
        </h2>

        {/* LEFT arrow (outside) */}
        <button
          className="uni-prev hidden md:flex absolute left-0 top-2/4  rounded-full bg-emerald-100 text-emerald-600 shadow-lg hover:bg-emerald-200 transition z-20"
          aria-label="previous">
          <span className="text-2xl font-extrabold"><img src={left} alt="" srcset="" /></span>
        </button>

        {/* RIGHT arrow (outside) */}
        <button
          className="uni-next hidden md:flex  absolute right-0 top-2/4  w-10 h-10 rounded-full bg-emerald-100 text-emerald-600 shadow-lg hover:bg-emerald-200 transition z-20"
          aria-label="next">
          <span className="text-2xl font-extrabold"><img src={right} alt="" srcset="" /></span>
        </button>

        {/* Swiper */}
        <div className="mx-10">
          <Swiper
            modules={[Navigation, Autoplay]}
            navigation={{
              prevEl: ".uni-prev",
              nextEl: ".uni-next",
            }}
            autoplay={{ delay: 2500, disableOnInteraction: false }}
            loop={true}
            spaceBetween={28}
            slidesPerView={4}
            breakpoints={{
              320: { slidesPerView: 1, spaceBetween: 12 },
              480: { slidesPerView: 2, spaceBetween: 16 },
              768: { slidesPerView: 3, spaceBetween: 20 },
              1024: { slidesPerView: 4, spaceBetween: 28 },
            }}
            className="py-5"
          >
            {logos.map((logo) => (
              <SwiperSlide key={logo.id}>
                <div className="bg-gray-50 p-6 rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 flex justify-center items-center h-28">
                  <img src={logo.img} alt={`logo-${logo.id}`} className="h-16 object-contain" />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}
