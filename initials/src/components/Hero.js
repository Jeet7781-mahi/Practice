import React from "react";

export default function Hero() {
  return (
    <section id="home" className="bg-gradient-to-r from-indigo-50 to-white">
      <div className="max-w-6xl mx-auto px-4 py-16 sm:py-24 lg:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-40 items-center">
          <div className="text-white">
            <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 leading-tight">
              Transform Your Future With Expert-Led Online Courses
            </h1>
            <p className="mt-6 text-gray-600 text-lg">
              EasyLearn Educare is a trusted educational consultancy in Kolkata, guiding students toward top MBA and professional colleges across India. We provide expert counselling, admission assistance, and career guidance.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a href="#courses" className="bg-indigo-600 text-white px-5 py-3 rounded-md shadow-sm hover:bg-indigo-700">Start Your Journey</a>
              <a href="#contact" className="border border-indigo-600 text-indigo-600 px-5 py-3 rounded-md hover:bg-indigo-50">Abroad Study</a>
            </div>

            <div className="mt-8 flex gap-6 items-center text-sm text-gray-500">
              
            </div>
          </div>

          <div className="right-section text-center px-20">
            {/* <div className="w-full max-w-md bg-white rounded-2xl p-6 shadow-lg">
              <h3 className="text-lg font-semibold mb-3">Quick Enquiry</h3>
              <form onSubmit={(e)=>e.preventDefault()} className="space-y-3">
                <input className="w-full border rounded-md px-3 py-2" placeholder="Full name" />
                <input className="w-full border rounded-md px-3 py-2" placeholder="Email" />
                <input className="w-full border rounded-md px-3 py-2" placeholder="Phone" />
                <button id="enroll" className="w-full bg-indigo-600 text-white py-2 rounded-md mt-1">Get Started</button>
              </form>
              <p className="text-xs text-gray-500 mt-3">or call us: <span className="font-medium text-gray-700">+91 82404 09187</span></p>
            </div> */}
            <div className="mb-40  text-white px-5 py-3 rounded-md hover:bg-indigo-700 w-fit transition-all duration-500  hover:shadow-xl">
                <div className="font-bold uppercase tracking-wide mb-2 ">Top University</div>
                <div className="font-bold ">30+</div>
              </div>
              <div className="font-bold text-white px-5 py-3 rounded-md hover:bg-indigo-700 w-fit transition-all duration-500  hover:shadow-xl">
                <div className="font-bold uppercase tracking-wide mb-2 ">Top Collaborations</div>
                <div className="font-bold ">Universities</div>
              </div>
          </div>
        </div>
      </div>
    </section>
  );
}
