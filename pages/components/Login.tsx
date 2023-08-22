"use client";

import { signIn, signOut, useSession } from "next-auth/react";
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { useLoginViaSocialMutation } from "../store/slices/auth";
import { SET_USER } from "../store/slices/authSlice";
import { User } from "@/types/user";
import Icon from "@mdi/react";
import { mdiFacebook, mdiGoogle } from "@mdi/js";
import { IconButton } from "@mui/material";

interface UserDataProps {
  data: User;
}

export default function Login() {
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
      createOrLoginSocialUser();
    }
  }, [session]);

  return <main className="flex"></main>;
}
