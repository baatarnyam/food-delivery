"use client";

import { Box, Button, Stack, Typography } from "@mui/material";
import Input from "./Input";
import Password from "./Password";
import axios from "axios";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function Login() {
  const [userData, setUserData] = useState({});
  const [loginError, setLoginError] = useState();
  const [disabled, setDisabled] = useState(true);

  const handleChange = (e: any) => {
    const { name, value } = e.target;

    setUserData({
      ...userData,
      [name]: value,
    });
    console.log(userData);

    // useEffect(() => {
    //   if (userData.email == "" && userData.password == "") {
    //     setDisabled(true);
    //   } else {
    //     false;
    //   }
    // }, [e.target]);
  };
  const router = useRouter();

  const handleClicked = async (e: any) => {
    e.preventDefault();

    try {
      const { data } = await axios.post(
        "http://localhost:8000/login",
        userData
      );

      localStorage.setItem("Token", data.token);

      router.push("/");
    } catch (error: any) {
      setLoginError(error.response.data);
    }
  };

  return (
    <Stack
      sx={{
        width: "448px",
        height: "550px",
        margin: "auto",
        padding: "32px",
        alignItems: "center",
        gap: "48px",
        marginTop: "111px",
        marginBottom: "75px",
      }}
    >
      <Typography
        sx={{ fontSize: "28px", fontWeight: "700", color: "#0D1118" }}
      >
        Нэвтрэх
      </Typography>
      <Input
        name="email"
        placeholder="И-мэйл хаягаа оруулна уу"
        type="email"
        height="42px"
        onChange={handleChange}
      />

      <Stack sx={{ alignItems: "end" }}>
        <Password
          name="password"
          placeholder="Нууц үгээ оруулна уу"
          onChange={handleChange}
        />

        {loginError && (
          <Typography sx={{ color: "red", fontSize: "12px" }}>
            {loginError}
          </Typography>
        )}

        <Link href={"./forgetPassword"}>
          <Button variant="text" sx={{ fontSize: "14px" }}>
            Нууц үг сэргээх
          </Button>
        </Link>
      </Stack>

      <Button
        // type="submit"
        variant="contained"
        style={{
          backgroundColor: "#18BA51",
          width: "379px",
          height: "45px",
        }}
        onClick={handleClicked}
        disabled={disabled ? true : false}
      >
        Нэвтрэх
      </Button>

      <Typography>Эсвэл</Typography>
      <Link href={`/signUp`}>
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
      </Link>
    </Stack>
  );
}
