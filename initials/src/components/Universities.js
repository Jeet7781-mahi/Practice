import React from "react";
import muj from "../Images/muj-logo.png";
import vit from "../Images/desktop-wallpaper-vit-logo-vellore-institute-of-technology-vector-indian-institute-logo-thumbnail.jpg";
import srm from "../Images/images.png";

// Swiper v12 imports
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

export default function Universities() {
  const logos = [
    { id: 1, img: muj },
    { id: 2, img: vit },
    { id: 3, img:  srm },
     { id: 1, img: muj },
       { id: 2, img: vit },
        { id: 3, img:  srm }
  ];

  return (
    <section id="collaborations" className="py-12 bg-white">
      <div className="container px-5 text-center">

        {/* Section heading */}
        <p className="text-sm text-gray-500">Universities</p>
        <h2 className="text-3xl font-bold mb-6">
          <span className="text-indigo-600">Top</span> Collaborations
        </h2>

        <Swiper
          modules={[Navigation, Autoplay]}
          navigation={true}
          autoplay={{ delay: 2500 }}
          loop={true}
          spaceBetween={20}
          slidesPerView={4}
          breakpoints={{
            320: { slidesPerView: 1 },
            480: { slidesPerView: 2 },
            768: { slidesPerView: 3 },
            1024: { slidesPerView: 4 },
          }}
          className="py-5"
        >
          {logos.map((logo) => (
            <SwiperSlide key={logo.id}>
              <div className="bg-gray-50 p-6 rounded-xl shadow hover:shadow-lg transition-all duration-300 flex justify-center items-center">
                <img src={logo.img} alt="" className="h-16 object-contain" />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

      </div>
    </section>
  );
}
