import { useState, type FormEvent } from "react";
import axiosInstance from "../Lib/axiosInstance";
import { API_PATHS } from "../Lib/apiPath";
import { useNavigate } from "react-router-dom";

export default function UpdateLocation() {
  const [trackNo, setTrackNo] = useState("");
  const [currentLocation, setCurrentLocation] = useState("");

  const navigate = useNavigate()

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const payload = {
      trackNo,
      currentLocation,
    };

    try {
      console.log("Submitted Data:", payload);

      const response = await axiosInstance.patch(
        API_PATHS.INVENTORY.UPDATELOCATION,
        payload,
      );

      const data = response.data;
      navigate("/dashboard")
      console.log(data);
    } catch (error) {
      console.log(error)
    }
  };

  return (
    <div className="max-w-md mx-auto bg-white p-6 rounded-xl shadow-md">
      <h1 className="text-xl font-semibold text-gray-800 mb-6">
        Update Parcel Location
      </h1>

      <form onSubmit={handleSubmit} className="space-y-5">
        <div className="flex flex-col space-y-2">
          <label
            htmlFor="trackNo"
            className="text-sm font-medium text-gray-700"
          >
            Tracking Number
          </label>
          <input
            id="trackNo"
            type="text"
            name="trackNo"
            value={trackNo}
            onChange={(e) => setTrackNo(e.target.value)}
            placeholder="Enter tracking number"
            required
            className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="flex flex-col space-y-2">
          <label
            htmlFor="currentLocation"
            className="text-sm font-medium text-gray-700"
          >
            Current Location
          </label>
          <input
            id="currentLocation"
            type="text"
            name="currentLocation"
            value={currentLocation}
            onChange={(e) => setCurrentLocation(e.target.value)}
            placeholder="Enter parcel's current location"
            required
            className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <button
          type="submit"
          className="w-full py-3 rounded-lg bg-blue-600 text-white font-medium hover:bg-blue-700 transition"
        >
          Update Location
        </button>
      </form>
    </div>
  );
}
