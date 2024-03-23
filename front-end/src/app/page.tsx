"use client";

import { Box, Container } from "@mui/material";
import { useContext } from "react";
import { UserContext } from "@/components/provider/UserProvider";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  const { isLogin } = useContext(UserContext);

  if (!isLogin || isLogin) {
    router.push("/home");
  }
  return (
    <Container
      maxWidth={"xl"}
      sx={{
        maxWidth: "1440px",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    ></Container>
  );
}
