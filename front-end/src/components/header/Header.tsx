import React from "react";

import { Box, Button } from "@mui/material";
import HeaderRight from "./HeaderRight";

export default function Header() {
  return (
    <Box
      sx={{
        width: "1258px",
        height: "57px",
        paddingInline: "24px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        margin: "auto",
      }}
    >
      <Box
        sx={{
          width: "453px",
          height: "41px",
          display: "flex",
          gap: "24px",
          alignItems: "center",
        }}
      >
        <img src="/Logo.png" width={41} height={41} />
        <Button
          sx={{
            fontSize: "14px",
            fontWeight: "700",
            width: "74px",
            height: "40px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            color: "black",
          }}
          variant="text"
        >
          НҮҮР
        </Button>

        <Button
          sx={{
            fontSize: "14px",
            fontWeight: "700",
            width: "134px",
            height: "40px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            color: "black",
          }}
        >
          ХООЛНЫ ЦЭС
        </Button>

        <Button
          sx={{
            fontSize: "14px",
            fontWeight: "700",
            width: "164px",
            height: "40px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            color: "black",
          }}
        >
          ХҮРГЭЛТИЙН БҮС
        </Button>
      </Box>
      <HeaderRight />
    </Box>
  );
}
