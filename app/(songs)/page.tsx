import { title, subtitle } from "@/components/primitives";
import Image from "next/image";
import { getAllSongs } from "../lib/data";
import SongList from "@/components/songlist";
import SongFormModal from "@/components/songFormModal";
import { insertSongAction } from "../lib/actions";
import { cachedAuth, isAuthenticated } from "@/auth";

export default async function SongsPage() {
  const songs = await getAllSongs();
  const auth = await cachedAuth();
  return (
    <div className="flex flex-col items-center w-full max-w-[500px]">
      <Image src="/images/moppersLogga.png" alt="Ingarö Moppers Logga" priority={true} width={251} height={400} />

      <h1 className={subtitle({ className: "text-center" })}>OFFICIELLA SÅNGBOK</h1>
      <div className="min-w-0 max-w-[500px] w-full pt-4">
        <SongList songs={songs} authenticated={auth} />
      </div>
      {auth && (
        <div className="pl-2 pt-2 self-start">
          <SongFormModal action={insertSongAction} />
        </div>
      )}
    </div>
  );
}
