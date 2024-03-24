"use client";

import { Stack } from "@mui/material";
import React from "react";
import Profile from "./Profile";
import ProfileInput from "./ProfileInput";
import Bottom from "./Bottom";
import { useContext, useState } from "react";
import { UserContext } from "../provider/UserProvider";
import { useRouter } from "next/navigation";

export default function UserProfile() {
  const [userData, setUserData] = useState({});
  const { push } = useRouter();
  const { isLogin } = useContext(UserContext);

  if (!isLogin) {
    push("/home");
  }

  return (
    <Stack
      sx={{
        width: "432px",
        height: "617px",
        justifyContent: "space-between",
        margin: "auto",
        marginBottom: "100px",
        marginTop: "75px",
      }}
    >
      <Profile />

      <Stack
        sx={{
          width: "full",
          height: "400px",
          alignItems: "center",
          padding: "16px",
          justifyContent: "space-between",
        }}
      >
        <ProfileInput name="name" label="Таны нэр" value="" />
        <ProfileInput name="phone" label="Утасны дугаар" value="" />
        <ProfileInput name="email" label="Имэйл хаяг" value="" />
        <Bottom />
      </Stack>
    </Stack>
  );
}
