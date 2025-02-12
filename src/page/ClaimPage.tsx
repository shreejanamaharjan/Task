import { GrNotes } from "react-icons/gr";
import { FaAngleRight } from "react-icons/fa6";
import ClaimsDetails from "../components/claims/ClaimsDetails";
import PaymentStatus from "../components/claims/PaymentStatus";
import AdditionalDetail from "../components/additionalInfo/AdditionalDetail";

const ClaimPage = () => {
  const user = true;
  return (
    <div className="px-45 py-5">
      <div className="flex gap-2 items-center text-gray-400  capitalize text-base">
        <GrNotes />
        <span>claims</span>
        <FaAngleRight />
        <span>action needed</span>
      </div>
      <h1 className="uppercase font-bold text-2xl my-1">c1-7895689</h1>
      <div className="flex gap-8">
        <ClaimsDetails title="type" description="mechanical" />
        <ClaimsDetails title="ro number" description="784858968545" />
        <ClaimsDetails title="date" description="11th Feb. 2025" />
        <ClaimsDetails title="client" dropdown user />
        <ClaimsDetails title="assigned to" dropdown user={!user} />
        <ClaimsDetails title="current amt." description="109,000 rni" />
      </div>
      <PaymentStatus />
      <AdditionalDetail />
    </div>
  );
};

export default ClaimPage;
