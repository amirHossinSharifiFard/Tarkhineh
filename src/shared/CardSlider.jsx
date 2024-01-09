/* eslint-disable react/prop-types */
import { Swiper, SwiperSlide } from "swiper/react";

import Cards from "./Cards";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./slider.css";

// import required modules
import { Autoplay, Pagination } from "swiper/modules";
import { Stack } from "@mui/material";
const CardSlider = ({data}) => {
  const image =data
  return (
    <Swiper
      slidesPerView={4}
      centeredSlides={true}
      spaceBetween={30}
      pagination={{
        clickable: true
      }}
      modules={[Pagination, Autoplay]}
      className='mySwiper'>
      <Stack display='flex' flexDirection='row' gap={3}>
        {image &&
          image.map((item, i) => (
            <SwiperSlide key={i}>
              <Cards imgSrc={item.url} title={item.title} price={item.price} />
            </SwiperSlide>
          ))}
      </Stack>
    </Swiper>
  );
};

export default CardSlider;
