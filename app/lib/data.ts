"use server";
import { db } from "@/db";
import { eq, like } from "drizzle-orm";
import { songs } from "@/db/schema";

export async function getAllSongs() {
	return await db.query.songs.findMany();
}
export async function getSong(id: number) {
	return await db.query.songs.findFirst({ where: eq(songs.id, id) });
}
export async function searchSong(title: string) {
	return await db
		.select()
		.from(songs)
		.where(like(songs.title, `%${title}%`));
}
