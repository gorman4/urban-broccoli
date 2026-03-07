import Img1 from "../assets/demogra1.avif";
import Img2 from "../assets/demogra2.webp";
import Img3 from "../assets/demogra3.jpeg";
import Img4 from "../assets/4690a05b-0561-4e7b-82a9-a9e9feed56eb.webp";

export default function UpdateSocialDemographic() {
  return (
    <div>
         <h1 className="font-bold text-2xl py-5">Social and demographic information</h1>
      <div className="flex flex-wrap justify-center gap-4 p-4">
        <img
          src={Img1}
          alt="img1"
          className="w-40 h-40 object-cover rounded-lg shadow-md"
        />
        <img
          src={Img2}
          alt="img2"
          className="w-40 h-40 object-cover rounded-lg shadow-md"
        />
        <img
          src={Img3}
          alt="img3"
          className="w-40 h-40 object-cover rounded-lg shadow-md"
        />
        <img
          src={Img4}
          alt="img4"
          className="w-40 h-40 object-cover rounded-lg shadow-md"
        />
      </div>
      <h1 className="text-3xl font-bold">Understanding the People We Serve</h1>
      <p className="bg-gray-50 p-2 rounded-md">
        At the heart of every successful courier service is a deep understanding
        of the communities and customers it serves. Social and demographic
        trends—such as population growth, urbanization, online shopping habits,
        and business expansion—play a major role in shaping how courier
        companies operate. Our courier platform is designed to adapt to these
        changes, ensuring that individuals, businesses, and communities can send
        and receive packages quickly, safely, and conveniently.
      </p>

      <h1 className="font-bold my-2">
        📦 Rise of E-Commerce and Online Businesses
      </h1>
      <p className="bg-gray-50 p-2 rounded-md">
        The rapid growth of online shopping has significantly increased the
        demand for reliable delivery services. Small businesses, online stores,
        and independent sellers depend on efficient courier systems to deliver
        products to customers on time. By supporting fast pickups, organized
        storage, and reliable delivery networks, our courier service helps
        businesses reach more customers and grow without worrying about
        logistics.
      </p>
      <h1 className="font-bold my-2">🏙 Urban Growth and Delivery Demand</h1>
      <p className="bg-gray-50 p-2 rounded-md">
        As cities continue to expand and populations increase, the demand for
        fast and organized delivery systems becomes even more important. Busy
        urban environments require efficient logistics to move packages across
        neighborhoods, offices, and homes. Our courier solutions are built to
        support urban mobility, ensuring parcels move smoothly even in
        high-traffic and high-demand areas.
      </p>
      <h1 className="font-bold my-2">👨‍👩‍👧 Changing Lifestyles and Convenience</h1>
      <p className="bg-gray-50 p-2 rounded-md">
        Modern lifestyles are busier than ever. Many people prefer services that
        save time and reduce stress, including home delivery and scheduled
        pickups. Courier services allow individuals to send gifts, documents,
        and essential items without leaving their homes or workplaces. By
        providing convenient booking, tracking, and delivery options, we make
        logistics simple for everyone.
      </p>
      <h1 className="font-bold my-2">
        🌍 Supporting Local Communities and Businesses
      </h1>
      <p className="bg-gray-50 p-2 rounded-md">
        Courier services do more than move packages—they help connect people and
        businesses. From helping local retailers deliver products to enabling
        entrepreneurs to reach customers nationwide, logistics services
        contribute to economic activity and community development. Our courier
        company supports local growth by providing reliable delivery
        infrastructure that businesses and individuals can trust.
      </p>
      <h1 className="font-bold my-2">📊 Data-Driven Logistics</h1>
      <p className="bg-gray-50 p-2 rounded-md">
        Understanding demographic patterns helps us improve our services. By
        analyzing customer needs, delivery locations, and shipment patterns, we
        can optimize routes, reduce delays, and ensure better service for
        everyone. This allows our platform to remain efficient, scalable, and
        responsive to the evolving needs of our users.
      </p>
      <h1 className="text-3xl font-bold my-2">Delivering More Than Packages</h1>
      <p className="bg-gray-50 p-2 rounded-md">
        Our courier services are not just about transportation—they are about
        connecting people, empowering businesses, and adapting to the changing
        social and demographic landscape of modern commerce.
      </p>
    </div>
  );
}
