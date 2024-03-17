"use client";

import { Box, Button, Stack, Typography } from "@mui/material";
import axios from "axios";
import React, { useState } from "react";

export default function Foods() {
  const [foodName, setfoodName] = useState("");
  const [foodPrice, setfoodPrice] = useState("");
  const [foodImage, setfoodImage] = useState("");

  const getFoods = async () => {
    try {
      await axios.get("http://localhost:8000/foods").then((response) => {
        console.log(response.data);

        if (!response.data) {
          console.log("foods undefined");
        }

        // setfoodName({ ...response.data.name });
        // setfoodPrice({ ...response.data.price });
        // setfoodImage({ ...response.data.image });
      });
    } catch (error: any) {
      console.log(error.message);
    }
  };
  getFoods();

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
      {/* {getFoods.map({})} */}
      <Stack sx={{ width: "286px", height: "256px", gap: "14px" }}>
        <Box
          sx={{
            width: "282px",
            height: "186px",
            borderRadius: "16px",
            overflow: "hidden",
            objectFit: "cover",
          }}
        >
          {" "}
          <img src="./pizza.png" alt="" width="full" height="full" />
        </Box>

        <Stack
          sx={{
            height: "56px",
            gap: "2px",
            paddingLeft: "10px",
          }}
        >
          <Typography
            sx={{ color: "black", fontSize: "18px", fontWeight: "600" }}
          >
            Soup
            {/* {foodName} */}
          </Typography>
          <Typography
            sx={{ fontWeight: "600", fontSize: "18px", color: "#18BA51" }}
          >
            34000₮
          </Typography>
        </Stack>
      </Stack>
    </Box>
  );
}
