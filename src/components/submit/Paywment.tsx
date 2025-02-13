import { useContext } from "react";
import Title from "./Title";
import ButtonContext from "../../context/Context";
import Button from "./Button";
import { BsDot } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

const Paywment = () => {
  const context = useContext(ButtonContext);
  const navigate = useNavigate();

  if (!context) {
    throw new Error("BooleanComponent must be used within a BooleanProvider");
  }

  const { toggleOverlay, togglePayment } = context;

  const goBackToHome = () => {
    toggleOverlay();
    togglePayment();
    navigate("/");
  };
  const handleSendEmail = () => {
    toggleOverlay();
    togglePayment();
    window.location.href =
      "mailto:example@email.com?subject=Payment Submission&body=Hello, I want to submit my payment details.";
  };

  return (
    <>
      <div className="w-md bg-white absolute right-0 mr-4 rounded-xl p-4 align-middle mt-4">
        <Title
          title="You're all set!"
          description="Feel free to send us message with any extra details or files"
          toggleOverlay={toggleOverlay}
        />
        <div className="w-70 mx-auto p-12 ">
          <img src="/images/claims/tick.gif" alt="done" />
        </div>
        <div className="mt-4 mb-10">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 text-green-700 capitalize text-sm">
              <BsDot />
              <span>invoice reviewing</span>
            </div>
            <h1 className="capitalize tet-sm">13 feb.</h1>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 text-gray-900 capitalize text-sm">
              <BsDot />
              <span>payment release</span>
            </div>
            <h1 className="capitalize tet-sm">13 feb.</h1>
          </div>
          <div className="w-full border-1 border-gray-300 mt-2"></div>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 text-gray-900 capitalize text-sm">
              <BsDot />
              <span>money on your account</span>
            </div>
            <h1 className="capitalize tet-sm">13 feb.</h1>
          </div>
        </div>
        <Button
          label1="send message"
          label2="back home"
          togglePayment={goBackToHome}
          toggleOverlay={handleSendEmail}
        />
      </div>
    </>
  );
};

export default Paywment;
