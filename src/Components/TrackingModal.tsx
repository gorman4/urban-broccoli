import { useState } from "react";
import { FaUserLarge, FaPhoneFlip } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { ImLocation } from "react-icons/im";
import type { MapProps, TrackingModalProps } from "../Lib/data";
import "leaflet/dist/leaflet.css";
import MapComponent from "./MapComponent";
import Img from "../assets/delivery.png";

import { RiWeightFill } from "react-icons/ri";
import { FcServices, FcProcess } from "react-icons/fc";
import { TbTruckDelivery } from "react-icons/tb";
import { HiOutlineCalendarDateRange } from "react-icons/hi2";
import { API_PATHS } from '../Lib/apiPath';

export default function TrackingModal({
  ismodalOpen,
  trackingData,
}: TrackingModalProps) {

  const [showConsignment, setShowConsignment] = useState(false);

  const position: MapProps = {
    lat: trackingData.inventory.location.lat,
    lng: trackingData.inventory.location.long,
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">

      <div className="bg-white w-[90%] md:w-[70%] lg:w-[60%] h-[90vh] rounded-xl shadow-2xl p-6 relative overflow-auto overflow-y-scroll">

        {/* Close */}
        <button
          onClick={() => ismodalOpen(false)}
          className="absolute top-4 right-4 text-gray-500 hover:text-black text-xl"
        >
          ✕
        </button>

        {/* MAP */}
        <div className="w-full h-[40%] rounded-lg overflow-hidden mb-4 shadow">
          <MapComponent lat={position.lat} lng={position.lng} />
        </div>

        {/* SECTION SWITCH WITH FADE */}
        <div className="relative">

          {/* RECEIVER DETAILS */}
          <div
            className={`transition-opacity duration-500 ${
              showConsignment ? "opacity-0 hidden" : "opacity-100"
            }`}
          >
            <h1 className="font-bold text-2xl flex items-center gap-3 my-3">
              <FaUserLarge />
              Receiver's Details
            </h1>

            <table className="w-full border border-gray-200 rounded-lg overflow-hidden font-semibold shadow-sm">
              <tbody className="[&>tr>td:nth-child(1)]:bg-blue-900 [&>tr>td:nth-child(1)]:text-white">

                <tr className="border-b">
                  <td className="p-3 flex items-center gap-2">
                    <FaUserLarge /> Full Name
                  </td>
                  <td className="p-3">{trackingData.inventory.receivername}</td>
                </tr>

                <tr className="border-b">
                  <td className="p-3 flex items-center gap-2">
                    <ImLocation /> Address
                  </td>
                  <td className="p-3">{trackingData.inventory.receiveraddress}</td>
                </tr>

                <tr className="border-b">
                  <td className="p-3 flex items-center gap-2">
                    <MdEmail /> Email
                  </td>
                  <td className="p-3">{trackingData.inventory.receiveremail}</td>
                </tr>

                <tr>
                  <td className="p-3 flex items-center gap-2">
                    <FaPhoneFlip /> Phone
                  </td>
                  <td className="p-3">{trackingData.inventory.receiverphone}</td>
                </tr>

              </tbody>
            </table>
          </div>

          {/* CONSIGNMENT INFO */}
          <div
            className={`transition-opacity duration-500 ${
              showConsignment ? "opacity-100" : "opacity-0 hidden"
            }`}
          >
            <h1 className="font-bold text-2xl flex items-center gap-3 my-4">
              📦 Parcel Info
            </h1>

            <div className="grid md:grid-cols-2 gap-6 items-center">

              {/* Image */}
              <div className="flex justify-center">
                <img
                  src={`${API_PATHS.BASE_URL}/uploads/${trackingData.inventory.itemimage}`}
                  className="w-[220px] drop-shadow-lg"
                />
              </div>

              {/* Table */}
              <table className="w-full border border-gray-200 rounded-lg overflow-hidden font-semibold shadow-sm">
                <tbody className="[&>tr>td:nth-child(1)]:bg-indigo-900 [&>tr>td:nth-child(1)]:text-white">

                  <tr className="border-b">
                    <td className="p-3 flex items-center gap-2">
                      <RiWeightFill /> Weight
                    </td>
                    <td className="p-3">{trackingData.inventory.weight}</td>
                  </tr>

                  <tr className="border-b">
                    <td className="p-3 flex items-center gap-2">
                      <FcServices /> Service
                    </td>
                    <td className="p-3">{trackingData.inventory.service}</td>
                  </tr>

                  <tr className="border-b">
                    <td className="p-3 flex items-center gap-2">
                      <TbTruckDelivery /> Delivery Mode
                    </td>
                    <td className="p-3">{trackingData.inventory.deliverymode}</td>
                  </tr>

                  <tr className="border-b">
                    <td className="p-3 flex items-center gap-2">
                      <FcProcess /> Completion
                    </td>
                    <td className="p-3">
                      {trackingData.inventory.completion}%
                    </td>
                  </tr>

                  <tr>
                    <td className="p-3 flex items-center gap-2">
                      <HiOutlineCalendarDateRange /> Expected Delivery
                    </td>
                    <td className="p-3">
                      {trackingData.inventory.expecteddelivery}
                    </td>
                  </tr>

                </tbody>
              </table>
            </div>
          </div>

        </div>

        {/* FOOTER */}
        <div className="mt-6 flex items-center gap-4">

          <button
            onClick={() => setShowConsignment(!showConsignment)}
            className="underline text-blue-600 hover:text-blue-800"
          >
            {showConsignment
              ? "View Receiver Details"
              : "View Consignment Info"}
          </button>

          <button
            onClick={() => ismodalOpen(false)}
            className="px-4 py-2 bg-red-500 text-white rounded"
          >
            Close
          </button>

        </div>
      </div>
    </div>
  );
}