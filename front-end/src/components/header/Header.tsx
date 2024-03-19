'use client'

import  { useState } from "react";
import { Box, Button } from "@mui/material";
import HeaderRight from "./HeaderRight";
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";




export default function Header() {
  // const [color, sestColor] = useState(false)
  const {push} = useRouter()
  const pathname = usePathname()

  const handleHome = () => {
    push("/home")
  }

  const handleMenu = () => {
    push("/menu")
  }
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
        onClick={handleHome}
          sx={{
            fontSize: "14px",
            fontWeight: "700",
            width: "74px",
            height: "40px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            color: `${pathname === "/home" ? "#18BA51" : "black"}`,
          }}
          variant="text"
          
        >
          НҮҮР
        </Button>

        <Button
        onClick={handleMenu}
          sx={{
            fontSize: "14px",
            fontWeight: "700",
            width: "134px",
            height: "40px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            color: `${pathname === "/menu" ? "#18BA51" : "black"}`,
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
