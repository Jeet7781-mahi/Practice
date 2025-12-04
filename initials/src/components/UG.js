import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";

const data = [
  {
    title: "School of Science & Technology",
    courses: [
      "B.Tech in Robotics & Automation (4 Years)",
      "B.Tech in Computer Science & Cybersecurity",
      "Bachelor of Computer Application",
      "B.Sc (Hons) in Biotechnology",
      "M.Sc in Biotechnology (2 Years)",
    ],
  },
  {
    title: "School of Maritime Studies",
    courses: [
      "B.Sc in Agriculture",
      "Diploma in Agritech",
      "M.Sc Crop Science",
    ],
  },
  {
    title: "School of Agriculture",
    courses: [
      "Diploma in Nautical Science",
      "Marine Engineering",
      "Advanced Navigation Training",
    ],
  },
   {
    title: "School of Health Sciences",
    courses: [
      "B.Tech in Robotics & Automation (4 Years)",
      "B.Tech in Computer Science & Cybersecurity",
      "Bachelor of Computer Application",
      "B.Sc (Hons) in Biotechnology",
      "M.Sc in Biotechnology (2 Years)",
    ],
  },
   {
    title: "School of Humanities Management & Social Science",
    courses: [
      "B.Tech in Robotics & Automation (4 Years)",
      "B.Tech in Computer Science & Cybersecurity",
      "Bachelor of Computer Application",
      "B.Sc (Hons) in Biotechnology",
      "M.Sc in Biotechnology (2 Years)",
    ],
  },
   {
    title: "School of Legal Studies",
    courses: [
      "B.Tech in Robotics & Automation (4 Years)",
      "B.Tech in Computer Science & Cybersecurity",
      "Bachelor of Computer Application",
      "B.Sc (Hons) in Biotechnology",
      "M.Sc in Biotechnology (2 Years)",
    ],
  }
];

export default function SimpleTiltCards() {
  return (
   <section id="undergraduate" className="min-h-screen bg-[#05050f]">
        <h2 className="text-center font-bold pt-8 text-3xl text-white">UG/PG Courses</h2>
       
    <div className=" flex items-center justify-center py-20 px-6">
        
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl w-full">
          
        {data.map((item, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.08, rotateX: 6, rotateY: -6 }}
            transition={{ type: "spring", stiffness: 180, damping: 12 }}
            className="relative group p-6 rounded-2xl bg-[#181830] 
            border border-purple-500/20 shadow-xl backdrop-blur-lg cursor-pointer overflow-hidden"
          >
            {/* Glow */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-700 bg-purple-500/10 blur-2xl rounded-2xl"></div>

            {/* Icon */}
            <div className="flex justify-center">
              <GraduationCap className="text-purple-300 w-12 h-12 transition-all duration-500" />
            </div>

            {/* Title */}
            <h3 className="text-center text-white text-lg font-semibold mt-4 transition-all duration-500">
              {item.title}
            </h3>

            {/* Bullet List Always Visible */}
            <ul className="list-disc text-gray-300 text-sm mt-5 space-y-1 pl-4">
              {item.courses.map((course, index) => (
                <li key={index}>{course}</li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </div>
    </section> 
  );
}
