import { Container } from "@mui/material";
import Slider from "../shared/Slider";
import SpecialFoods from "../shared/SpecialFoods";
import { colors } from "../theme";

import delices1 from "../photoes/cardsImage/delices1.png";
import delices2 from "../photoes/cardsImage/delices2.png";
import delices3 from "../photoes/cardsImage/delices3.png";
import delices4 from "../photoes/cardsImage/delices4.png";

import popular1 from "../photoes/cardsImage/popular1.jpg";
import popular2 from "../photoes/cardsImage/popular2.png";
import popular3 from "../photoes/cardsImage/popular3.png";
import popular4 from "../photoes/cardsImage/popular4.png";

import persian1 from "../photoes/cardsImage/persian1.png";
import persian2 from "../photoes/cardsImage/persian2.png";
import persian3 from "../photoes/cardsImage/persian3.png";
import persian4 from "../photoes/cardsImage/persian4.png";
import BranchSlider from "./BranchSlider";

const special = [
  { url: delices1, title: "دلمه برگ کلم", price: "300,000" },
  { url: delices2, title: "یادمجان شکم‌پر", price: "200,000" },
  { url: delices3, title: "کالزونه اسفناج", price: "500,000" },
  { url: delices4, title: "پیتزا قارچ", price: "123,000" },
  { url: delices1, title: "دلمه برگ کلم", price: "435,500" },
  { url: delices2, title: "یادمجان شکم‌پر", price: "50,100" },
  { url: delices3, title: "کالزونه اسفناج", price: "9,103" },
  { url: delices4, title: "پیتزا قارچ", price: "200,000" }
];

const popular = [
  { url: popular1, title: "دلمه برگ کلم", price: "300,000" },
  { url: popular2, title: "یادمجان شکم‌پر", price: "200,000" },
  { url: popular3, title: "کالزونه اسفناج", price: "500,000" },
  { url: popular4, title: "پیتزا قارچ", price: "123,000" },
  { url: popular1, title: "دلمه برگ کلم", price: "435,500" },
  { url: popular2, title: "یادمجان شکم‌پر", price: "50,100" },
  { url: popular3, title: "کالزونه اسفناج", price: "9,103" },
  { url: popular4, title: "پیتزا قارچ", price: "200,000" }
];
const persian = [
  { url: persian1, title: "دلمه برگ کلم", price: "300,000" },
  { url: persian2, title: "یادمجان شکم‌پر", price: "200,000" },
  { url: persian3, title: "کالزونه اسفناج", price: "500,000" },
  { url: persian4, title: "پیتزا قارچ", price: "123,000" },
  { url: persian1, title: "دلمه برگ کلم", price: "435,500" },
  { url: persian2, title: "یادمجان شکم‌پر", price: "50,100" },
  { url: persian3, title: "کالزونه اسفناج", price: "9,103" },
  { url: persian4, title: "پیتزا قارچ", price: "200,000" }
];
const MenuPage = () => {
  return (
    <Container>
      <Slider />
      <SpecialFoods
        bgColor={colors.white[100]}
        title='پیشنهاد ویژه'
        titleColor={colors.black[100]}
        data={special}
      />
      <SpecialFoods
        bgColor={colors.primary[200]}
        title='غذهای محبوب'
        titleColor={colors.white[100]}
        data={popular}
      />
      <SpecialFoods
        bgColor={colors.white[100]}
        title='غذاهای غیر ایرانی'
        titleColor={colors.black[100]}
        data={persian}
      />
      <BranchSlider />
    </Container>
  );
};
// console.log(persian);

export default MenuPage;
