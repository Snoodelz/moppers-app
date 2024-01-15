"use client";

import { Accordion, AccordionItem } from "@nextui-org/accordion";
import type { Song } from "@/db/schema";
import { Button } from "@nextui-org/button";
import { deleteSong, updateSong } from "@/app/lib/actions";
import Link from "next/link";
import RemoveModal from "./removeModal";
import SongFormModal from "./songFormModal";
import Lyrics from "./lyrics";

type SongArray = Song[];

export default function SongList({ songs }: { songs: SongArray }) {
	if (!songs) {
		return null;
	}

	return (
		<Accordion variant="splitted">
			{songs.map((song) => (
				<AccordionItem
					className=""
					key={song.id}
					aria-label="Accordion 1"
					subtitle={<i>Melodi: {song.melody}</i>}
					title={song.title}
				>
					<Lyrics lyrics={song.lyrics} />
					<br />
					<div className="float-right mb-4 gap-2 flex">
						<SongFormModal song={song} action={updateSong.bind(null, song.id)} />
						<RemoveModal id={song.id} title={song.title} />
					</div>
				</AccordionItem>
			))}
		</Accordion>
	);
}
