"use client";

import { Box, Button, Stack, Typography } from "@mui/material";
import { Staatliches } from "next/font/google";
import Input from "./Input";
import Password from "./Password";
import axios from "axios";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";

export default function Login() {
  const [userData, setUserData] = useState({});
  const [error, setError] = useState();

  const handleChange = (e: any) => {
    const { name, value } = e.target;

    setUserData({
      ...userData,
      [name]: value,
    });
    console.log(userData);
  };

  const handleClicked = async (e: any) => {
    e.preventDefault();

    try {
      await axios
        .post("http://localhost:8000/login", userData)

        .then((response) => {
          console.log(response.data);

          const setItem = () => {
            localStorage.setItem("loginToken", response.data.accessToken);
          };
          setItem();

          if (
            response.data !== "User not found" &&
            response.data !== "Email or password is wrong"
          ) {
            useRouter().push("/signUp");
          } else {
            setError(response.data);
          }
        });
    } catch (error: any) {
      // alert(error.response.data);
      setError(error.response.data);
    }
  };

  return (
    <Stack
      sx={{
        width: "448px",
        height: "550px",
        border: "solid",
        margin: "auto",
        padding: "32px",
        alignItems: "center",
        gap: "48px",
      }}
    >
      <Typography
        sx={{ fontSize: "28px", fontWeight: "700", color: "#0D1118" }}
      >
        Нэвтрэх
      </Typography>
      {/* <form onSubmit={handleChange} action=""> */}
      <Input
        placeholder="И-мэйл хаягаа оруулна уу"
        type="email"
        height="42px"
        onChange={handleChange}
      />

      <Stack sx={{ alignItems: "end" }}>
        <Password placeholder="Нууц үгээ оруулна уу" onChange={handleChange} />
        <Button variant="text" sx={{ fontSize: "14px" }}>
          Нууц үг сэргээх
        </Button>
      </Stack>

      <Button
        type="submit"
        variant="contained"
        style={{
          backgroundColor: "#18BA51",
          width: "379px",
          height: "45px",
        }}
        onClick={handleClicked}
      >
        Нэвтрэх
      </Button>
      {/* </form> */}
      <Typography>Эсвэл</Typography>

      <Button
        type="submit"
        variant="outlined"
        style={{
          //   backgroundColor: "#18BA51",
          width: "379px",
          height: "45px",
        }}
      >
        Бүртгүүлэх
      </Button>
    </Stack>
  );
}
