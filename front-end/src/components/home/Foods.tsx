import { Box, Stack, Typography } from "@mui/material";
import React from "react";

const foodFields = [
  {
    img: "",
    name: "",
    price: "",
  },
];

export default function Foods() {
  return (
    <Box
      sx={{
        width: "1200px",
        height: "1344px",
        display: "flex",
        flexDirection: "column",
        gap: "80px",
        border: "solid",
      }}
    >
      <Stack sx={{ width: "286px", height: "256px", gap: "14px" }}>
        <Box
          sx={{
            width: "282px",
            height: "186px",
            borderRadius: "16px",
            border: "solid",
            overflow: "hidden",
            objectFit: "cover",
          }}
        >
          {" "}
          <img src="./homeFoodLogo.png" alt="" width="full" height="full" />
        </Box>

        <Stack sx={{ height: "56px", gap: "2px" }}>
          <Typography
            sx={{ color: "black", fontSize: "18px", fontWeight: "600" }}
          >
            Soup
          </Typography>
          <Typography
            sx={{ fontWeight: "600", fontSize: "18px", color: "#18BA51" }}
          >
            34,000₮
          </Typography>
        </Stack>
      </Stack>
    </Box>
  );
}
