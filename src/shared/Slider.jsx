import Image1 from "../photoes/Slider.png";
import Image2 from "../photoes/Slider.png";
import Image3 from "../photoes/Slider.png";
import { colors } from "../theme";

import { Box, Button, Typography } from "@mui/material";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./slider.css";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

export default function App() {
  const images = [{ url: Image1 }, { url: Image2 }, { url: Image3 }];

  return (
    <>
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
            <Box position='relative' width='100%'>
              <img src={Image2} style={{ height: "100%" }} />
              <Box
                style={{
                  background:
                    "linear-gradient(0deg, rgba(0, 0, 0, 0.55) 0%, rgba(0, 0, 0, 0.55) 100%), linear-gradient(0deg, rgba(33, 64, 43, 0.50) 0%, rgba(33, 64, 43, 0.50) 100%), url(<path-to-image>), lightgray 50% / cover no-repeat",
                  position: "absolute",
                  height: "100%",
                  width: "500%",
                  zIndex: "1",
                  top: "0",
                  opacity: "45%"
                }}
              />
            </Box>

            <Box position='absolute' zIndex='2'>
              <Typography variant='h2' component='p' color={colors.white[100]}>
                تجربه غذای سالم و گیاهی به سبک ترخینه
              </Typography>
              <Button
                variant='contained'
                width='40px'
                color='primary'
                sx={{
                  backgroundColor: colors.primary[100],
                  fontSize: "15px",
                  mt: "3rem"
                }}>  
                سفارش انلاین غذا
              </Button>  
            </Box>  
          </SwiperSlide>  
        ))}  
      </Swiper>  
    </>    
  );
}  

