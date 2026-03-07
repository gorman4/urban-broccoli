import Parkinglot1 from "../assets/Tip_France_05.jpg";
import Parkinglot2 from "../assets/private-truck-parking-lot-1024x768.jpg"
import Accordion from "./Accordion";

const ParkingStorage = () => {
  return (
    <div>
      <div className="px-2 lg:px-15 mt-10">
        <h1 className="font-bold text-3xl">Parking Space Storage</h1>
        <div>
          <div>
            <h1 className="font-semibold text-lg  py-5">Safe & Secure Parking for Your Logistics Needs</h1>
            <p className="pb-5 bg-gray-50 p-5 rounded-md">
              Our Parking Space Storage service provides a safe and organized
              location for vehicles, delivery vans, and cargo trucks awaiting
              dispatch, loading, or delivery. Whether you need short-term or
              extended parking, our facilities are designed to keep your
              vehicles and goods protected at all times. We understand that
              logistics operations require reliable space management. That’s why
              our parking areas are monitored, spacious, and strategically
              located to ensure easy access for drivers and transport operators.
            </p>
            <img src={Parkinglot1} />
          </div>
        </div>
        <div className="my-5 py-5">
          <h1 className="mb-5 font-bold text-lg px-10">Why Choose Our Parking Storage?</h1>
          <div className="flex flex-col lg:flex-row items-center">
              <div className="flex-wrap">
              <Accordion/>
              </div>
            <div>
              <img src={Parkinglot2}/>
            </div>

          </div>


        </div>
      </div>
    </div>
  );
};

export default ParkingStorage;
