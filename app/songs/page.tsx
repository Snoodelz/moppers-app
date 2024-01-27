import { title, subtitle } from "@/components/primitives";
import type { SongArray, SongProps } from "@/types/songTypes";
import Image from "next/image";
import { getAllSongs } from "../lib/data";
import SongList from "@/components/songlist";
import { Button } from "@nextui-org/button";
import Link from "next/link";
import SongFormModal from "@/components/songFormModal";
import { insertSong } from "../lib/actions";
export default async function SongsPage() {
	const songs = await getAllSongs();
	return (
		<div>
			<div className="flex justify-center">
				<Image
					src="/images/moppersLogga.png"
					alt="Ingarö Moppers Logga"
					priority={true}
					width={251}
					height={400}
				/>
			</div>
			<h1 className={subtitle({ className: "text-center" })}>OFFICIELLA SÅNGBOK</h1>
			<div className="min-w-0 max-w-[500px] sm:w-[500px] pt-4">
				<SongList songs={songs} />
			</div>
			<div className="pl-3 pt-2">
				<SongFormModal action={insertSong} />
			</div>
		</div>
	);
}
