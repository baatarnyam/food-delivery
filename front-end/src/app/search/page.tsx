"use client";

import React from "react";
import Search from "@/components/Search";
import { Stack } from "@mui/material";
import { useSearchParams } from "next/navigation";
import axios from "axios";

const getFoods = async () => {
  const params = useSearchParams();
  const id = params.get("id");

  const body = {
    filter: {
      $or: [
        {
          name: {
            $regex: id,
            $options: "i",
          },
        },
        {
          price: {
            $regex: id,
          },
        },
      ],
    },
  };
  // console.log(body, "body");

  try {
    // const response = await fetch("http://localhost:8000/foods", {
    //   cache: "no-store",
    //   body,
    // });
    // console.log(response, "data bnu");

    const { data } = await axios.post<FoodType[]>(
      "http://localhost:8000/foods",
      body
    );
    return data;
  } catch (error) {
    console.log(error);
  }
};

export default async function searchPage() {
  const data = await getFoods();
  // console.log(data, "response bnu");

  return (
    <Stack
      sx={{
        width: "1200px",
        margin: "auto",
        marginTop: "75px",
        marginBottom: "100px",
      }}
    >
      <Search data={data} />
    </Stack>
  );
}
