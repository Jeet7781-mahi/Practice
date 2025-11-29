import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import About from "./components/About";
import Courses from "./components/Courses";
import Universities from "./components/Universities";
import Footer from "./components/Footer";


function App(){
  return (
    <div className="min-h-screen font-sans text-gray-900">
      <Navbar />
      <main>
        <Hero />
        <div className="">
          <About />
          <Features />
          <Universities />
          <Courses />
        </div>
        <Footer />
      </main>
    </div>
  );
}

export default App;
