import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEarthAfrica,faReceipt,faVideo} from "@fortawesome/free-solid-svg-icons";


const Feature = ({icon,title, desc}) => (
  <div className="text-2xl text-center bg-white p-5 rounded-lg shadow-sm">
    <FontAwesomeIcon icon={icon} size="2x" className="text-blue-600" />
    <h4 className="font-bold text-lg">{title}</h4>
    <p className="text-sm text-gray-600 mt-2">{desc}</p>
  </div>
);

export default function Features() {
  return (
    <section id="features" className="container-fluid px-4 py-12">
      <div className="text-center mb-8">
        <h2 className="text-xl text-white">Unique Features of our programs</h2>
        {/* <p className="text-gray-600 mt-2">Flexibility · Quality · Experienced Faculty · Global Exposure</p> */}
      <h3 className="text-white text-3xl font-bold">What do want to study?</h3>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Feature icon={faEarthAfrica} title="Flexibility" desc="Learn on your schedule with self-paced and instructor-led options." />
        <Feature icon={faReceipt} title="Quality" desc="Industry-aligned curriculum and expert faculty support." />
        <Feature icon={faVideo} title="Career Guidance" desc="Personalized counselling and admission assistance." />
      </div>
    </section>
  );
}
