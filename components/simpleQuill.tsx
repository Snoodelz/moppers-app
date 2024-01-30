"use client";
import "@/styles/quill.css";
import dynamic from "next/dynamic";
import "react-quill/dist/quill.snow.css";

const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });
interface SimpleQuillProps {
  value: string;
  onChange: (content: string) => void;
}

const SimpleQuill = ({ value, onChange }: SimpleQuillProps) => {
  return (
    <div className="w-full">
      <ReactQuill theme="snow" value={value} onChange={onChange} />
    </div>
  );
};

export default SimpleQuill;
