import Action from "./Action";
import AdditonalNavbar from "./AdditonalNavbar";
import Customer from "./Customer";
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
      <Customer />
    </div>
  );
};

export default AdditionalDetail;
