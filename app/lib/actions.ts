"use server";
import { revalidatePath } from "next/cache";
import { db } from "@/db";
import { NewSong, songs } from "@/db/schema";
import { eq } from "drizzle-orm";
import { signIn, signOut, isAuthenticated  } from "@/auth";

export async function insertSongAction(formData: FormData, lyrics: string) {
	const authenticated = await isAuthenticated();
	if (!authenticated) {
		throw new Error('Unauthorized access: User does not have admin privileges.');
	}

	const song: NewSong = {
		title: formData.get("title") as string,
		melody: formData.get("melody") as string,
		lyrics: lyrics,
	};
	await db.insert(songs).values(song);

	revalidatePath("/songs");
}
export async function deleteSongAction(id: number) {
	const authenticated = await isAuthenticated();
	if (!authenticated) {
		throw new Error('Unauthorized access: User does not have admin privileges.');
	}

	console.log("deleteSongAction", id, authenticated);

	await db.delete(songs).where(eq(songs.id, id));
	revalidatePath("/songs");
}
export async function updateSongAction(id: number, formData: FormData, lyrics: string) {
	const authenticated = await isAuthenticated();
	if (!authenticated) {
		throw new Error('Unauthorized access: User does not have admin privileges.');
	}

	const song: NewSong = {
		title: formData.get("title") as string,
		melody: formData.get("melody") as string,
		lyrics: lyrics,
	};
	await db.update(songs).set(song).where(eq(songs.id, id));

	revalidatePath("/songs");
}


export async function authenticateAction(formData: FormData) {
	const password = formData.get("password") as string;
	return await signIn(password);
  }

export async function signOutAction() {
	await signOut();
}