import { IoCheckmarkDoneCircle } from "react-icons/io5";
import Title from "./Title";
import { useContext, useEffect, useRef, useState } from "react";
import {
  FaAngleDown,
  FaFileSignature,
  FaMoneyBillTransfer,
} from "react-icons/fa6";
import Document from "./Document";
import Button from "./Button";
import ButtonContext from "../../context/Context";
import Paywment from "./Paywment";
type FileListState = FileList | null;
const Submit = () => {
  const [files, setFiles] = useState<FileListState>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const context = useContext(ButtonContext);

  if (!context) {
    throw new Error("BooleanComponent must be used within a BooleanProvider");
  }

  const { showOverlay, toggleOverlay, showPayment, togglePayment } = context;

  const handleDragOver = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
  };

  useEffect(() => {
    console.log(files);
  }, [files]);

  const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    const droppedFiles = event.dataTransfer.files;
    setFiles(droppedFiles);
    console.log("Dropped files:", droppedFiles);
  };

  return (
    <>
      {showOverlay && !showPayment && (
        <div className="w-md bg-white absolute right-0 mr-4 rounded-xl p-4 align-middle mt-4">
          <Title
            title="Submit for payment"
            description="You need to upload invoice and confirm payment method"
            toggleOverlay={toggleOverlay}
          />
          <div className="flex items-center justify-between p-2 border border-gray-400 rounded-md mt-4">
            <div className="flex items-center gap-1 text-base font-semibold text-gray-900">
              <IoCheckmarkDoneCircle className="text-2xl text-green-700" />
              <span>$305.55</span>
            </div>
            <p className="text-base text-gray-400 capitalize">invoice total</p>
          </div>
          <div>
            <h1 className="text-base font-semibold capitalize text-gray-900 mt-4">
              uploads
            </h1>
            <div className="w-full border border-gray-400 border-dashed rounded-xl p-12 mt-4">
              <div onDragOver={handleDragOver} onDrop={handleDrop}>
                <div className="flex justify-center text-2xl text-gray-400">
                  <FaFileSignature />
                </div>
                <h1 className="text-base text-gray-400 font-semibold text-center">
                  Drag and drop any files related to this claim or{" "}
                  <span
                    className="text-gray-900 cursor-pointer border-b-1 border-gray-400 border-dashed"
                    onClick={() => inputRef.current?.click()}
                  >
                    click here to upload
                  </span>
                </h1>
                <input
                  type="file"
                  multiple
                  onChange={(event) => setFiles(event.target.files)}
                  hidden
                  ref={inputRef}
                />
              </div>
              <p className="text-xs text-gray-400 capitalize text-center mt-4">
                word, PDF, JPEG (max 4 MB)
              </p>
            </div>
          </div>
          <div className="mt-4">
            <div className="flex items-center justify-between ">
              <h1 className="font-semibold text-gray-900 text-base">
                Select invoice from files
              </h1>
              <span className="font-semibold text-gray-400 border-b-2 border-dashed border-gray-400 capitalize">
                see all
              </span>
            </div>
            <div className="flex items-center justify-between mt-4">
              <Document label="invoice" documentName="04-24-01.docx" />
              <Document label="claims" documentName="details.docx" />
              <Document label="endurance" documentName="numbers.docx" />
            </div>
          </div>
          <div className="mt-4">
            <div className="flex items-center justify-between ">
              <h1 className="font-semibold text-gray-900 text-base">
                Payment method
              </h1>
              <span className="font-semibold text-gray-400 border-b-2 border-dashed border-gray-400 capitalize">
                edit
              </span>
            </div>
            <div className="flex items-center justify-between mt-4 border border-gray-400 p-2 rounded-xl">
              <div className="flex items-center gap-2">
                <FaMoneyBillTransfer className="text-xl text-gray-400" />
                <h1 className="text-base text-gray-900 font-semibold capitalize">
                  web transfer
                </h1>
              </div>
              <div className="flex items-center gap-2 text-gray-400 font-semibold">
                <span>Ending in 9536</span>
                <FaAngleDown />
              </div>
            </div>
          </div>
          <Button
            label1="cancel"
            label2="submit for payment"
            toggleOverlay={toggleOverlay}
            togglePayment={togglePayment}
          />
        </div>
      )}
      {showOverlay && showPayment && <Paywment />}
    </>
  );
};

export default Submit;
