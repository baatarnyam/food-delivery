import { Box, Button, Stack, Typography } from "@mui/material";
import { Staatliches } from "next/font/google";
import React from "react";
import Input from "./Input";
import Password from "./Password";

export default function Login() {
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

      <Input
        placeholder="И-мэйл хаягаа оруулна уу"
        type="email"
        height="42px"
        // onChange={handleChange}
      />

      <Stack sx={{ alignItems: "end" }}>
        <Password
          placeholder="Нууц үгээ оруулна уу"
          //   onChange={handleChange}
        />
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
      >
        Нэвтрэх
      </Button>
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
