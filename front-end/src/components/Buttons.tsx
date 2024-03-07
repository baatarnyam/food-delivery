import * as React from "react";
// import Button from "@mui/material/Button";
import { Box, Button } from "@mui/material";

export default function Buttons(props: any) {
  const { width, height, bgColor, text } = props;
  return (
    // <Button
    //   variant="contained"
    //   sx={{ width: width, height: height, backgroundColor: bgColor }}
    //   //   color={bgColor}
    // >
    //   {text}
    // </Button>

    <button className={`w-[${width}], h-[${height}], bg-[${bgColor}]`}>
      {text}
    </button>
  );
}
