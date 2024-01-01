import Image1 from "../photoes/Slider.png";
import Image2 from "../photoes/Slider.png";
import Image3 from "../photoes/Slider.png";
import { colors } from "../theme";

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

import { Box, Button, Typography } from "@mui/material";

// const Slider = () => {
//   return (
//     <Swiper
//       // install Swiper modules
//       modules={[Navigation, Pagination, Scrollbar, A11y]}
//       spaceBetween={50}
//       slidesPerView={3}
//       navigation
//       pagination={{ clickable: true }}
//       scrollbar={{ draggable: true }}
//       onSwiper={(swiper) => console.log(swiper)}
//       onSlideChange={() => console.log("slide change")}>
//       <SwiperSlide>
//         <Box position='relative' width="100%">
//           <img src={Image1} style={{height:"100%"}}/>
//           <Box
//             style={{
//               background: "linear-gradient(0deg, rgba(0, 0, 0, 0.55) 0%, rgba(0, 0, 0, 0.55) 100%), linear-gradient(0deg, rgba(33, 64, 43, 0.50) 0%, rgba(33, 64, 43, 0.50) 100%), url(<path-to-image>), lightgray 50% / cover no-repeat",
//               position: "absolute",
//               height: "98%",
//               width: "500%",
//               zIndex: "40",
//               top: "0"
//               ,opacity:"45%"
//             }}
//           ></Box>
//         </Box>
//       </SwiperSlide> <SwiperSlide>
//         <Box position='relative' width="100%">
//           <img src={Image1} style={{height:"100%"}}/>
//           <Box
//             style={{
//               background: "linear-gradient(0deg, rgba(0, 0, 0, 0.55) 0%, rgba(0, 0, 0, 0.55) 100%), linear-gradient(0deg, rgba(33, 64, 43, 0.50) 0%, rgba(33, 64, 43, 0.50) 100%), url(<path-to-image>), lightgray 50% / cover no-repeat",
//               position: "absolute",
//               height: "98%",
//               width: "500%",
//               zIndex: "40",
//               top: "0"
//               ,opacity:"45%"
//             }}
//           ></Box>
//         </Box>
//       </SwiperSlide>
//     </Swiper>
//   );
// };
// export default Slider;
// const Slider = () => {

//   return (
//     <Container>
//       <Swiper
//       spaceBetween={50}
//       slidesPerView={3}
//       onSlideChange={() => console.log('slide change')}
//       onSwiper={(swiper) => console.log(swiper)}
//     >

//     </Swiper>
//     </Container>
//   );

//   return (
// <Grid container position='relative'>
//   <Grid
//     item
//     zIndex='30'
//     position='absolute'
//     display='flex'
//     flexDirection='column'
//     textAlign='center'
//     margin='138px 268px 0'>

//     </Box>
//   </Grid>

//       <SimpleImageSlider
//         width={1150}
//         height={336}
//         images={images}
//         showBullets={true}
//         loop={true}
//         autoPlay={true}
//         autoPlayDelay={2}
//         showNavs={true}
//       />
//     </Grid>
//   );
// };

// export default Slider;
