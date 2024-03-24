import { Box, Stack, Typography } from "@mui/material";
import React from "react";

export default function DeliveryArea() {
  return (
    <Stack
      sx={{
        width: "1200px",
        height: "1130px",
        margin: "auto",
        marginTop: "75px",
        marginBottom: "90px",
        justifyContent: "space-between",
        border: "solid",
      }}
    >
      <Box sx={{ width: "full", height: "615px", border: "solid" }}></Box>

      <Stack
        direction="row"
        spacing={2}
        sx={{ width: "full", height: "65px", alignItems: "center" }}
      >
        <img src="./icon.png" width={32} height={32} />
        <Typography
          sx={{ fontSize: "22px", fontWeight: "700", color: "#272727" }}
        >
          Хүргэлтийн бүс дэх хаягууд
        </Typography>
      </Stack>

      <Stack
        direction="row"
        sx={{ width: "full", height: "588px", border: "solid" }}
      >
        <Stack></Stack>
        <Stack></Stack>
      </Stack>
    </Stack>
  );
}
