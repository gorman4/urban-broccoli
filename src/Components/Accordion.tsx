import { useState } from "react";
import { CgPushChevronDown } from "react-icons/cg";

const accordionData = [
  {
    title: "24/7 Security Monitoring",
    content:
      "Our parking facilities are monitored around the clock with modern surveillance systems and on-site security personnel.",
  },
  {
    title: "Spacious & Organized Parking",
    content:
      "Designed to accommodate trucks, delivery vans, and commercial vehicles with enough space for easy movement and parking.",
  },
  {
    title: "Flexible Storage Duration",
    content:
      "Store your vehicle for hours, days, or weeks depending on your operational needs.",
  },
  {
    title: "Easy Access for Drivers",
    content:
      "Drivers can quickly enter, park, and exit without unnecessary delays.",
  },
  {
    title: "Secure Environment",
    content:
      "Your vehicles and cargo remain protected within a controlled and professionally managed environment.",
  },
];

export default function Accordion() {
  const [active, setActive] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setActive(active === index ? null : index);
  };

  return (
    <div className="w-full max-w-3xl mx-auto p-4">
      <div className="space-y-4">
        {accordionData.map((item, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-xl overflow-hidden border border-gray-100"
          >
            <button
              onClick={() => toggleAccordion(index)}
              className="w-full flex justify-between items-center p-5 text-left font-medium text-gray-700 hover:bg-gray-50 transition"
            >
              {item.title}
              <CgPushChevronDown
                className={`transition-transform duration-300 ${
                  active === index ? "rotate-180" : ""
                }`}
              />
            </button>

            <div
              className={`px-5 transition-all duration-300 ease-in-out ${
                active === index
                  ? "max-h-40 opacity-100 pb-5"
                  : "max-h-0 opacity-0 overflow-hidden"
              }`}
            >
              <p className="text-gray-600 text-sm leading-relaxed">
                {item.content}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
