"use client";

import { Box, Stack, Typography } from "@mui/material";
import React from "react";
import Input from "./Input";
import Button from "@mui/material/Button";
import { useState, useEffect } from "react";
import axios from "axios";
import { log } from "console";

export default function ForgetPassword() {
  const [checkMail, setCheckMail] = useState({});
  const [error, setError] = useState();

  const handleChange = (e: any) => {
    const { name, value } = e.target;

    setCheckMail({ ...checkMail, [name]: value });
    console.log(checkMail, "asd asd");
  };

  const handleClick = async (e: any) => {
    e.preventDefault();

    try {
      const { data } = await axios.post(
        "http://localhost:8000/forgot",
        checkMail
      );
      console.log(data, "datashuu bro");
    } catch (error: any) {
      console.log(error.response.data);
    }
  };

  return (
    <Box sx={{ display: "flex", justifyContent: "center" }}>
      <Stack
        sx={{
          width: "448px",
          height: "fit-content",
          marginTop: "86px",
          marginBottom: "75px",
          gap: "48px",
          padding: "32px",
          // border: "solid",
          alignItems: "center",
        }}
      >
        <Typography sx={{ fontSize: "28px", fontWeight: "700" }}>
          Нууц үг сэргээх
        </Typography>

        <Stack>
          <Typography sx={{ fontSize: "14px" }}>Имэйл </Typography>
          <Input
            type="email"
            name="email"
            placeholder="Имэйл хаягаа оруулна уу"
            height="48px"
            onChange={handleChange}
          />
        </Stack>
        <Button
          variant="contained"
          style={{
            // backgroundColor: "#18BA51",
            backgroundColor: "#EEEFF2",
            width: "379px",
            height: "45px",
          }}
          onClick={handleClick}
        >
          Үргэлжлүүлэх
        </Button>
      </Stack>
    </Box>
  );
}
