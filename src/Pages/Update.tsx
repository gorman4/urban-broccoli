import AboutusComponent from "../Components/AboutusComponent";

import LatestNews from "../Components/LatestNews";

import SponsorComponent from "../Components/SponsorComponent";

import Footer from "../Components/Footer";
import TopBar from "../Components/TopBar";
import UpdateSocialDemographic from "../Components/UpdateSocialDemographic";
import UpdateTeamMember from "../Components/UpdateTeamMember";
import UpdateFinancialInstitution from "../Components/UpdateFinancialInstitution";
import UpdateOilPrice from "../Components/UpdateOilPrice";
import { useSearchParams } from 'react-router-dom';
import type { JSX } from "react";
import NotFound from "./NotFound";


export default function Update() {
  const [searchParams]=useSearchParams();

  const field = searchParams.get("field")
  console.log(field)


  const componentMap: Record<string, JSX.Element>={
   demograph: <UpdateSocialDemographic/>,
   team:<UpdateTeamMember/>,
   strategy:<UpdateFinancialInstitution/>,
   conflict:<UpdateOilPrice/>
  }

  const selectedComponent= field ? componentMap[field]: null
  return (
    <div className="bg-background pt-3">
      <TopBar />
      <div className="px-2 lg:px-12">
    {selectedComponent ?? <NotFound />}    
          

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
