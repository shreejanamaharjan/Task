import { LiaFileSolid } from "react-icons/lia";

interface IDocument {
  label: string;
  documentName: string;
}

const Document: React.FC<IDocument> = ({ label, documentName }) => {
  return (
    <div className="rounded-xl border border-gray-400 w-33 p-4  font-semibold text-gray-900 hover:outline-2 hover:outline-gray-400">
      <LiaFileSolid className="text-xl" />
      <h1 className="mt-2 text-sm capitalize">{label}</h1>
      <span className="mt-4 text-sm">{documentName}</span>
    </div>
  );
};

export default Document;
