import { Stack, Typography } from "@mui/material";
import React from "react";
import InstagramIcon from "@mui/icons-material/Instagram";
import Link from "@mui/material/Link";

export default function Contact() {
  return (
    <Stack
      sx={{
        width: "1200px",
        height: "500px",
        bgcolor: "#f7f9fa",
        margin: "auto",
        marginTop: "75px",
        marginBottom: "110px",
        alignItems: "center",
        justifyContent: "center",
        boxShadow: 3,
        gap: "10px",
      }}
    >
      <Stack
        direction="row"
        spacing={2}
        sx={{
          width: "300px",
          alignItems: "center",
          justifyContent: "start",
        }}
      >
        <Typography
          sx={{ fontSize: "18px", fontWeight: "700", color: "black" }}
        >
          Утас:
        </Typography>
        <Typography sx={{ fontSize: "16px", fontWeight: "500", color: "gray" }}>
          88911216
        </Typography>
      </Stack>

      <Stack direction="row" spacing={2} sx={{ alignItems: "center" }}>
        <Typography
          sx={{ fontSize: "18px", fontWeight: "700", color: "black" }}
        >
          И-майл хаяг:
        </Typography>
        <Typography sx={{ fontSize: "16px", fontWeight: "500", color: "gray" }}>
          bbaatarnya@gmail.com
        </Typography>
      </Stack>

      <Stack
        sx={{
          width: "305px",
          justifyContent: "start",
          alignItems: "center",
        }}
        direction="row"
        spacing={2}
      >
        <InstagramIcon
          sx={{
            width: "30px",
            height: "30px",
            color: "black",
          }}
        />
        <Typography>baatarnyamg</Typography>
      </Stack>
    </Stack>
  );
}
