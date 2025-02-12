import { Outlet } from "react-router-dom";
import AdditionalDetail from "../components/additionalInfo/AdditionalDetail";

const AdditionalInfoLayout = () => {
  return (
    <>
      <AdditionalDetail />
      <Outlet />
    </>
  );
};

export default AdditionalInfoLayout;
