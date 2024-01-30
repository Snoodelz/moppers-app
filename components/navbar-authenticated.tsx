import { signOutAction } from "@/app/lib/actions";
import { isAuthenticated } from "@/auth";
import { Button } from "@nextui-org/button";
import { unstable_cache } from "next/cache";
import LoginFormModal from "./loginFormModal";

export default async function NavBarAuthenticated() {
  //let authenticated = await isAuthenticated();

  const cachedAuth = unstable_cache(async () => isAuthenticated(), ["auth"], {
    tags: ["auth"],
    revalidate: false,
  });
  const auth = await cachedAuth();

  return (
    <>
      {auth ? (
        <form action={signOutAction}>
          <Button variant="ghost" type="submit">
            Logga ut
          </Button>
        </form>
      ) : (
        <LoginFormModal />
      )}
    </>
  );
}
