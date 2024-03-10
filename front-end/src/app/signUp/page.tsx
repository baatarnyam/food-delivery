import React from "react";
import SignUp from "@/components/SignUp";

import { Box, Container } from "@mui/material";

export default function signUpPage() {
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
        <SignUp />
      </Box>
    </Container>
  );
}
signUpPage();
