import { useState } from "react";
import { CgPushChevronDown } from "react-icons/cg";

const accordionData = [
  {
    title: "🚀 Fast Dispatch",
    content:
      "Once your package is ready, our system quickly assigns a driver or delivery vehicle to ensure immediate dispatch and minimal waiting time.",
  },
  {
    title: "📦 Safe Package Handling",
    content:
      "We treat every shipment with care. Packages are properly handled, packaged, and transported to prevent damage during transit.",
  },
  {
    title: "📍 Real-Time Tracking",
    content:
      "Track your delivery from pickup to destination through our platform and receive updates on shipment status.",
  },
  {
    title: "🌍 Wide Delivery Coverage",
    content:
      "Our network covers multiple locations, allowing us to deliver packages locally, regionally, and across long distances.",
  },
  {
    title: "⏰ Flexible Delivery Options",
    content:
      "Choose delivery times that fit your schedule, including same-day, next-day, or scheduled delivery services.",
  },
];

export default function AccordionDelivery() {
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
