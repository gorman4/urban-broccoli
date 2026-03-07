import { GiTrophyCup } from "react-icons/gi";
import { TbUmbrellaFilled } from "react-icons/tb";
import { AppSetting } from "../Lib/siteConfig";
// import Slide7 from "../assets/slide7.jpeg"

export default function AboutusComponent() {
  return (
    <div >
        <div className="my-container text-white flex">
                <div className="bg-amber-600 p-8">

                    <h2 className="font-bold text-white py-4">ABOUT {AppSetting.appName}</h2>
                      <div className="w-full">
                        <p>We have trained, experienced experts available for our full range of service
                            Including reefer, out-of-gauge, break bulk and each of our trade services- each operating in tande, with your business. This gives us the ability to uphold the personal service we're globally recognized 
                        </p>
                        
                        </div>  

                        <h3 className="font-bold my-5">FUN FACTS</h3>

                        <div className="flex justify-between">
                            <div>

                           <GiTrophyCup size={50}/>
                            <div>
                                <h6>GETTED AWARDS</h6>
                                <h4 className="font-bold">+1.246</h4>
                            </div>

                            </div>

                            <div>
                                <div>
                                  <TbUmbrellaFilled size={50} />
                                </div>
                                <div>
                                    <h4>CARRIED PACKAGE</h4>
                                    <h4 className="font-bold">+2.638</h4>
                                </div>
                            </div>
                        </div>


                </div>

                <div
  className="relative w-full h-64 flex justify-center items-center overflow-hidden"
  style={{
    backgroundImage: "url('/slide7.jpeg')",
    backgroundSize: "cover",
    backgroundPosition: "center",
  }}
>
  {/* Blur overlay */}
  <div className="absolute inset-0 bg-cyan-700/40 backdrop-blur-md"></div>

  {/* Content */}
  <h1 className="relative z-10 text-5xl font-bold text-white">
    LOGISTIC
  </h1>
</div>



        </div>


    </div>
  )
}
