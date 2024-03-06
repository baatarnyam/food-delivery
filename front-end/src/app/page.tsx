import SignUp from "@/components/SignUp";
import { Box, Container } from "@mui/material";

export default function Home() {
  return (
    <Container
      maxWidth={"xl"}
      sx={{
        maxWidth: "1440px",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <SignUp />
    </Container>
  );
}
