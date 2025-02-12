import { useEffect, useRef, useState } from "react";
import { FaFileSignature, FaNoteSticky } from "react-icons/fa6";
import { VscSend } from "react-icons/vsc";

// Define the type for the files state
type FileListState = FileList | null;

const Action = () => {
  const [files, setFiles] = useState<FileListState>(null);
  const inputRef = useRef<HTMLInputElement>(null);
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
    <div className="flex justify-between items-center mt-6">
      <div className="w-85 h-65 border-t-2 border-r-2 border-gray-400 rounded-xl p-4 relative">
        <div className="flex gap-2 items-center">
          <div className="w-8 h-8 rounded-full overflow-hidden">
            <img
              src="/images/claims/user.jpg"
              alt="support chat"
              className="object-cover w-full h-full"
            />
          </div>
          <h1 className="text-sm font-semibold uppercase">support chat</h1>
        </div>
        <div className="bg-gray-400 rounded-md p-2 mt-4">
          <p className="text-sm font-semibold">
            Do you have any questions or additional notes on this claims? write
            it here.
          </p>
        </div>
        <div className="w-full border-b-1 border-gray-400 absolute bottom-10 left-0"></div>
        <div className="absolute bottom-4 left-4 right-4 flex justify-between items-center text-gray-400 font-semibold">
          <input type="text" placeholder="Type your message..." />
          <VscSend />
        </div>
      </div>
      <div className="w-85 h-65  border-t-2 border-l-2 border-gray-400 rounded-xl p-4">
        <div className="flex gap-2 items-center">
          <FaNoteSticky />
          <h1 className="text-sm font-semibold uppercase">notes</h1>
        </div>
        <div className="bg-gray-400 rounded-md p-2 mt-4 h-45 ">
          <textarea
            className="w-full h-full bg-transparent resize-none outline-none"
            placeholder="You can write your notes here."
          ></textarea>
        </div>
      </div>
      <div className="w-85 h-65 border-dashed border-2 border-gray-400 rounded-xl p-4">
        <div className="flex gap-2 items-center">
          <FaFileSignature />
          <h1 className="text-sm font-semibold uppercase">files</h1>
        </div>
        <div className="mt-15" onDragOver={handleDragOver} onDrop={handleDrop}>
          <h1 className="text-base text-gray-400 font-semibold text-center">
            Drag and drop any files related to this claim or{" "}
            <span
              className="text-gray-900 cursor-pointer"
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
      </div>
    </div>
  );
};

export default Action;
