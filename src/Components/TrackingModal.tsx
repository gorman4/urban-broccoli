import {useState} from "react"
import type { TrackComponentProps } from "../Lib/data";


export default function TrackingModal({ismodalOpen}: TrackComponentProps) {
    


  return (
  <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">

          {/* Modal Box */}
          <div className="bg-white w-[90%] md:w-[70%] lg:w-[60%] h-[70vh] rounded-xl shadow-2xl p-6 relative">

            {/* Close Button */}
            <button
              onClick={() => ismodalOpen(false)}
              className="absolute top-4 right-4 text-gray-500 hover:text-black text-xl"
            >
              ✕
            </button>

            {/* Modal Content */}
            <h2 className="text-2xl font-bold mb-4">Large Modal Box</h2>

            <p className="text-gray-600">
              This is a large modal box. You can put forms, images, or
              dashboards inside it. It is responsive and centered on the screen.
            </p>

            <div className="mt-6">
              <button
                onClick={() => ismodalOpen(false)}
                className="px-4 py-2 bg-red-500 text-white rounded"
              >
                Close
              </button>
            </div>

          </div>
          </div>
       
  )
}
