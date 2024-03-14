import React from "react";
import { Box, Divider, Stack, Typography } from "@mui/material";

export default function HomePageHeader() {
  return (
    <Box
      sx={{
        width: "1400px",
        height: "780px",
        margin: "auto",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <img
        src="./homeBg.png"
        width={1400}
        height={780}
        className="absolute z-0"
      />

      <Box
        sx={{
          width: "1160px",
          position: "absolute",
          zIndex: "10",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Stack sx={{ gap: "23px" }}>
          <Typography
            sx={{
              width: "280px",
              height: "114px",
              fontSize: "40px",
              fontWeight: "600",
              color: "white",
            }}
          >
            Pinecone Food delivery
          </Typography>

          <Divider sx={{ borderColor: "white", width: "280px" }} />

          <Typography
            sx={{
              width: "340px",
              height: "64px",
              fontSize: "22px",
              fontWeight: "500",
              color: "white",
              lineHeight: "26px",
            }}
          >
            Horem ipsum dolor sit amet, consectetur adipiscing elit.
          </Typography>
        </Stack>

        <img src="./homeFoodLogo.png" width={500} height={433} />
      </Box>
    </Box>
  );
}
