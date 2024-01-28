'use server';
import { revalidateTag, unstable_cache } from "next/cache";
import { cookies } from "next/headers";


export async function signIn(password: string) {
    if (password === process.env.ADMIN_PASSWORD) {
        cookies().set("pswd", password, {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            maxAge: 60 * 60 * 24 * 7, // One week
            path: "/",
        });
        revalidateTag("auth");
        return true;
    }
    return false;
}

export async function signOut() {
    cookies().set("pswd", "", {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        maxAge: 0,
        path: "/",
    });
    revalidateTag("auth");
}

export async function isAuthenticated() {
    return cookies().get("pswd")?.value === process.env.ADMIN_PASSWORD;
}

export const cachedAuth = unstable_cache(async () => isAuthenticated(), ["auth"], {
    tags: ["auth"],
  });
