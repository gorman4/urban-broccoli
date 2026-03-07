
import NumberCaption from "./NumberCaption";

export default function StepComponent() {
  return (
    <div className="my-container grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 uppercase">
      
      {/* CARD */}
      <div
        className="relative h-56 sm:h-60 lg:h-72 border overflow-hidden rounded-lg"
        style={{
          backgroundImage: "url('/landing_storage.jfif')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/40 backdrop-blur-md"></div>

        <div className="relative z-10 h-full flex flex-col justify-between items-center text-white p-4">
          <div className="text-center">
            <NumberCaption desc="Parking Space" num="01" />
            <h6 className="font-bold text-xl sm:text-2xl">
              STORAGE
            </h6>
          </div>

          <a href="/storage?storage=parking" className="underline hover:text-gray-200">
            READ MORE
          </a>
        </div>
      </div>

      {/* CARD */}
      <div
        className="relative h-56 sm:h-60 lg:h-72 border overflow-hidden rounded-lg"
        style={{
          backgroundImage: "url('/parkspace_storage.jfif')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/40 backdrop-blur-md"></div>

        <div className="relative z-10 h-full flex flex-col justify-between items-center text-white p-4">
          <div className="text-center">
            <NumberCaption desc="Landing Features" num="02" />
            <h6 className="font-bold text-xl sm:text-2xl">
              STORAGE
            </h6>
          </div>

          <a href="/storage?storage=landing" className="underline hover:text-gray-200">
            READ MORE
          </a>
        </div>
      </div>

      {/* CARD */}
      <div
        className="relative h-56 sm:h-60 lg:h-72 border overflow-hidden rounded-lg"
        style={{
          backgroundImage: "url('/slide5.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/40 backdrop-blur-md"></div>

        <div className="relative z-10 h-full flex flex-col justify-between items-center text-white p-4">
          <div className="text-center">
            <NumberCaption desc="Delivery Services" num="03" />
            <h6 className="font-bold text-xl sm:text-2xl">
              STORAGE
            </h6>
          </div>

          <a href="/storage?storage=delivery" className="underline hover:text-gray-200">
            READ MORE
          </a>
        </div>
      </div>

    </div>
  );
}
