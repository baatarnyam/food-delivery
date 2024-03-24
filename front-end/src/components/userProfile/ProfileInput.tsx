import React from "react";
import {
  Paper,
  IconButton,
  Stack,
  InputBase,
  Box,
  TextField,
  Typography,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import ForwardToInboxIcon from "@mui/icons-material/ForwardToInbox";

type InputTypes = {
  name: string;
  value: string;
  label: string;
  //   setEdit: React.Dispatch<React.SetStateAction<boolean>>;
  //   edit: boolean;
  //   onchange: (even: React.ChangeEvent<HTMLInputElement>) => void;
};

export default function ProfileInput(props: InputTypes) {
  const { name, label, value } = props;
  return (
    // <Paper
    //   variant="outlined"
    // sx={{
    //   p: "2px 4px",
    //   display: "flex",
    //   alignItems: "center",
    //   width: 350,
    //   backgroundColor: "#F6F6F6",
    //   justifyContent: "space-between",
    // }}
    // >
    //   <div style={{ display: "flex" }}>
    //     <IconButton
    //       sx={{ p: "10px", backgroundColor: "white" }}
    //       aria-label="menu"
    //     >
    //       <PersonOutlineIcon />
    //     </IconButton>
    //     <Stack sx={{ ml: 1 }}>
    //       <Stack sx={{ fontSize: "12px", color: "gray" }}>{placeholder}</Stack>
    //       <InputBase
    //         sx={{ flex: 1 }}
    //         defaultValue={value}
    //         // readOnly={!edit}
    //         name={name}
    //         // onChange={onchange}
    //       />
    //     </Stack>
    //   </div>

    //   <IconButton
    //     type="button"
    //     sx={{ p: "10px", color: "green" }}
    //     aria-label="search"
    //     // onClick={handleEdit}
    //   >
    //     <EditIcon />
    //   </IconButton>
    // </Paper>
    <Stack
      sx={{
        width: "392px",
        height: "55px",
        paddingY: "20px",
        paddingX: "8px",
        borderRadius: "4px",
        alignItems: "center",
        backgroundColor: "#F6F6F6",
        justifyContent: "space-between",
      }}
      direction="row"
    >
      <Typography
        sx={{
          width: "40px",
          height: "40px",
          bgcolor: "white",
          display: "flex",
          border: "solid 1px",
          borderColor: "#EEEFF2",
          borderRadius: "100%",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {label === "Таны нэр" ? (
          <PersonOutlineIcon />
        ) : label === "Утасны дугаар" ? (
          <LocalPhoneIcon />
        ) : (
          <ForwardToInboxIcon />
        )}
      </Typography>

      <Box
        component="form"
        sx={{
          "& > :not(style)": { m: 1, width: "25ch" },
        }}
        noValidate
        autoComplete="off"
      >
        <TextField
          id="outlined-basic"
          label={label}
          sx={{ borderBlock: "" }}
          variant="standard"
        />
      </Box>

      <EditIcon sx={{ width: "18px", height: "18px", color: "#18BA51" }} />
    </Stack>
  );
}
