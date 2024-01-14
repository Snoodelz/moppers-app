"use client";

import { Accordion, AccordionItem } from "@nextui-org/accordion";
import type { Song } from "@/db/schema";
import { Button } from "@nextui-org/button";
import { deleteSong } from "@/app/lib/actions";
import Link from "next/link";
import RemoveModal from "./removeModal";

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
					{song.lyrics}
					<br />
					<div className="float-right mb-4">
						<Link href={`/songs/${song.id}`} className="mr-2">
							<Button color="secondary">Redigera</Button>
						</Link>
						<RemoveModal id={song.id} title={song.title} />
					</div>
				</AccordionItem>
			))}
		</Accordion>
	);
}
