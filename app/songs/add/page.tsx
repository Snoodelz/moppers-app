"use client";
import { insertSong } from "@/app/lib/actions";
import { title } from "@/components/primitives";
import { SongForm } from "@/components/songForm";
import { Button } from "@nextui-org/button";
import { Input, Textarea } from "@nextui-org/input";

export default function AddSongsPage() {
	return (
		<div>
			<h1 className={title()}>Lägg till låt</h1>
			{/* <SongForm action={insertSong} /> */}
		</div>
	);
}
