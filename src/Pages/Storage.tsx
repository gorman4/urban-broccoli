import AboutusComponent from "../Components/AboutusComponent";
import LatestNews from "../Components/LatestNews";
import SponsorComponent from "../Components/SponsorComponent";
import Footer from "../Components/Footer";
import TopBar from "../Components/TopBar";
import { useSearchParams } from "react-router-dom";
import ParkingStorage from "../Components/ParkingStorage";
import LandingStorage from "../Components/LandingStorage";
import DeliveryStorage from "../Components/DeliveryStorage";
import NotFound from "./NotFound";


export default function Storage() {
  // get params (?storage=value)
  const [searchParams] = useSearchParams();
  const storage: string | null = searchParams.get("storage");

  const selectComponent = () => {
    if (storage === "parking") {
      return <ParkingStorage />;
    } else if (storage === "landing") {
      return <LandingStorage />;
    } else if (storage === "delivery") {
      return <DeliveryStorage />;
    } else {
      return <NotFound/>;
    }
  };

  return (
    <div className="bg-background pt-3">
      <TopBar />

      <div>
        {selectComponent()}
      </div>

      <LatestNews />
      <div className="py-3 my-5">
        <SponsorComponent />
      </div>
      <AboutusComponent />

      <Footer />
    </div>
  );
}