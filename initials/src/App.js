import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import About from "./components/About";
import Courses from "./components/Courses";
import Universities from "./components/Universities";
import Study from "./components/study";
import CountriesAndWhyChoose from "./components/Countries";
import FAQSection from "./components/FAQ";
import UGCourses from "./components/UG";
import BlogSection from "./components/Blog";
import Footer from "./components/Footer";
import Testimonial from "./components/Testimonial";


function App(){
  return (
    <div className="min-h-screen font-sans text-gray-900">
      <Navbar />
      <main>
        <Hero />
        <div className="">
          <CountriesAndWhyChoose/>
          <About />
          <Study/>
          <Features />
          <Universities />
          <UGCourses/>
          <Courses />
          <BlogSection/>
          <FAQSection/>
          <Testimonial/>
        </div>
        <Footer />
      </main>
    </div>
  );
}

export default App;
