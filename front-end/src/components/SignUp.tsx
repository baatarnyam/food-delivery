"use client";

import * as React from "react";

import {
  Box,
  InputBase,
  TextField,
  Typography,
  FormControl,
} from "@mui/material";
import Input from "./Input";
import Password from "./Password";
import PhoneNumber from "./PhoneNumber";
import Buttons from "./Buttons";
import Button from "@mui/material/Button";

export default function SignUp() {
  return (
    <Box
      sx={{
        width: "448px",
        height: "722px",
        border: "solid",
        borderRadius: "16px",
        padding: "32px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "48px",
      }}
    >
      <Typography sx={{ fontSize: "28px", fontWeight: "700" }}>
        Бүртгүүлэх
      </Typography>

      <FormControl
        sx={{
          width: "384px",
          height: "fit",
          display: "flex",
          flexDirection: "column",
          gap: "16px",
        }}
      >
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
          <Input placeholder="Нэрээ оруулна уу" type="text" />
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
          <Input placeholder="И-мэйл хаягаа оруулна уу" type="email" />
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
          <PhoneNumber />
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
          <Password placeholder="Нууц үгээ оруулна уу" />
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
          <Password placeholder="Нууц үгээ оруулна уу" />
        </Box>

        <Box
          sx={{
            width: "383px",
            height: "120px",
            marginTop: "25px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            border: "solid",
          }}
        >
          <Box sx={{ width: "full", height: "40px", display: "flex" }}>
            *<Typography>Үйлчилгээний нөхцөл зөвшөөрөх</Typography>
          </Box>
          {/* <Buttons
            width="380px"
            height="48px"
            bgColor="#18BA51"
            text="Бүртгүүлэх"
          /> */}
          {/* <Button variant="outlined" sx={{ backgroundColor: "red" }}>
            Бүртгүүлэх
          </Button> */}

          <Buttons
            width="380px"
            height="48px"
            text="Бүртгүүлэх"
            bgColor="#18BA51"
          />
        </Box>
      </FormControl>
    </Box>
  );
}
