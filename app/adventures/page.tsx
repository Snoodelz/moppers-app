import { title } from "@/components/primitives";
import { Button } from "@nextui-org/button";

export default function AdventuresPage() {
	return (
		<div>
			<div className="flex justify-center items-center w-100">
				<h1 className={title()}>Våra Äventyr</h1>
			</div>
			<div className="grid mx-8 my-8">
				<Button variant="ghost" className="w-40 py-20">
					+
				</Button>
			</div>
		</div>
	);
}
