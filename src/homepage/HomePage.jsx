import { Container } from "@mui/material";
import Slider from "../shared/Slider";
import RestaurantMenuGroup from "./RestaurantMenuGroup";
import About from "./About";
import VisitedTarkhineh from './VisitedTarkhine'
const HomePage = () => {
  return (
    <>
      <Container>
        <Slider />
        <RestaurantMenuGroup />
        <About />
        <VisitedTarkhineh />
      </Container>
    </>
  );
};

export default HomePage;
