import React from "react";
import Icon from "@mdi/react";
import { signIn, signOut, useSession } from "next-auth/react";
import { useTheme } from "next-themes";
import {
  mdiFacebook,
  mdiGoogle,
  mdiMoonWaxingCrescent,
  mdiWhiteBalanceSunny,
} from "@mdi/js";
import { Button, IconButton } from "@mui/material";

function Navbar() {
  // theme
  const { theme, setTheme } = useTheme();
  const session = useSession();

  return (
    <div className="flex basis-full justify-center items-center max-h-[10vh]">
      <IconButton
        onClick={() =>
          theme === "dark" ? setTheme("light") : setTheme("dark")
        }
        color="primary"
        className="mr-5 dark:bg-darkprimary bg-primary text-white"
      >
        {theme === "light" ? (
          <Icon path={mdiMoonWaxingCrescent} size={1} />
        ) : (
          <Icon path={mdiWhiteBalanceSunny} size={1} />
        )}
      </IconButton>
      <span>{theme} mode</span>
      <div className="flex items-center ml-5">
        {session.status === "unauthenticated" ? (
          <>
            <span className="mr-5">Login Via:</span>

            <IconButton
              onClick={(e) => {
                e.preventDefault();
                signIn("google");
              }}
              className="bg-primary text-white dark:bg-darkprimary mr-2"
            >
              <Icon path={mdiGoogle} size={1} className="text-green" />
            </IconButton>
            <IconButton
              onClick={(e) => {
                e.preventDefault();
                signIn("facebook");
              }}
              className="bg-primary text-white dark:bg-darkprimary"
            >
              <Icon path={mdiFacebook} size={1} className="text-green" />
            </IconButton>
          </>
        ) : (
          <>
            <span className="mr-2"> {session.data?.user.email}</span>
            <Button variant="contained" onClick={() => signOut()}>
              {" "}
              Logout
            </Button>
          </>
        )}
      </div>
    </div>
  );
}

export default Navbar;
