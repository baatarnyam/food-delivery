import React from "react";
import EditIcon from "@mui/icons-material/Edit";
import { Stack, Typography } from "@mui/material";

export default function Profile() {
  return (
    <Stack
      sx={{
        width: "full",
        height: "193px",
        alignItems: "center",
        justifyContent: "space-between",
        position: "relative",
        //   border: "solid",
      }}
    >
      <img src="./profile.png" width={120} height={120} />
      <Stack
        sx={{
          width: "34px",
          height: "34px",
          bgcolor: "white",
          border: "solid 1px",
          borderColor: "gray",
          borderRadius: "50%",
          position: "absolute",
          top: "85px",
          right: "150px",
          justifyContent: "center",
          alignItems: "center",
          cursor: "pointer",
        }}
      >
        <EditIcon sx={{ width: "18px", height: "18px", color: "#18BA51" }} />
      </Stack>

      <Typography
        sx={{ fontSize: "28px", fontWeight: "700", color: "#0D1118" }}
      >
        УгтахБаяр
      </Typography>
    </Stack>
  );
}
