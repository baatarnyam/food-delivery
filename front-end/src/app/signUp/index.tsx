import React from "react";
import SignUp from "@/components/SignUp";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Box, Container } from "@mui/material";

export default function IndexSingUp() {
  return (
    <Container maxWidth={"xl"} sx={{ maxWidth: "1440px", height: "100vh" }}>
      <Box
        sx={{
          height: "100vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        {Header()}
        {SignUp()}
        {Footer()}
      </Box>
    </Container>
  );
}
