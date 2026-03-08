import type { TrackComponentProps } from "../Lib/data";


export default function TrackerComponent({ismodalOpen}: TrackComponentProps) {
  return (
    <div className="relative z-10">
      <div className="absolute -top-10 lg:-top-30 lg:left-220">
        <div
          className="
            flex gap-2 items-center
            bg-white/30
            backdrop-blur-md
            border border-white/40
            shadow-lg
            p-4
            rounded-xl
          "
        >
          <input
            className="
              w-full
              bg-white/60
              backdrop-blur-sm
              border border-cyan-700
              p-2
              rounded-md
              outline-none
              placeholder-gray-600
            "
            name="trackNumber"
            placeholder="Enter your tracking number"
          />

          <button
            className="
              bg-cyan-700
              px-5 py-2.5
              font-semibold
              text-white
              rounded-md
              cursor-pointer
              hover:bg-cyan-800
              transition
            "
            onClick={()=>ismodalOpen(true)}
          >
            Track Order
          </button>
        </div>
      </div>
    </div>
  );
}
