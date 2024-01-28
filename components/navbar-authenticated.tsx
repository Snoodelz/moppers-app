import { signOutAction } from "@/app/lib/actions";
import { isAuthenticated, cachedAuth } from "@/auth";
import { Button } from "@nextui-org/button";
import LoginFormModal from "./loginFormModal";
import { unstable_cache } from "next/cache";

export default async function NavBarAuthenticated() {
  //let authenticated = await isAuthenticated();

  // const cachedAuth = unstable_cache(async () => isAuthenticated(), ["auth"], {
  //   tags: ["auth"],
  //   revalidate: false,
  // });
  const auth = await cachedAuth();
  /*   const auth = true; */

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
