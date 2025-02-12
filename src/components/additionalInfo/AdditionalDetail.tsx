import Action from "./Action";
import AdditonalNavbar from "./AdditonalNavbar";
import Services from "./Services";
import Sublets from "./Sublets";

const AdditionalDetail = () => {
  return (
    <div className="mt-4">
      <AdditonalNavbar />
      <Action />
      <Sublets />
      <Services />
    </div>
  );
};

export default AdditionalDetail;
