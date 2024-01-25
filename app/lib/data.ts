"use server";
import { db } from "@/db";
import { eq } from "drizzle-orm";
import { NewSong, songs } from "@/db/schema";

export async function getAllSongs() {
	return await db.query.songs.findMany();
}
export async function getSong(id: number) {
	return await db.query.songs.findFirst({ where: eq(songs.id, id) });
}
