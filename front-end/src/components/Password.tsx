"use client";

import * as React from "react";
import {
  FormControl,
  OutlinedInput,
  InputAdornment,
  IconButton,
} from "@mui/material";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { useState } from "react";

export default function Password(props: any) {
  const { placeholder, height, name, onChange } = props;
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);
  return (
    <FormControl sx={{ width: "380px", bgcolor: "#F7F7F8" }}>
      <OutlinedInput
        name={name}
        onChange={onChange}
        placeholder={placeholder}
        type={showPassword ? "text" : "password"}
        endAdornment={
          <IconButton
            aria-label="toggle password visibility"
            onClick={handleClickShowPassword}
            edge="end"
          >
            {showPassword ? <VisibilityOff /> : <Visibility />}
          </IconButton>
        }
        sx={{ height: "40px" }}
      />
    </FormControl>
  );
}
