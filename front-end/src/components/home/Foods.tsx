"use client";

import React from "react";
import { Box, Button, Grid, Stack, Typography } from "@mui/material";
import { GetAllFoods } from "./HomePage";

type Foods = {
  data: FoodType[];
};

export default function Foods(props: Foods) {
  const { data } = props;
  // console.log(data);

  return (
    <Box
      sx={{
        width: "1200px",
        height: "1344px",
        display: "flex",
        flexWrap: "wrap",
        gap: "17px",
      }}
    >
      {data?.slice(0).map((el: FoodType, index: number) => (
        <Stack
          key={index}
          sx={{ width: "286px", height: "256px", gap: "14px" }}
        >
          <Box
            sx={{
              width: "282px",
              height: "186px",
              borderRadius: "16px",
              overflow: "hidden",
              objectFit: "cover",
              // border: "solid",
            }}
          >
            {" "}
            <img src={el.image} alt="" width={282} height={185} />
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
              {el.name}
            </Typography>
            <Typography
              sx={{ fontWeight: "600", fontSize: "18px", color: "#18BA51" }}
            >
              {el.price}₮
            </Typography>
          </Stack>
        </Stack>
      ))}
    </Box>
  );
}
