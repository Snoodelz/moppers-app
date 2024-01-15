"use client";
import "react-quill/dist/quill.snow.css";
import dynamic from "next/dynamic";
import "react-quill/dist/quill.snow.css";
import "@/styles/quill.css";

const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });
interface SimpleQuillProps {
	value: string;
	onChange: (content: string) => void;
}

const SimpleQuill = ({ value, onChange }: SimpleQuillProps) => {
	return (
		<div>
			<ReactQuill
				theme="snow"
				value={value}
				defaultValue={value}
				onChange={onChange}
				className="overflow-y-auto max-h-[300px]"
			/>
		</div>
	);
};

export default SimpleQuill;
