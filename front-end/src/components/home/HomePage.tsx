import React from "react";
import { Box, Button } from "@mui/material";
import HomePageHeader from "./HomePageHeader";
import FoodController from "./FoodController";
import Foods from "./Foods";
import axios from "axios";

type FoodType = {
  _id: string;
  name: string;
  image: string;
  ingredients: string;
  price: string;
};

export const GetAllFoods = async () => {
  try {
    const { data } = await axios.get<FoodType[]>("http://localhost:8000/foods");

    return data;
  } catch (error) {
    console.log(error);
  }
};

export default async function HomePage() {
  const data: any = await GetAllFoods();

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
      <Foods data={data} />
    </Box>
  );
}
