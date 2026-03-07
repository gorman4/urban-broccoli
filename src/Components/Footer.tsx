import { FaFacebook } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { GrGoogle } from "react-icons/gr";
import { FaYoutube } from "react-icons/fa6";
import { FaSquareVimeo } from "react-icons/fa6";
import Logo from "../assets/logo.png";
import AppStore from "../assets/icon-appstore.png";
import GooglePlay from "../assets/icon-googleplay.png";
import { BsFillTabletFill } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

export default function Footer() {
  const navigate = useNavigate();
  return (
    <div className="w-full h-full bg-primary ">
      <div className="my-container my-5">
        <div className="py-5">
          <h1 className="font-bold text-2xl text-white">ABOUT US</h1>
          <p className="w-full lg:w-100 text-white">
            You can use the icons above to access more information about our
            credentials, providing solutions in a host of specific
            industries.However, these are far from the only industries that
            SHIPPER has proudly served.
          </p>
          <div className="flex items-center gap-4 text-white p-2">
            <FaFacebook />
            <FaTwitter />
            <GrGoogle />
            <FaYoutube />
            <FaSquareVimeo />
          </div>
        </div>

        <div className="flex flex-col lg:flex-row items-center lg:gap-30 gap-8">
         <div onClick={()=> navigate("/")} className="w-45 cursor-pointer ">
            <img src={Logo} className="w-30 h-25"  />
          </div>

          <div>
            <h1 className="mb-1 text-2xl font-bold text-white">MOBILE APP</h1>
            <p className="text-white w-full lg:w-100 text-sm">
              Download our mobile applications from Google Play and Apple Store
              or decode QR Code just below and start using.
            </p>
          </div>

          <div className="flex items-end">
            <div className="flex flex-col gap-2">
              <img src={AppStore} />
              <img src={GooglePlay} />
            </div>
            <div className="flex items-end">
              <BsFillTabletFill size={100} />
              <BsFillTabletFill className="text-secondary -ml-8 z-10" size={40} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
