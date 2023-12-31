import { Box,  Typography, Button } from "@mui/material";
import React from "react";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import TrendingUpOutlinedIcon from "@mui/icons-material/TrendingUpOutlined";
import KeyboardArrowLeftOutlinedIcon from "@mui/icons-material/KeyboardArrowLeftOutlined";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";

const data = [
  { icon: PersonOutlineOutlinedIcon, title: "پرسنلی محبوب و حرفه ای" },
  {
    icon: TrendingUpOutlinedIcon,
    title: "کیفیت بالای غذاها"
  },
  {
    icon: HomeOutlinedIcon,
    title: "محیط دلنشنین و ارام"
  },
  {
    icon: MenuBookIcon,
    title: "منوی متنوع"
  }
];

const AboutDescribe = () => {
  return (
    <Box
      position='absolute'
      top='0'
      right='0'
      zIndex='3'
      margin='48px 108px'
      display='flex'>
      <Box width='45%' position='relative' textAlign='justify'>
        <Typography
          variant='h4'
          component='h4'
          fontSize='24'
          fontWeight='700'
          color='#fff'
          mb='20px'>
          رستوران‌های زنجیره‌ای ترخینه
        </Typography>
        <Typography
          variant='body2'
          component='p'
          fontWeight='400'
          fontSize='20px'
          color='#fff'
          lineHeight="2rem">
          مهمان‌نوازی یکی از مهم‌ترین مشخصه‌های ایرانیان است و باعث افتخار ماست
          که بیش از 20 سال است خدمت‌گزار مردم شریف ایران هستیم. ما در
          رستوران‌های زنجیره‌ای ترخینه همواره تلاش کردیم که در محیطی اصیل بر
          پایه معماری و طراحی مدرن در کنار طبیعتی دلنواز، غذایی سالم و درخور شان
          شما عزیزان ارائه دهیم.
        </Typography>
        <Button
          variant='outlined'
          color='inherit'
          sx={{ color: "#fff", position: "absolute", left: "0" }}>
          اطلاعات بیشتر
        </Button>
      </Box>

      <Box
      top='3'
        left='0'
        position='absolute'
        sx={{
          display: "grid",
          gridTemplateColumns: "repeat(2, 1fr)",
          gridTemplateRows: "repeat(2, 1fr)",
          gridColumnGap: "5px",
          gridRowGap: "5px"
        }}
        width='30%'>
        {data.map((icon,i) => (
          <Box
          key={i}
            display='flex'
            flexDirection='column'
            justifyContent='center'
            alignContent='center'
            m={1}
            mr='2rem'>
            <icon.icon
              sx={{
                color: "white",
                width: "50px",
                height: "50px",
                margin: "auto"
              }}
            />
            <Typography variant='p' component='p' color='#fff' fontSize="10px" textAlign='center'>
              {icon.title}
            </Typography>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default AboutDescribe;
