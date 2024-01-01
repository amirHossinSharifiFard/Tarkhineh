import { ThemeProvider } from "@mui/material";
import { Route, Routes } from "react-router-dom";


// Components
import { theme } from "./theme";
import Header from "./shared/Header";
import HomePage from "./homepage/HomePage";
import Footer from "./shared/Footer";
import MenuPage from "./menupage/MenuPage";


const App = () => {
  return (
    <ThemeProvider theme={theme}>

      <Header />

      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/menu' element={<MenuPage />} />
      </Routes>

      <Footer />
    </ThemeProvider>
  );
};

export default App;
