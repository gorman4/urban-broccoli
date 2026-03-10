import { useRef, useState, type FormEvent } from "react";
import type { TrackComponentProps } from "../Lib/data";
import axiosInstance from "../Lib/axiosInstance";
import { API_PATHS } from "../Lib/apiPath";

export default function TrackerComponent({ ismodalOpen,setTrackingData, }: TrackComponentProps) {
  const trackNo = useRef<HTMLInputElement | null>(null);
  const [loading, setLoading] = useState(false);

  const evaluateTrackNumber = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!trackNo.current) return;

    const trackingNumber = trackNo.current.value.trim();

    if (!trackingNumber) {
      alert("Tracking number is required");
      return;
    }

    const regex = /^[a-zA-Z0-9]+$/;

    if (!regex.test(trackingNumber)) {
      alert("Tracking number must contain only letters and numbers");
      return;
    }

    const payload = {
      trackNumber: trackingNumber,
    };

    try {
      setLoading(true);

      const response = await axiosInstance.post(
        API_PATHS.INVENTORY.TRACK,
        payload
      );

     setTrackingData(response.data); // store API data

      // open modal if success
      ismodalOpen(true);
    
    } catch (error: any) {

      const message =
        error?.response?.data?.message || "Something went wrong";

      alert(message);

    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex justify-center -mt-16 lg:-mt-24 z-10 relative">
      <form
        onSubmit={evaluateTrackNumber}
        className="
        flex gap-2 items-center
        bg-white/30
        backdrop-blur-md
        border border-white/40
        shadow-lg
        p-4
        rounded-xl
        w-[95%] md:w-auto
      "
      >
        <input
          type="text"
          ref={trackNo}
          name="trackNumber"
          placeholder="Enter your tracking number"
          className="
          w-full md:w-80
          bg-white/60
          backdrop-blur-sm
          border border-cyan-700
          p-2
          rounded-md
          outline-none
          placeholder-gray-600
        "
        />

        <button
          type="submit"
          disabled={loading}
          className="
          flex items-center justify-center gap-2
          bg-cyan-700
          px-5 py-2.5
          font-semibold
          text-white
          rounded-md
          cursor-pointer
          hover:bg-cyan-800
          transition
          disabled:opacity-60
          disabled:cursor-not-allowed
        "
        >
          {loading ? (
            <>
              <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
              Tracking...
            </>
          ) : (
            "Track Order"
          )}
        </button>
      </form>
    </div>
  );
}