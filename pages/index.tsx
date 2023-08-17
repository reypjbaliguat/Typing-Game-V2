"use client";

import { signIn, signOut, useSession } from "next-auth/react";
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "./store/hooks";
import { useLoginViaSocialMutation } from "./store/slices/auth";
import { SET_USER } from "./store/slices/authSlice";
import { User } from "@/types/user";

interface UserDataProps {
  data: User;
}

export default function Home() {
  const session = useSession() as any;
  const dispatch = useAppDispatch();
  const [loginViaSocial] = useLoginViaSocialMutation();

  const createOrLoginSocialUser = async () => {
    const { data } = session;
    const { user } = data;
    const { email, image, name } = user;
    const body = {
      email,
      name,
      image,
    };
    const userData = (await loginViaSocial({ body })) as UserDataProps;

    const newData = {
      id: userData.data.id,
      email: userData.data.email,
      name: userData.data.name,
      image: userData.data.image,
    };
    dispatch(SET_USER({ user: newData }));
  };

  const auth = useAppSelector((state) => state.auth);
  useEffect(() => {
    if (session.status === "authenticated") {
      console.log(session.status);
      createOrLoginSocialUser();
    }
  }, [session]);

  return (
    <main className="flex">
      <div className="flex">
        <button
          className="p-5"
          onClick={(e) => {
            e.preventDefault();
            signIn("google");
          }}
        >
          Login via Gmail
        </button>
      </div>
      <div className="flex mt-4">
        <button
          className="p-5"
          onClick={(e) => {
            e.preventDefault();
            signIn("facebook");
          }}
        >
          Login via Facebook
        </button>
      </div>
      <div className="flex mt-4">
        <button
          className="p-5 "
          onClick={(e) => {
            e.preventDefault();
            signOut();
          }}
        >
          Logout oyy
        </button>
      </div>
    </main>
  );
}
