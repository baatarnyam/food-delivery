"use client";

import React from "react";
import { Box, Divider, ListItem, Stack, Typography } from "@mui/material";
import Link from "@mui/material/Link";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";

export default function Footer() {
  return (
    <Box
      sx={{
        width: "1400px",
        height: "485px",
        margin: "auto",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <img
        src="./footer.png"
        alt=""
        width="full"
        height="full"
        className="absolute z-0"
      />
      <Stack
        sx={{
          width: "1200px",
          height: "327px",
          position: "absolute",
          zIndex: "10",
          alignItems: "center",
          gap: "40px",
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center", gap: "8px" }}>
          <img src="./logo-white.png" alt="" width={31} height={27} />
          <Typography
            sx={{ color: "white", fontSize: "20px", fontWeight: "700" }}
          >
            Food Delivery
          </Typography>
        </Box>

        <Box
          sx={{
            width: "1200px",
            display: "flex",
            justifyContent: "space-between",
          }}
          // onClick={preventDefault}
        >
          <Link
            href="/home"
            underline="always"
            sx={{ color: "white", fontSize: "16px" }}
          >
            Нүүр
          </Link>
          <Link
            href="#"
            underline="always"
            sx={{ color: "white", fontSize: "16px" }}
          >
            Холбоо барих
          </Link>
          <Link
            href="/menu"
            underline="always"
            sx={{ color: "white", fontSize: "16px" }}
          >
            Хоолны цэс
          </Link>
          <Link
            href="#"
            underline="always"
            sx={{ color: "white", fontSize: "16px" }}
          >
            Үйлчилгээний нөхцөл
          </Link>
          <Link
            href="#"
            underline="always"
            sx={{ color: "white", fontSize: "16px" }}
          >
            Хүргэлтийн бүс
          </Link>
          <Link
            href="#"
            underline="always"
            sx={{ color: "white", fontSize: "16px" }}
          >
            Нууцлалын бодлого
          </Link>
        </Box>

        <Box
          sx={{
            width: "160px",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <FacebookIcon
            sx={{ width: "40px", height: "40px", color: "white" }}
          />
          <InstagramIcon
            sx={{ width: "40px", height: "40px", color: "white" }}
          />
          <TwitterIcon sx={{ width: "40px", height: "40px", color: "white" }} />
        </Box>

        <Divider sx={{ borderColor: "white", width: "1200px" }} />

        <Stack
          sx={{
            width: "319px",
            height: "46px",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Typography
            sx={{ fontSize: "16px", color: "white", fontWeight: "400" }}
          >
            © 2024 Pinecone Foods LLC{" "}
          </Typography>
          <Typography
            sx={{ fontSize: "16px", color: "white", fontWeight: "400" }}
          >
            Зохиогчийн эрх хуулиар хамгаалагдсан.
          </Typography>
        </Stack>
      </Stack>
    </Box>
  );
}
