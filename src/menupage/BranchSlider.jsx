import Image1 from "../photoes/branch picture.png";

import { colors } from "../theme";

import { Box, Stack, Typography } from "@mui/material";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./slider.css";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

// import icons
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import WifiCalling3OutlinedIcon from "@mui/icons-material/WifiCalling3Outlined";
import QueryBuilderOutlinedIcon from "@mui/icons-material/QueryBuilderOutlined";

export default function BranchSlider() {
  const images = [
    { url: Image1 }
    // , { url: Image2 }, { url: Image3 }
  ];

  return (
    <Stack bgcolor={colors.white[100]} mb={10}>
      <Box textAlign='center' m='1rem'>
        <Typography variant='h4' component='h4' fontWeight='bold'>
          شعبه اکباتان
        </Typography>
      </Box>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false
        }}
        pagination={{
          clickable: true
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className='mySwiper'>
        {images.map((item, i) => (
          <SwiperSlide key={i}>
            <Box width='100%' position='relative'>
              <img src={Image1} style={{ height: "100%", zIndex: "1" }} />
              <Box
                sx={{
                  position: "relative",
                  background: colors.white[100],
                  height: "130px",
                  width: "810px",
                  margin: "-5rem  auto 0",
                  border: `3px solid ${colors.primary[100]}`,
                  borderRadius: "8px",
                  display: "flex",
                  justifyContent: "space-evenly",
                  alignItems: "center"
                }}>
                <Box>
                  <WifiCalling3OutlinedIcon />
                  <Typography variant='p' component='p'>
                    ۰۲۱-۳۳۵۳۵۳۵۴
                  </Typography>
                  <Typography variant='p' component='p'>
                    ۰۲۱-۳۳۵۳۵۳۵۴
                  </Typography>
                </Box>

                <Box>
                  <LocationOnOutlinedIcon />
                  <Typography variant='p' component='p' m='0 auto' width='60%'>
                    شهرک اکباتان، فاز ۳، مجتمع تجاری کوروش، طبقه سوم
                  </Typography>
                </Box>

                <Box>
                  <QueryBuilderOutlinedIcon/>
                  <Typography variant='p' component='p'>
                    همه‌روزه از ساعت ۱۲ الی ۲۳
                  </Typography>
                </Box>
              </Box>
            </Box>
          </SwiperSlide>
        ))}
      </Swiper>
    </Stack>
  );
}
