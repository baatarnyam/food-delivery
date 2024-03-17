import { Box, Stack, Typography } from "@mui/material";
import React from "react";
import ScheduleIcon from "@mui/icons-material/Schedule";
import ImportContactsIcon from "@mui/icons-material/ImportContacts";
import SoupKitchenIcon from "@mui/icons-material/SoupKitchen";

const data = [
  {
    icon: <ImportContactsIcon />,
    title: "Хүргэлтийн төлөв хянах",
    text: "Захиалга бэлтгэлийн явцыг хянах",
  },
  {
    icon: <ScheduleIcon />,
    title: "Шуурхай хүргэлт",
    text: "Захиалга бэлтгэлийн явцыг хянах",
  },
  {
    icon: <SoupKitchenIcon />,
    title: "Эрүүл, баталгаат орц",
    text: "Захиалга бэлтгэлийн явцыг хянах",
  },
  {
    icon: <ImportContactsIcon />,
    title: "Хоолны өргөн сонголт",
    text: "Захиалга бэлтгэлийн явцыг хянах",
  },
];

export default function FoodController() {
  return (
    <Stack
      sx={{
        width: "1200px",
        height: "155px",
        justifyContent: "space-between",
      }}
      direction="row"
    >
      {data.map(({ icon, title, text }, index) => (
        <Stack
          sx={{
            width: "265px",
            height: "155px",
            padding: "16px",
            gap: "15px",
            boxShadow: 2,
            borderRadius: "16px",
          }}
          key={index}
        >
          <Typography sx={{ color: "green" }}>{icon}</Typography>

          <Typography
            sx={{ fontSize: "18px", fontWeight: "700", color: "#272727" }}
          >
            {title}
          </Typography>
          <Typography
            sx={{ fontSize: "14px", fontWeight: "400", color: "#272727" }}
          >
            {text}
          </Typography>
        </Stack>
      ))}
    </Stack>
  );
}
