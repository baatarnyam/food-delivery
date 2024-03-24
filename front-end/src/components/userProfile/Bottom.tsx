"use client";

import React from "react";
import { Stack, Typography } from "@mui/material";
import HistoryIcon from "@mui/icons-material/History";
import LogoutIcon from "@mui/icons-material/Logout";
import { useRouter } from "next/navigation";

export default function Bottom() {
  const { push } = useRouter();
  const handlerLogOut = () => {
    localStorage.removeItem("Token");
    push("/home");
  };

  return (
    <Stack spacing={3} sx={{ width: "370px", alignItems: "start" }}>
      <Stack direction="row" sx={{ alignItems: "center" }} spacing={2}>
        <Typography
          sx={{
            width: "40px",
            height: "40px",
            bgcolor: "white",
            display: "flex",
            border: "solid 1px",
            borderColor: "#EEEFF2",
            borderRadius: "100%",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <HistoryIcon />
        </Typography>

        <Typography sx={{ fontSize: "16px", fontWeight: "400" }}>
          Захиалгын түүх
        </Typography>
      </Stack>

      <Stack
        direction="row"
        sx={{
          alignItems: "center",
          justifyContent: "start",
          cursor: "pointer",
        }}
        spacing={2}
        onClick={handlerLogOut}
      >
        <Typography
          sx={{
            width: "40px",
            height: "40px",
            bgcolor: "white",
            display: "flex",
            border: "solid 1px",
            borderColor: "#EEEFF2",
            borderRadius: "100%",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <LogoutIcon />
        </Typography>

        <Typography sx={{ fontSize: "16px", fontWeight: "400" }}>
          Гарах
        </Typography>
      </Stack>
    </Stack>
  );
}
