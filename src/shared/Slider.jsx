import React from "react";
import SimpleImageSlider from "react-simple-image-slider";
import Image1 from "../photoes/Slider.png";
import Image2 from "../photoes/Slider.png";
import Image3 from "../photoes/Slider.png";
import { Button, Grid, Typography, Box } from "@mui/material";
import { colors } from "../theme";

const Slider = () => {
  const images = [{ url: Image1 }, { url: Image2 }, { url: Image3 }];

  return (
    <Grid container position='relative'>
      <Grid
        item
        zIndex='30'
        position='absolute'
        display='flex'
        flexDirection='column'
        textAlign='center'
        margin='138px 268px 0'>
        <Typography variant='h2' component='p' color={colors.white[100]}>
          تجربه غذای سالم و گیاهی به سبک ترخینه
        </Typography>
        <Box mt='40px'>
          <Button
            variant='contained'
            width='40px'
            color='primary'
            style={{ backgroundColor: colors.primary[100], fontSize: "15px" }}>
            سفارش انلاین غذا
          </Button>
        </Box>
      </Grid>

      <SimpleImageSlider
        width={1150}
        height={336}
        images={images}
        showBullets={true}
        loop={true}
        autoPlay={true}
        autoPlayDelay={2}
        showNavs={true}
      />
    </Grid>
  );
};

export default Slider;
