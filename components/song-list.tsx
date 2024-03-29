"use client";

import { Accordion, AccordionItem } from "@nextui-org/accordion";
import type { Song } from "@/db/schema";
import { Button } from "@nextui-org/button";
import { deleteSongAction, updateSongAction } from "@/app/lib/actions";
import Link from "next/link";
import RemoveModal from "./removeModal";
import SongFormModal from "./songFormModal";
import Lyrics from "./lyrics";

type SongArray = Song[];

export default function SongList({ songs, authenticated }: { songs: SongArray; authenticated: boolean }) {
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
          <div className="float-right mb-4 flex gap-2">
            {authenticated && (
              <>
                <SongFormModal song={song} action={updateSongAction.bind(null, song.id)} />
                <RemoveModal id={song.id} title={song.title} />
              </>
            )}
          </div>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
