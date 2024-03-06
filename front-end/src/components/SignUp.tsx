import React from "react";
import { Box, InputBase, TextField, Typography } from "@mui/material";
import Input from "./Input";

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

      <Box
        sx={{
          width: "384px",
          height: "409px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
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
          <Input placeholder="Та утсаа оруулна уу" type="number" />
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
          <Input placeholder="Нууц үгээ оруулна уу" type="password" />
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
          <Input placeholder="Нууц үгээ оруулна уу" type="password" />
        </Box>
      </Box>
    </Box>
  );
}
