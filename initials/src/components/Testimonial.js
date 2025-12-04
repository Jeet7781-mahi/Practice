import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";

// Helper function to check screen size
const getCardsPerView = () => {
  if (window.innerWidth >= 1024) { // Large screens (lg)
    return 2;
  }
  return 1; // Default for small and medium screens
};

const testimonials = [
  // ... (Your original testimonial data)
  {
    name: "Anisha Ghosh",
    role: "University of PECS Hungary",
    img: "https://i.pravatar.cc/100?img=32",
    review:
      "Easylearn Educare really helps fill in gaps and build a strong foundation for studying abroad. They support every step and make the process stress-free.",
    rating: 5,
  },
  {
    name: "Aditya Dev Bhuia",
    role: "Business College",
    img: "https://i.pravatar.cc/100?img=57",
    review:
      "Excellent service! Highly recommend to anyone looking for guidance and a genuine educational path. Worth every moment of communication.",
    rating: 5,
  },
  {
    name: "Shruti Taneja",
    role: "Medical University Romania",
    img: "https://i.pravatar.cc/100?img=12",
    review:
      "Amazing staff, supportive mentors and a great environment. They guided me from start to finish with full clarity.",
    rating: 4,
  },
  {
    name: "Vikram Singh",
    role: "Software Engineering",
    img: "https://i.pravatar.cc/100?img=40",
    review:
      "The personalized guidance was outstanding. It made my application process seamless and successful.",
    rating: 5,
  },
  {
    name: "Priya Sharma",
    role: "Arts & Humanities",
    img: "https://i.pravatar.cc/100?img=45",
    review:
      "I highly recommend their mentorship programs. They helped me discover the perfect university for my career goals.",
    rating: 4,
  },
];

export default function TestimonialSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardsPerView, setCardsPerView] = useState(getCardsPerView());

  // 1. Hook to update cardsPerView on screen resize
  useEffect(() => {
    const handleResize = () => {
      setCardsPerView(getCardsPerView());
    };

    window.addEventListener('resize', handleResize);
    // Cleanup the event listener on component unmount
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const totalSlides = testimonials.length;
  // Calculate the maximum number of moves/indexes we can have
  const maxIndex = Math.ceil(totalSlides / cardsPerView) - 1;

  const goToPrev = () => {
    setCurrentIndex(prevIndex =>
      prevIndex === 0 ? maxIndex : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex(prevIndex =>
      prevIndex >= maxIndex ? 0 : prevIndex + 1
    );
  };

  // Calculate the percentage translation needed to move the carousel
  // On mobile (1 card per view), this is 100% per index.
  // On desktop (2 cards per view), this is 50% per index.
  const slidePercentage = (100 / cardsPerView) * currentIndex;

  return (
    <section className="container py-10 px-6 relative">
      <h2 className="text-center text-3xl sm:text-4xl font-bold text-blue-700 mb-10">
        What Students Say
      </h2>

      <div className="max-w-4xl mx-auto overflow-hidden"> {/* Reduced max-w to 4xl for 2 cards */}
        
        {/* Carousel Content Container */}
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${slidePercentage}%)` }}
        >
          {testimonials.map((t, i) => (
            // Slider Item Wrapper: w-full for 1 card, lg:w-1/2 for 2 cards
            <div
              key={i}
              className="w-full flex-shrink-0 snap-center px-4 sm:px-6 lg:w-1/2"
            >
              
              {/* Card Container (Centered in the wrapper) */}
              <div className="flex justify-center items-center h-full">
                
                {/* The original testimonial card design */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }} 
                  transition={{ duration: 0.4 }}
                  className="p-6 rounded-2xl bg-white/70 backdrop-blur-md shadow-sm cursor-default border border-gray-200 w-full h-full flex flex-col items-center"
                >
                  {/* ... Card Content (Image, Rating, Review, Name, Role) ... */}
                  <div className="flex justify-center">
                    <div className="relative w-16 h-16">
                      <img
                        src={t.img}
                        alt={t.name}
                        className="rounded-full w-full h-full object-cover border-2 border-purple-400"
                      />
                      <span className="absolute inset-0 rounded-full blur-md bg-purple-300 opacity-40"></span>
                    </div>
                  </div>
                  <div className="flex justify-center items-center gap-1 mt-3 text-yellow-400">
                    {Array(t.rating)
                      .fill(0)
                      .map((_, index) => (
                        <Star key={index} className="w-5 h-5 fill-yellow-400" />
                      ))}
                  </div>
                  <p className="text-gray-700 text-center mt-4 leading-relaxed text-sm flex-grow">
                    "{t.review}"
                  </p>
                  <p className="text-center font-semibold text-gray-900 mt-5">
                    {t.name}
                  </p>
                  <p className="text-center text-blue-600 text-sm">{t.role}</p>
                </motion.div>

              </div>
            </div>
          ))}
        </div>

        {/* --- Navigation Buttons --- */}
        <button
          onClick={goToPrev}
          className="absolute top-1/2 left-4 transform -translate-y-1/2 p-3 bg-white/80 rounded-full shadow-lg text-blue-700 hover:bg-white transition-colors z-10 hidden sm:block"
          aria-label="Previous testimonial"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>

        <button
          onClick={goToNext}
          className="absolute top-1/2 right-4 transform -translate-y-1/2 p-3 bg-white/80 rounded-full shadow-lg text-blue-700 hover:bg-white transition-colors z-10 hidden sm:block"
          aria-label="Next testimonial"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>
      
      {/* --- Dots/Pagination --- */}
      <div className="flex justify-center gap-2 mt-8">
        {/* Only show dots for the number of available slides/groups */}
        {Array.from({ length: maxIndex + 1 }).map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full transition-colors duration-300 ${
              index === currentIndex ? "bg-blue-700" : "bg-gray-400 hover:bg-gray-500"
            }`}
            aria-label={`Go to slide group ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}