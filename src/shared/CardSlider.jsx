import Cards from "./Cards";
import mochim from "../photoes/cardsImage/mochim.png";
// import image from "../photoes/cardsImage/Product card-9.png";
// import image1 from "../photoes/cardsImage/Product card-8.png";
// import image2 from "../photoes/cardsImage/Product card-7.png";
// import image3 from "../photoes/cardsImage/Product card-6.png";
import { Stack } from "@mui/material";

const data = [mochim,mochim];
const CardSlider = () => {
  return (
    <Stack display="flex" flexDirection='row' gap={3}>
      {data.map((item, i) => (
        <Cards key={i} imgSrc={item} />
      ))}
    </Stack>
  );
};

export default CardSlider;
