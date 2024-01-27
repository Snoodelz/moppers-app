import { signOutAction } from "@/app/lib/actions";
import { isAuthenticated } from "@/auth";
import { Button } from "@nextui-org/button";
import LoginFormModal from "./loginFormModal";

export default async function NavBarAuthenticated() {
  let authenticated = await isAuthenticated();

  return (
    <>
      {authenticated ? (
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
