import { Box, Stack, Typography } from "@mui/material";
import React from "react";
import Input from "./Input";
import Button from "@mui/material/Button";

export default function ForgetPassword() {
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
          border: "solid",
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
        >
          Үргэлжлүүлэх
        </Button>
      </Stack>
    </Box>
  );
}
