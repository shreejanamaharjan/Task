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
      <div id="action">
        <Action />
      </div>
      <div id="sublets">
        <Sublets />
      </div>
      <div id="services">
        <Services />
      </div>
      <div id="totals">
        <Totals />
      </div>
      <div id="other-details">
        <OtherDetails />
      </div>
      <Customer />
    </div>
  );
};

export default AdditionalDetail;
