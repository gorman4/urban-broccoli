import Img1 from "../assets/Amazon-Courier-Style-Delivery-Bag-Logistic-PP-Woven-Zipper-Sorting-Stacking-Bag-Tote-Transparent-Top-Large-Folding-Parcel-Warehousing-Sortation-Cube-Container.avif"
import Img2 from "../assets/Heavy-Duty-Storage-Rack-Logistics-Warehouse-Rack-Equipment (1).avif"

import AccordionLanding from "./AccordionLanding"
export default function LandingStorage() {
  return (
   <div>
      <div className="px-2 lg:px-15 mt-10">
        <h1 className="font-bold text-3xl">Secure Storage Solutions</h1>
        <div>
          <div>
            <h1 className="font-semibold text-lg  py-5">Safe and Reliable Storage for Your Packages</h1>
            <p className="pb-5 bg-gray-50 p-5 rounded-md">
              Our storage facilities are designed to keep your goods safe before delivery or pickup. Whether you need temporary holding for parcels or long-term storage for shipments, we provide secure and organized storage solutions to support your logistics needs.
            </p>
            <img src={Img1} />
          </div>
        </div>
        <div className="my-5 py-5">
          <h1 className="mb-5 font-bold text-lg px-10">Why Choose Our Parking Storage?</h1>
          <div className="flex flex-col lg:flex-row items-center">
              <div className="flex-wrap">
              <AccordionLanding/>
              </div>
            <div>
              <img src={Img2}/>
            </div>

          </div>


        </div>
      </div>
    </div>
  )
}
