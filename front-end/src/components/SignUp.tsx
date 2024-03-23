"use client";

import * as React from "react";
import { Box, Stack, Typography } from "@mui/material";
import Input from "./Input";
import Password from "./Password";
import Button from "@mui/material/Button";
import Checkbox from "@mui/material/Checkbox";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";

export default function SignUp() {
  const [error, setError] = useState<string>();
  const [listen, setListen] = useState(false);
  const [userData, setUserData] = useState<{
    password: string;
    RePassword: string;
  }>({ password: "", RePassword: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setUserData({
      ...userData,
      [name]: value,
    });
  };

  const router = useRouter();

  const handleClicked = async (e: any) => {
    e.preventDefault();

    try {
      if (userData.password !== userData.RePassword) {
        setError("Password and Re-Password does not match");
        return;
      }

      const { data } = await axios.post(
        "http://localhost:8000/signUp",
        userData
      );

      router.push("/login");
    } catch (error: any) {
      setError(error.response.data);
    }
  };

  return (
    <Box
      sx={{
        width: "448px",
        height: "700px",
        borderRadius: "16px",
        padding: "32px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "40px",
        margin: "auto",
        marginBottom: "80px",
        marginTop: "75px",
      }}
    >
      <Typography sx={{ fontSize: "28px", fontWeight: "700" }}>
        Бүртгүүлэх
      </Typography>

      <Stack sx={{ width: "384px", height: "fit", gap: "16px" }}>
        <Box
          sx={{
            width: "full",
            height: "69px",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Typography sx={{ fontSize: "14px", fontWeight: "400" }}>
            Нэр
          </Typography>
          <Input
            placeholder="Нэрээ оруулна уу"
            type="text"
            height="42px"
            name="name"
            onChange={handleChange}
          />
        </Box>

        <Box
          sx={{
            width: "full",
            height: "69px",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Typography sx={{ fontSize: "14px", fontWeight: "400" }}>
            И-мэйл
          </Typography>
          <Input
            placeholder="И-мэйл хаягаа оруулна уу"
            type="email"
            height="42px"
            name="email"
            onChange={handleChange}
          />
        </Box>

        <Box
          sx={{
            width: "full",
            height: "69px",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Typography sx={{ fontSize: "14px", fontWeight: "400" }}>
            Утас
          </Typography>
          <Input
            type="number"
            height="42px"
            placeholder="Утасны дугаараа оруулна уу"
            name="phone"
            onChange={handleChange}
          />
        </Box>

        <Box
          sx={{
            width: "full",
            height: "69px",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Typography sx={{ fontSize: "14px", fontWeight: "400" }}>
            Нууц үг
          </Typography>
          <Password
            placeholder="Нууц үгээ оруулна уу"
            name="password"
            onChange={handleChange}
          />
        </Box>

        <Box
          sx={{
            width: "full",
            height: "69px",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Typography sx={{ fontSize: "14px", fontWeight: "400" }}>
            Нууц үг давтах
          </Typography>
          <Password
            placeholder="Нууц үгээ оруулна уу"
            name="RePassword"
            onChange={handleChange}
          />
        </Box>

        {error && (
          <Typography sx={{ color: "red", fontSize: "12px" }}>
            {error}
          </Typography>
        )}

        <Box
          sx={{
            width: "383px",
            height: "120px",
            marginTop: "25px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <Box
            sx={{
              width: "full",
              height: "40px",
              display: "flex",
              gap: "8px",
              alignItems: "center",
            }}
          >
            <Checkbox
              onChange={(e) => {
                setListen(!listen);
              }}
            />
            <Typography>Үйлчилгээний нөхцөл зөвшөөрөх</Typography>
          </Box>

          <Button
            type="submit"
            variant="contained"
            disabled={!listen}
            style={{
              backgroundColor: "#18BA51",
              width: "379px",
              height: "48px",
            }}
            onClick={handleClicked}
          >
            Бүртгүүлэх
          </Button>
        </Box>
      </Stack>
    </Box>
  );
}
