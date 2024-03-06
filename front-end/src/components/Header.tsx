import React from "react";

import {
  Box,
  Input,
  TextField,
  Typography,
  Paper,
  InputBase,
  IconButton,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";

export default function Header() {
  return (
    <Box
      sx={{
        width: "1258px",
        height: "57px",
        border: "solid",
        paddingInline: "24px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
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
        <Typography
          sx={{
            fontSize: "14px",
            fontWeight: "700",
            width: "74px",
            height: "40px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          НҮҮР
        </Typography>

        <Typography
          sx={{
            fontSize: "14px",
            fontWeight: "700",
            width: "134px",
            height: "40px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          ХООЛНЫ ЦЭС
        </Typography>

        <Typography
          sx={{
            fontSize: "14px",
            fontWeight: "700",
            width: "164px",
            height: "40px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          ХҮРГЭЛТИЙН БҮС
        </Typography>
      </Box>

      <Box
        sx={{
          width: "502px",
          height: "41px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          //   border: "solid",
        }}
      >
        <Paper
          component="form"
          sx={{
            p: "2px 4px",
            display: "flex",
            alignItems: "center",
            width: 260,
            height: 39,
            border: "solid",
          }}
        >
          <IconButton
            type="button"
            sx={{ p: "5px", width: "24px", height: "24px", fontWeight: "800" }}
            aria-label="search"
          >
            <SearchIcon />
          </IconButton>
          <InputBase
            sx={{ ml: 1, flex: 1 }}
            placeholder="Хайх"
            //   inputProps={{ "aria-label": "search google maps" }}
          />
        </Paper>

        <Box
          sx={{
            width: "102px",
            height: "40px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "8px",
          }}
        >
          <ShoppingBasketIcon sx={{ width: "24px", height: "24px" }} />
          <Typography sx={{ fontSize: "14px", fontWeight: "700" }}>
            Сагс
          </Typography>
        </Box>

        <Box
          sx={{
            width: "102px",
            height: "40px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "8px",
          }}
        >
          <PersonOutlineIcon sx={{ width: "24px", height: "24px" }} />
          <Typography sx={{ fontSize: "14px", fontWeight: "700" }}>
            Нэвтрэх
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}
