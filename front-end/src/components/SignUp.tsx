"use client";

import * as React from "react";
import { Box, Typography } from "@mui/material";
import Input from "./Input";
import Password from "./Password";
import Button from "@mui/material/Button";
import Checkbox from "@mui/material/Checkbox";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";

export default function SignUp() {
  const [listen, setListen] = useState(false);
  const [inputCheck, setInputCheck] = useState(false);
  const [userData, setUserData] = useState<{
    password: string;
    RePassword: string;
  }>({ password: "", RePassword: "" });
  const [error, setError] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setUserData({
      ...userData,
      [name]: value,
    });
    console.log(userData);
  };

  const handleCheck = () => {
    useEffect(() => {}, [inputCheck]);
  };

  const router = useRouter();

  const handleClicked = async (e: any) => {
    e.preventDefault();
    if (userData.password !== userData.RePassword) {
      setError("Password and Re-Password does not match");
      return;
    }

    try {
      await axios
        .post("http://localhost:8000/signUp", userData)
        .then((response) => {
          // console.log(response.data);

          if (response.data !== "User already existed") {
            router.push("/login");
          }
        });
    } catch (error: any) {
      setError(error.response.data);
    }
    // setChecked(checked);
    // console.log("clicked");
  };

  return (
    <Box
      sx={{
        width: "448px",
        height: "700px",
        borderRadius: "16px",
        padding: "32px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "40px",
        margin: "auto",
        marginBottom: "80px",
        marginTop: "75px",
      }}
    >
      <Typography sx={{ fontSize: "28px", fontWeight: "700" }}>
        Бүртгүүлэх
      </Typography>

      <form
        style={{
          width: "384px",
          height: "fit",
          display: "flex",
          flexDirection: "column",
          gap: "16px",
        }}
        onSubmit={handleClicked}
        action=""
      >
        <Box
          sx={{
            width: "full",
            height: "69px",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Typography sx={{ fontSize: "14px", fontWeight: "400" }}>
            Нэр
          </Typography>
          <Input
            placeholder="Нэрээ оруулна уу"
            type="text"
            height="42px"
            name="name"
            onChange={handleChange}
          />
        </Box>

        <Box
          sx={{
            width: "full",
            height: "69px",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Typography sx={{ fontSize: "14px", fontWeight: "400" }}>
            И-мэйл
          </Typography>
          <Input
            placeholder="И-мэйл хаягаа оруулна уу"
            type="email"
            height="42px"
            name="email"
            onChange={handleChange}
          />
        </Box>

        <Box
          sx={{
            width: "full",
            height: "69px",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Typography sx={{ fontSize: "14px", fontWeight: "400" }}>
            Утас
          </Typography>
          <Input
            type="number"
            height="42px"
            placeholder="Утасны дугаараа оруулна уу"
            name="phone"
            onChange={handleChange}
          />
        </Box>

        <Box
          sx={{
            width: "full",
            height: "69px",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Typography sx={{ fontSize: "14px", fontWeight: "400" }}>
            Нууц үг
          </Typography>
          <Password
            placeholder="Нууц үгээ оруулна уу"
            name="password"
            onChange={handleChange}
          />
        </Box>

        <Box
          sx={{
            width: "full",
            height: "69px",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Typography sx={{ fontSize: "14px", fontWeight: "400" }}>
            Нууц үг давтах
          </Typography>
          <Password
            placeholder="Нууц үгээ оруулна уу"
            name="RePassword"
            onChange={handleChange}
          />
        </Box>

        {error && (
          <Typography sx={{ color: "red", fontSize: "12px" }}>
            {error}
          </Typography>
        )}

        <Box
          sx={{
            width: "383px",
            height: "120px",
            marginTop: "25px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <Box
            sx={{
              width: "full",
              height: "40px",
              display: "flex",
              gap: "8px",
              alignItems: "center",
            }}
          >
            <Checkbox
              onChange={(e) => {
                setListen(!listen);
              }}
            />
            <Typography>Үйлчилгээний нөхцөл зөвшөөрөх</Typography>
          </Box>

          <Button
            type="submit"
            variant="contained"
            disabled={!listen}
            style={{
              backgroundColor: "#18BA51",
              width: "379px",
              height: "48px",
            }}
            // onClick={handleClicked}
          >
            Бүртгүүлэх
          </Button>
        </Box>
      </form>
    </Box>
  );
}

// "use client";

// import React, { ChangeEvent, useState } from "react";
// import Stack from "@mui/material/Stack";
// import { TextField, Box, Button, Checkbox, Typography } from "@mui/material";

// const signupField = [
//   { name: "name", placeholder: "Нэрээ оруулна уу" },
//   { name: "email", placeholder: "И-мэйл хаягаа оруулна уу" },
//   { name: "phone", placeholder: "Утасны дугаараа оруулна уу" },
//   { name: "password", placeholder: "Нууц үгээ оруулна уу" },
//   { name: "RePassword", placeholder: "Нууц үг давтах" },
// ];

// export default function SignUp() {
//   const [userData, setUserData] = useState({});
//   const [listen, setListen] = useState(false);

//   const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
//     const { name, value } = event.target;

//     setUserData({ ...userData, [name]: value });
//   };

//   return (
//     <Stack
//       sx={{
//         width: "448px",
//         height: "700px",
//         border: "solid",
//         borderRadius: "16px",
//         padding: "32px",
//         display: "flex",
//         flexDirection: "column",
//         alignItems: "center",
//         gap: "40px",
//         margin: "auto",
//         marginBottom: "80px",
//         marginTop: "75px",
//       }}
//     >
//       <form>
//         {signupField.map(({ name, placeholder }, index) => (
//           // <input
//           //   type="text"
//           //   key={index}
//           //   name={name}
//           //   placeholder={placeholder}
//           //   onChange={handleChange}
//           // />

//           <TextField
//             sx={{
//               width: "380px",
//               height: "full",
//               bgcolor: "#ECEDF0",
//               borderRadius: "4px",
//             }}
//             type="text"
//             key={index}
//             name={name}
//             placeholder={placeholder}
//             onChange={handleChange}
//           />
//         ))}
//         <Box
//           sx={{
//             width: "383px",
//             height: "120px",
//             marginTop: "25px",
//             display: "flex",
//             flexDirection: "column",
//             justifyContent: "space-between",
//           }}
//         >
//           <Box
//             sx={{
//               width: "full",
//               height: "40px",
//               display: "flex",
//               gap: "8px",
//               alignItems: "center",
//             }}
//           >
//             <Checkbox
//               onChange={(e) => {
//                 setListen(!listen);
//               }}
//             />
//             <Typography>Үйлчилгээний нөхцөл зөвшөөрөх</Typography>
//           </Box>

//           <Button
//             type="submit"
//             variant="contained"
//             disabled={!listen}
//             style={{
//               backgroundColor: "#18BA51",
//               width: "379px",
//               height: "48px",
//             }}
//             // onClick={handleClicked}
//           >
//             Бүртгүүлэх
//           </Button>
//         </Box>
//       </form>
//     </Stack>
//   );
// }
