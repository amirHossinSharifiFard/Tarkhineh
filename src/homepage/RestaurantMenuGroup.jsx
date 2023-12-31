import React from "react";
import { Grid, Typography } from "@mui/material";
import RestaurantMenu from "../shared/RestaurantMenu";
import image0 from "../photoes/image.png";
import image1 from "../photoes/image-2.png";
import image2 from "../photoes/image-1.png";
import image3 from "../photoes/image-3.png";

// data
const menu = [
  { img: image3, title: "غذای اصلی" },
  { img: image2, title: "پیش غذا" },
  { img: image1, title: "دسر" },
  { img: image0, title: "نوشیدنی" }
];

const RestaurantMenuGroup = () => {
  return (
    <Grid container>
      <Grid item width='100%' textAlign='center' mt='2rem'>
        <Typography variant='h3' component='p' fontWeight='bold'>
          منوی رستوران
        </Typography>
      </Grid>
      <Grid
        item
        display='flex'
        justifyContent='space-between'
        alignItems='center'
        width='100%'
        mt='2rem'>
        {menu.map((item, i) => (
          <RestaurantMenu key={i} image={item.img} title={item.title} />
        ))}
      </Grid>
    </Grid>
  );
};

export default RestaurantMenuGroup;
