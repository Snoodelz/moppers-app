import { Song } from "@/db/schema";
import { Button } from "@nextui-org/button";
import { Input, Textarea } from "@nextui-org/input";

interface SongFormProps {
	song?: Song | null;
	action: (formData: FormData) => void;
}

export const SongForm: React.FC<SongFormProps> = ({ song, action }) => {
	return (
		<form action={action} className="flex flex-col w-full flex-wrap md:flex-nowrap gap-4 pt-8">
			<Input
				variant="bordered"
				isRequired
				type="text"
				label="Titel"
				name="title"
				autoFocus
				defaultValue={song?.title ?? ""}
			/>
			<Input
				variant="bordered"
				type="text"
				label="Melodi"
				name="melody"
				defaultValue={song?.melody ?? ""}
			/>
			<Textarea
				variant="bordered"
				isRequired
				label="Låt text"
				name="lyrics"
				defaultValue={song?.lyrics ?? ""}
			/>
			<Button type="submit" color="primary">
				{song ? "Ändra låt" : "Lägg till låt"}
			</Button>
		</form>
	);
};
