import React,{useState,useEffect} from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, EffectFade } from "swiper/modules";


import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
const API_URL = "https://easylearne.com/wp-json/wp/v2/pages/7";

// StatBoxes component (as revised above)
const StatBoxes = () => {
  const stats = [
    { count: "250+", label: "BEST INSTRUCTORS" },
    { count: "2,000+", label: "COURSES" },
    { count: "10,000+", label: "STUDENTS" },
  ];

  return (
    <div className="flex flex-col sm:[display:-webkit-box] md:[display:-webkit-box] lg:[display:flex] gap-3 sm:gap-4">
      {stats.map((stat, index) => (
        <div
          key={index}
          className="
            bg-blue-600 text-white 
            p-2 sm:p-3 md:p-4 
            rounded-lg shadow-xl 
            text-center 
            hover:bg-blue-700 
            transition-all duration-300 
            w-[140px] sm:w-[160px] md:w-[180px] lg:w-[200px]
          "
        >
          <p className="text-lg sm:text-xl md:text-2xl font-bold">{stat.count}</p>
          <p className="text-[9px] sm:text-[10px] md:text-xs font-medium tracking-wide">
            {stat.label}
          </p>
        </div>
      ))}
    </div>
  );
};

export default function Hero() {
     const [heroData, setHeroData] = useState(null);
    useEffect(() => {
    fetch(API_URL)
      .then((res) => res.json())
      .then((data) => setHeroData(data.acf))
      .catch((err) => console.error("Hero API Error:", err));
     }, []);
    if (!heroData) {
        return <div className="text-center py-20">Loading...</div>;
    }
  const slides = [
    { id: 1, bg: heroData.hero_banner_1 ,showText: true,showBoxes: true },
    { id: 2, bg: heroData.hero_banner_2 },
    { id: 3, bg: heroData.hero_banner_3 },
  ];

  return (
    <section className="
      relative w-full 
      h-[220px] sm:h-[260px] md:h-[350px] lg:h-[400px] xl:h-[430px] // Adjusted section height
      overflow-hidden"
    >
      <Swiper
        modules={[Autoplay, Pagination, EffectFade]}
        autoplay={{ delay: 10000000 }}
        pagination={{ clickable: true }}
        effect="fade"
        loop
        className="absolute inset-0 w-full h-full"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>

  {/* Correct Responsive Image Behavior */}
 <img
  src={slide.bg}
  alt="easyLearne"
  className="
    w-full h-full 
    object-cover 
    sm:object-cover 
    md:object-cover 
    lg:object-cover
  "
/>

  {/* Overlay only on slide 1 */}
  {slide.showText && (
    <div className="absolute inset-0 "></div>
  )}

  {/* First Slide Content */}
  {slide.showText && (
    <div className="absolute inset-0 flex items-center justify-center">
      
      {/* Responsive layout: stacked on mobile, side-by-side on desktop */}
      <div className="
        grid 
        grid-cols-1 
        lg:grid-cols-2 
        gap-6 
        px-4 sm:px-10 md:px-16 lg:px-24 
        items-center
      ">
        
        {/* LEFT TEXT BLOCK */}
        <div className="text-black space-y-3 sm:text-center lg:text-left max-w-xl mx-auto">

          <h1 className="
            font-bold 
            leading-tight
            text-[clamp(1rem,4vw,2.8rem)]
          " dangerouslySetInnerHTML={{ __html: heroData.hero_header }}/>
          
         

          <p className="
            text-[clamp(0.65rem,1.4vw,1.15rem)] 
            opacity-90 font-semibold
          " style={{ paddingRight: "99px" }}  dangerouslySetInnerHTML={{ __html: heroData.hero_description }} />
            

          {/* Buttons */}
          <div className="flex inline-grid lg:[display:flex] justify-center lg:justify-start gap-3 pt-2">
            <button className="
              bg-blue-600 hover:bg-blue-700 
              text-white 
              px-4 py-2 
              rounded-md 
              text-[clamp(0.65rem,1vw,1rem)] 
              font-semibold
            ">
              Start Now
            </button>

            <button className="
              border border-white 
              hover:bg-white hover:text-black 
              px-4 py-2 
              rounded-md 
              text-[clamp(0.65rem,1vw,1rem)] 
              font-semibold
            ">
              Study Abroad
            </button>
          </div>
        </div>

        {/* RIGHT STAT BOXES */}
        {slide.showBoxes && (
  <div className="hidden md:flex justify-center lg:justify-end">
    <StatBoxes compact={slide.compact} />
  </div>
)}
      </div>
    </div>
  )}
</SwiperSlide>

        ))}
      </Swiper>
    </section>
  );
}