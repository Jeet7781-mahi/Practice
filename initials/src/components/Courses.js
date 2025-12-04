import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faMapMarkerAlt, faGraduationCap, faHeart } from "@fortawesome/free-solid-svg-icons";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

// Images
import uniImage1 from "../Images/graduate-guy-graduation-gown-with-diploma-his-hands-campus.jpg"; 
import uniImage2 from "../Images/graduate-guy-graduation-gown-with-diploma-his-hands-campus.jpg"; 
import uniImage3 from "../Images/graduate-guy-graduation-gown-with-diploma-his-hands-campus.jpg"; 
import uniImage4 from "../Images/graduate-guy-graduation-gown-with-diploma-his-hands-campus.jpg"; 

const CoursesGrid = () => {
  const universities = [
    { id: 1, name: "Guru Nanak Institute of...", location: "157/F, Nifunj Rd, Sahid Colony...", rating: 4.8, likes: 312, courses: ["B.PHARM"], img: uniImage1, primaryTag: "B.PHARM" },
    { id: 2, name: "Adamas University", location: "Adamas Knowledge City, Barasat...", rating: 4.0, likes: 361, courses: ["BA", "PGDM", "B.PHARM"], img: uniImage2, primaryTag: "B.PHARM" },
    { id: 3, name: "Brainware University", location: "398, Ramkrishnapur Rd, near...", rating: 5.0, likes: 241, courses: ["PGDM", "BBA", "BCA", "B.PHARM"], img: uniImage3, primaryTag: "B.PHARM" },
    { id: 4, name: "Siksha 'O' Anusandhan (SOA)...", location: "J-15, Khandagiri Marg, Dharam ", rating: 4.2, likes: 121, courses: ["B.PHARM", "B.TECH"], img: uniImage4, primaryTag: "B.PHARM" },
    { id: 5, name: "Siksha 'O' Anusandhan (SOA)...", location: "J-15, Khandagiri Marg, Dharam", rating: 4.2, likes: 121, courses: ["B.PHARM", "B.TECH"], img: uniImage4, primaryTag: "B.PHARM" },
  ];

  return (
    <section className="py-14  relative">
      <div className="container my-auto  px-4 sm:px-6 md:px-10">

        {/* Heading */}
        <div className="flex items-center justify-center gap-3 mb-10">
          <FontAwesomeIcon icon={faGraduationCap} className="h-10 w-10 text-indigo-600" />
          <h2 className="text-3xl md:text-4xl font-bold">
            Domestic <span className="text-indigo-600">Online</span> University
          </h2>
        </div>

        {/* Arrows outside */}
    <button className="uni-prev hidden md:flex items-center justify-center 
      absolute -left-10 top-1/2 -translate-y-1/2 w-12 h-12 bg-white shadow-lg 
      rounded-full text-gray-600 text-xl hover:scale-110 transition z-20">
      ❮
    </button>

    <button className="uni-next hidden md:flex items-center justify-center 
      absolute -right-10 top-1/2 -translate-y-1/2 w-12 h-12 bg-white shadow-lg 
      rounded-full text-gray-600 text-xl hover:scale-110 transition z-20">
      ❯
    </button>

        {/* Carousel */}
        <Swiper
      modules={[Navigation, Autoplay]}
      autoplay={{ delay: 2500 }}
      loop={true}
      navigation={{ nextEl: ".uni-next", prevEl: ".uni-prev" }}
      breakpoints={{
        320: { slidesPerView: 1, spaceBetween: 10 },
        600: { slidesPerView: 1.3, spaceBetween: 15 },
        768: { slidesPerView: 2, spaceBetween: 20 },
        1024: { slidesPerView: 4, spaceBetween: 22 },
        1400: { slidesPerView: 4, spaceBetween: 25 },
      }}
      className="pb-6 px-6"
    >
          {universities.map((uni) => (
            <SwiperSlide key={uni.id}>
              <div className="bg-white h-[330px] my-auto  border border-gray-200 rounded-xl overflow-hidden   hover:shadow-2xl transition-shadow duration-300">

                {/* IMAGE */}
                <div className="relative h-40 bg-cover bg-center" style={{ backgroundImage: `url(${uni.img})` }}>

                  {/* Small tags */}
                  <div className="absolute top-3 left-1/2 -translate-x-1/2 flex flex-wrap justify-center gap-1">
                    {uni.courses.map((course, index) => (
                      course !== uni.primaryTag && (
                        <span key={index} className="text-[10px] px-2 py-0.5 bg-black/60 text-white rounded shadow-md">
                          {course}
                        </span>
                      )
                    ))}
                  </div>

                  {/* Big Tag Bar */}
                  <div className="absolute bottom-[-10px] left-10 right-10 h-16 bg-white/100 rounded-t-[10px] flex items-start justify-center pt-3 ">                   
                    <span className="px-4 py-1 bg-green-600 text-white rounded-full text-xs font-bold shadow-md">
                      {uni.primaryTag}
                    </span>
                  </div>
                </div>

                {/* CONTENT */}
                <div className="p-4 space-y-2 pt-6">
                  <h3 className="text-base font-bold text-gray-800 line-clamp-2">{uni.name}</h3>

                  <div className="flex items-start text-sm text-gray-600">
                    <FontAwesomeIcon icon={faMapMarkerAlt} className="h-4 w-4 mr-2 text-gray-400" />
                    <p className="line-clamp-2">{uni.location}</p>
                  </div>

                  <div className="flex justify-between items-center pt-3">
                    <div className="flex items-center text-yellow-500">
                      <FontAwesomeIcon icon={faStar} className="h-3 w-3 mr-1" />
                      <span className="font-semibold text-gray-700">{uni.rating}</span>
                    </div>

                    <div className="flex items-center text-red-500 cursor-pointer hover:text-red-600">
                      <FontAwesomeIcon icon={faHeart} className="h-3 w-3 mr-1" />
                      <span>{uni.likes}</span>
                    </div>
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

export default CoursesGrid;
