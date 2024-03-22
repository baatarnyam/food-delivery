"use client";

import React from "react";
import {
  Box,
  Typography,
  Paper,
  InputBase,
  IconButton,
  Button,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import { useContext } from "react";
import { SearchContext } from "../provider/SearchProvider";
import { useRouter } from "next/navigation";
import { UserContext } from "../provider/UserProvider";

export default function HeaderRight() {
  const { search, setSearch } = useContext(SearchContext);
  const { isLogin } = useContext(UserContext);
  const { push } = useRouter();

  const handlerSearch = () => {
    if (search === "") {
      push("/home");
    } else {
      push(`/search?id=${search}`);
    }
  };

  const handleClick = () => {
    if (!isLogin) {
      push("/login");
    } else {
      console.log("user profile");
    }
  };

  return (
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
          onClick={handlerSearch}
        >
          <SearchIcon />
        </IconButton>
        <InputBase
          sx={{ ml: 1, flex: 1 }}
          placeholder="Хайх"
          onChange={(e) => setSearch(e.target.value)}
        />
      </Paper>
      <Button
        sx={{
          width: "102px",
          height: "40px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "8px",
        }}
      >
        <ShoppingBasketIcon
          sx={{ width: "24px", height: "24px", color: "black" }}
        />
        <Typography
          sx={{ fontSize: "14px", fontWeight: "700", color: "black" }}
        >
          Сагс
        </Typography>
      </Button>

      {isLogin ? (
        <Button
          sx={{
            width: "102px",
            height: "40px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "8px",
            color: "black",
          }}
          onClick={handleClick}
          // onChange={(e) => setSearch(e.target.value)}
        >
          <PersonOutlineIcon
            sx={{ width: "24px", height: "24px", color: "#18BA51" }}
          />
          <Typography
            sx={{ fontSize: "14px", fontWeight: "700", color: "#18BA51" }}
          >
            Хэрэглэгч
          </Typography>
        </Button>
      ) : (
        <Button
          sx={{
            width: "102px",
            height: "40px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "8px",
            color: "black",
          }}
          onClick={handleClick}
        >
          <PersonOutlineIcon sx={{ width: "24px", height: "24px" }} />
          <Typography sx={{ fontSize: "14px", fontWeight: "700" }}>
            Нэвтрэх
          </Typography>
        </Button>
      )}
    </Box>
  );
}
