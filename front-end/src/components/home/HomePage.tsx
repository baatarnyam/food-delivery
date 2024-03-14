import React from "react";
import { Box } from "@mui/material";
import HomePageHeader from "./HomePageHeader";
import FoodController from "./FoodController";
import Foods from "./Foods";

export default function HomePage() {
  return (
    <Box
      sx={{
        width: "1400px",
        height: "full",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "120px",
        margin: "auto",
        marginTop: "75px",
        marginBottom: "122px",
      }}
    >
      <HomePageHeader />
      <FoodController />
      <Foods />
    </Box>
  );
}
