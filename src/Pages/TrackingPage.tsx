import Carousel from "../Components/Carousel";
import NumberCaption from "../Components/NumberCaption";
import PackageStage from "../Components/PackageStage";
import PackingStorageComponent from "../Components/PackingStorageComponent";
import RequestQuoteComponent from "../Components/RequestQuoteComponent";
import TestimonialSection from "../Components/TestimonialSection";
import TopBar from "../Components/TopBar";
import TrackerComponent from "../Components/TrackerComponent";
import LatestNews from '../Components/LatestNews';
import SponsorComponent from "../Components/SponsorComponent";
import AboutusComponent from "../Components/AboutusComponent";
import Footer from "../Components/Footer";


export default function TrackingPage() {
  return (
    <div className="bg-background pt-3">
         <TopBar />
         <Carousel />
         <TrackerComponent />
         <div className="mt-25">
           <NumberCaption desc="Packing & Storage" num={"01"} />
         </div>
   
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
       
        <Footer/>
       </div>
   
  )
}
