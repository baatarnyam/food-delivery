import Image from "next/image";
import { Box, Container } from "@mui/material";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

export default function Home() {
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
        {Footer()}
      </Box>
    </Container>
  );
}
