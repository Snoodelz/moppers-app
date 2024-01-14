"use server";
import { db } from "@/db";
import { eq } from "drizzle-orm";
import { NewSong, songs } from "@/db/schema";

export async function getAllSongs() {
	return await db.query.songs.findMany();
}
export async function getSong(id: number) {
	const song = await db.select().from(songs).where(eq(songs.id, id)).limit(1);
	return song[0];
}
