import { Box, Button, Typography } from "@mui/material";
import CardSlider from "./CardSlider";

// eslint-disable-next-line react/prop-types
const SpecialFoods = ({ bgColor, title, titleColor, data }) => {
  return (
    <Box sx={{ backgroundColor: bgColor }} p='4rem 0'>
      <Typography
        variant='h4'
        component='h4'
        m='0 4rem 2rem 0'
        fontWeight='bold'
        color={titleColor}>
        {title}
      </Typography>
      <Box display='flex' gap={4} overflow='hidden'>
        <CardSlider data={data} />
        {console.log(data)}
      </Box>

      {title === "غذاهای غیر ایرانی" && (
        <Box textAlign='center' mt='3rem'>
          <Button variant='outlined' sx={{}}>
            مشاهده ی منوی کامل
          </Button>
        </Box>
      )}
    </Box>
  );
};

export default SpecialFoods;
