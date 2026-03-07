
import Logo from "../assets/logo.png";
import { CiLocationOn } from "react-icons/ci";
import { BsGlobeEuropeAfrica } from "react-icons/bs";
import { IoChatbubbles } from "react-icons/io5";
import { GiHamburgerMenu } from "react-icons/gi";
import { AppSetting } from "../Lib/siteConfig";


export default function TopBar() {
  return (
    <div className=" h-25">
      <div className="flex  my-container items-center justify-between lg:justify-around">
        <div className="w-45 ">
          <img src={Logo} className="w-90 h-30"/>
         
        </div>
        <div className="hidden lg:flex items-center gap-5 ">
          <div className=" flex items-center gap-2">
            <BsGlobeEuropeAfrica
              style={{ color: "#1e848b" }}
              size={50}
              color=""
            />
            <div className="text-sm font-semibold">
              <h4>OPENING HOURS</h4>
              <h4>{AppSetting.appOpeningHour}</h4>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <CiLocationOn style={{ color: "#1e848b" }} size={50} />
            <div className="font-semibold text-sm">
              <h4>OUR LOCATION</h4>
              <h4>{AppSetting.appLocation}</h4>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <IoChatbubbles style={{ color: "#1e848b" }} size={50} />
            <div className="font-semibold text-sm ">
              <h4>QUICK SUPPORT</h4>
              <h4>{AppSetting.appEmail}</h4>
            </div>
          </div>
        </div>

        <div className="lg:hidden block">
          <GiHamburgerMenu size={30} />
        </div>


      </div>
    </div>
  );
}
