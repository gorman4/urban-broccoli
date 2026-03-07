import { useState } from "react";
import { CgPushChevronDown } from "react-icons/cg";

const accordionData = [
  {
    title: "🔐 Secure Warehousing",
    content:
      "All packages are stored in monitored facilities with advanced security systems to ensure maximum protection for your goods.",
  },
  {
    title: "📦 Organized Package Handling",
    content:
      "Every item is carefully cataloged and stored in designated areas, making retrieval and dispatch fast and efficient.",
  },
  {
    title: "⏱ Flexible Storage Duration",
    content:
      "Store packages for hours, days, or weeks depending on your delivery schedule and operational needs.",
  },
  {
    title: "🚚 Easy Dispatch Integration",
    content:
      "Our storage connects directly with our delivery network, allowing packages to move quickly from storage to final destination.",
  },
  {
    title: "📍 Real-Time Tracking",
    content:
      "Track your stored packages anytime through our platform and stay updated on their status.",
  },
];

export default function AccordionLanding() {
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
