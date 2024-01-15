import { updateSong } from "@/app/lib/actions";
import { getSong } from "@/app/lib/data";
import { title } from "@/components/primitives";
import { SongForm } from "@/components/songForm";
import { Button } from "@nextui-org/button";
import { Input, Textarea } from "@nextui-org/input";

async function EditPage({ params }: { params: { editId: string } }) {
	const songId = Number(params.editId);
	console.log(songId);
	const song = await getSong(songId);
	const updateSongWithId = updateSong.bind(null, songId);

	return (
		<div>
			<h1 className={title()}>Redigera låt</h1>
			{/* <SongForm song={song} action={updateSongWithId} /> */}
			{/* <form
				action={updateSongWithId}
				className="flex flex-col w-full flex-wrap md:flex-nowrap gap-4 pt-8"
			>
				<Input
					variant="bordered"
					isRequired
					type="text"
					label="Titel"
					name="title"
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
				<Button type="submit">Ändra låt</Button>
			</form> */}
		</div>
	);
}

export default EditPage;
