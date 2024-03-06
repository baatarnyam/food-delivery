import React from "react";
import { InputBase } from "@mui/material";

export default function Input(props: any) {
  const { placeholder, type } = props;
  return (
    <InputBase
      sx={{
        width: "380px",
        height: "48px",
        bgcolor: "#ECEDF0",
        borderRadius: "4px",
        paddingInline: "8px",
      }}
      type={type}
      placeholder={placeholder}
      //   placeholder="Нэрээ оруулна уу"
    />
  );
}
