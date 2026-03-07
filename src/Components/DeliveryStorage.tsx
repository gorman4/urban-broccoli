import Img1 from "../assets/delivery.png"
import Img2 from "../assets/Delivery2.jpg"
import AccordionDelivery from "./AccordionDelivery"

export default function DeliveryStorage() {
  return (
   <div>
      <div className="px-2 lg:px-15 mt-10">
        <h1 className="font-bold text-3xl">🚚 Delivery Services</h1>
        <div>
          <div>
            <h1 className="font-semibold text-lg  py-5">Fast, Reliable & Secure Delivery</h1>
            <p className="pb-5 bg-gray-50 p-5 rounded-md">
             Our Delivery Services are designed to move your packages quickly and safely from pickup to final destination. Whether you're sending a small parcel, business shipment, or bulk cargo, our courier network ensures timely and professional delivery every step of the way.

With advanced tracking systems and an experienced logistics team, we make sure your shipments reach the right place at the right time.
            </p>
            <img src={Img1} />
          </div>
        </div>
        <div className="my-5 py-5">
          <h1 className="mb-5 font-bold text-lg px-10">Why Choose Our Delivery Services?</h1>
          <div className="flex flex-col lg:flex-row items-center">
              <div className="flex-wrap">
              <AccordionDelivery/>
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
