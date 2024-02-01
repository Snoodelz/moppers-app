import { subtitle } from "@/components/primitives";
import Image from "next/image";
import { getAllSongs } from "../lib/data";
import SongList from "@/components/song-list";
import SongFormModal from "@/components/songFormModal";
import { insertSongAction } from "../lib/actions";
import { cachedAuth, isAuthenticated } from "@/auth";

export default async function SongsPage() {
  const songs = await getAllSongs();
  const auth = await cachedAuth();
  return (
    <div className="flex w-full max-w-[500px] flex-col items-center">
      <Image
        src="/images/moppersLogga.png"
        alt="Ingarö Moppers Logga"
        priority={true}
        width={251}
        height={400}
        className="h-auto w-auto"
      />

      <h1 className={subtitle({ className: "text-center" })}>OFFICIELLA SÅNGBOK</h1>
      <div className="w-full min-w-0 max-w-[500px] pt-4">
        <SongList songs={songs} authenticated={auth} />
      </div>
      {auth && (
        <div className="self-start pl-2 pt-2">
          <SongFormModal action={insertSongAction} />
        </div>
      )}
    </div>
  );
}
