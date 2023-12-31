import { Box, Button, Stack } from "@mui/material";
import React from "react";
import { colors } from "../theme";

const RestaurantMenu = ({ image, title }) => {
  return (
    <Stack
      width='500px'
      height='260px'
      p={2}
      display='flex'
      flexDirection='column'
      position='relative'>
      <Box height='50%' width='100%' />
      <Box
        sx={{ backgroundColor: colors.primary[100], borderRadius: "8px" }}
        height='50%'
        width='100%'></Box>
      <img
        src={image}
        alt={title}
        style={{
          position: "absolute",
          top: "1rem",
          margin: "0px 10%",
          width: "200px",
          height: "200px"
        }}
      />
      <Button
        sx={{
          width: "155px",
          height: "48px",
          m: "auto",
          top: "-2rem",
          backgroundColor: colors.white[100],
          border: `1px solid ${colors.primary[100]}`,

          fontFamily: "Estedad-VF",
          fontSize: "16px",
          fontStyle: "normal",
          lineHeight: "180%",

          "&:hover": { backgroundColor: colors.white[100] }
        }}>
        {title}
      </Button>
    </Stack>
  );
};

export default RestaurantMenu;
