import Img1 from "../assets/office.jpeg";
import Img2 from "../assets/importance-of-logistic-management.jpg";
import Img3 from "../assets/6948496eb88c2622cda447ba_image 120.png";
import Img4 from "../assets/View-of-cabin-office-scaled.webp";

export default function UpdateTeamMember() {
  return (
    <div>
         <h1 className="font-bold text-2xl py-5">  Team Members to Discuss Our Meeting</h1>
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

      <h1 className="text-3xl font-bold">
      
      </h1>
      {/* <p className="bg-gray-50 p-2 rounded-md">
      
      </p> */}

      <h1 className="font-bold my-2">
        Collaboration That Drives Better Decisions
      </h1>
      <p className="bg-gray-50 p-2 rounded-md">
        Behind every successful courier service is a team working together to
        ensure smooth operations and continuous improvement. Our team meetings
        bring together key members from different departments to discuss
        performance, address operational challenges, and plan strategies that
        improve the overall delivery experience. These meetings provide an
        opportunity for team members to share ideas, analyze data, and align on
        goals that help our courier services remain efficient, reliable, and
        customer-focused.
      </p>
      <h1 className="font-bold my-2">🧑‍💼 Operations Team</h1>
      <p className="bg-gray-50 p-2 rounded-md">
        Our operations team reviews daily logistics activities, including
        delivery schedules, route efficiency, and fleet coordination. Their
        insights help ensure packages move quickly and smoothly through our
        network.
      </p>
      <h1 className="font-bold my-2">📦 Warehouse & Storage Management</h1>
      <p className="bg-gray-50 p-2 rounded-md">
        The warehouse team focuses on storage organization, package handling,
        and inventory coordination. During meetings, they discuss ways to
        improve storage efficiency and reduce delays in dispatch.
      </p>
      <h1 className="font-bold my-2">🚚 Delivery Coordination Team</h1>
      <p className="bg-gray-50 p-2 rounded-md">
        Delivery coordinators share updates on field operations, driver
        performance, and delivery timelines. Their feedback helps improve route
        planning and ensures faster deliveries to customers.
      </p>
      <h1 className="font-bold my-2">💻 Technology & Platform Support</h1>
      <p className="bg-gray-50 p-2 rounded-md">
        Our technology team evaluates system performance, platform improvements,
        and tracking tools. Their goal is to keep our digital systems reliable
        and user-friendly for both customers and staff.
      </p>
      <h1 className="text-3xl font-bold my-2">🤝 Customer Experience Team</h1>
      <p className="bg-gray-50 p-2 rounded-md">
        The customer service team provides insights based on customer feedback
        and support requests. These discussions help us understand client needs
        and continuously improve our services.
      </p>
    </div>
  );
}
