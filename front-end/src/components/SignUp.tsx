"use client";

import * as React from "react";
import { Box, TextField, Typography, FormControl } from "@mui/material";
import Input from "./Input";
import Password from "./Password";
import PhoneNumber from "./PhoneNumber";
import Button from "@mui/material/Button";
import Checkbox from "@mui/material/Checkbox";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import { useFormControl } from "@mui/material/FormControl";

export default function SignUp() {
  const label = { inputProps: { "aria-label": "Checkbox demo" } };
  const [listen, setListen] = useState(false);
  const [checked, setChecked] = useState(false);

  const handleClicked = () => {
    setChecked(checked);
    console.log("clicked");
  };

  return (
    <Box
      sx={{
        width: "448px",
        height: "700px",
        border: "solid",
        borderRadius: "16px",
        padding: "32px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "40px",
        margin: "auto",
      }}
    >
      <Typography sx={{ fontSize: "28px", fontWeight: "700" }}>
        Бүртгүүлэх
      </Typography>

      <form
        style={{
          width: "384px",
          height: "fit",
          display: "flex",
          flexDirection: "column",
          gap: "16px",
        }}
        onSubmit={handleClicked}
        action=""
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
          <Input
            placeholder="Нэрээ оруулна уу"
            type="text"
            height="42px"
            name="name"
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
          <PhoneNumber name="phone" />
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
          <Password placeholder="Нууц үгээ оруулна уу" name="password" />
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
          <Password placeholder="Нууц үгээ оруулна уу" name="RePassword" />
        </Box>

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
              {...label}
              onChange={(e) => {
                // console.log(e.target.checked);
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
            // onClick={handleClicked}
          >
            Бүртгүүлэх
          </Button>
        </Box>
      </form>
    </Box>
  );
}
