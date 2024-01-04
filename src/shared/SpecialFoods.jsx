import { Box, Typography } from "@mui/material";
import CardSlider from "./CardSlider";

// eslint-disable-next-line react/prop-types
const SpecialFoods = ({ bgColor,title }) => {
  return (
    <Box sx={{ backgroundColor: bgColor }} p="4rem 0">
      <Typography variant='h4' component='h4' m="0 4rem 2rem 0" fontWeight='bold'>
        {title}
      </Typography>
      <Box display="flex" gap={4} overflow="hidden">

      <CardSlider/>
      </Box>
    </Box>
  );
};

export default SpecialFoods;
