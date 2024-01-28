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
    <div>
      <div className="flex justify-center">
        <Image src="/images/moppersLogga.png" alt="Ingarö Moppers Logga" priority={true} width={251} height={400} />
      </div>
      <h1 className={subtitle({ className: "text-center" })}>OFFICIELLA SÅNGBOK</h1>
      <div className="min-w-0 max-w-[500px] sm:w-[500px] pt-4">
        <SongList songs={songs} authenticated={auth} />
      </div>
      {auth && (
        <div className="pl-3 pt-2">
          <SongFormModal action={insertSongAction} />
        </div>
      )}
    </div>
  );
}
