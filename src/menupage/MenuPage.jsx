import { Container } from "@mui/material";
import Slider from "../shared/Slider";
import SpecialFoods from "../shared/SpecialFoods";
import { colors } from "../theme";

const MenuPage = () => {
    return (
        <Container>
            <Slider/>
            <SpecialFoods bgColor={colors.white[100]} title="پیشنهاد ویژه"/>
        </Container>
    );
}

export default MenuPage;
