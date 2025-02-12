import Action from "./Action";
import AdditonalNavbar from "./AdditonalNavbar";
import OtherDetails from "./OtherDetails";
import Services from "./Services";
import Sublets from "./Sublets";
import Totals from "./Totals";

const AdditionalDetail = () => {
  return (
    <div className="mt-4">
      <AdditonalNavbar />
      <Action />
      <Sublets />
      <Services />
      <Totals />
      <OtherDetails />
    </div>
  );
};

export default AdditionalDetail;
