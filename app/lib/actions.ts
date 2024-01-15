"use server";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { db } from "@/db";
import { NewSong, songs } from "@/db/schema";
import { eq } from "drizzle-orm";

export async function insertSong(formData: FormData, lyrics: string) {
	const song: NewSong = {
		title: formData.get("title") as string,
		melody: formData.get("melody") as string,
		lyrics: lyrics,
	};
	await db.insert(songs).values(song);

	revalidatePath("/songs");
	redirect("/songs");
}
export async function deleteSong(id: number) {
	await db.delete(songs).where(eq(songs.id, id));
	revalidatePath("/songs");
}
export async function updateSong(id: number, formData: FormData, lyrics: string) {
	const song: NewSong = {
		title: formData.get("title") as string,
		melody: formData.get("melody") as string,
		lyrics: lyrics,
	};
	await db.update(songs).set(song).where(eq(songs.id, id));

	revalidatePath("/songs");
	redirect("/songs");
}
