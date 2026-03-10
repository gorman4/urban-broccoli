import AboutusComponent from "../Components/AboutusComponent";
import Carousel from "../Components/Carousel";

import LatestNews from "../Components/LatestNews";
import NumberCaption from "../Components/NumberCaption";
import PackageStage from "../Components/PackageStage";
import PackingStorageComponent from "../Components/PackingStorageComponent";
import RequestQuoteComponent from "../Components/RequestQuoteComponent";
import SponsorComponent from "../Components/SponsorComponent";
import TestimonialSection from "../Components/TestimonialSection";
import Footer from "../Components/Footer";
import TopBar from "../Components/TopBar";
import TrackerComponent from "../Components/TrackerComponent";
import TrackingModal from "../Components/TrackingModal";
import { useState } from "react";

function Home() {
  const [openModal, setOpenModal] = useState<boolean>(false);
    const [trackingData, setTrackingData] = useState<any>(null);

  return (
    <div className="bg-background pt-3">
      <TopBar />
      <Carousel />
      <TrackerComponent ismodalOpen= {setOpenModal}  setTrackingData={setTrackingData}  />
      <div className="mt-25">
        <NumberCaption desc="Packing & Storage" num={"01"} />
      </div>

      {openModal && <TrackingModal ismodalOpen ={setOpenModal}  trackingData={trackingData} />}

      <PackingStorageComponent />
      {/* <Caption title="Package & Strage"/> */}

      <RequestQuoteComponent />
      <PackageStage />
      <TestimonialSection />
      <LatestNews />
      <div className="py-3 my-5">
        <SponsorComponent />
      </div>
      <AboutusComponent />

      <Footer />
    </div>
  );
}

export default Home;
