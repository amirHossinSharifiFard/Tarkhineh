import Header from "./shared/Header";
import { ThemeProvider } from "@mui/material";
import { theme } from "./theme";
import HomePage from "./homepage/HomePage";
import Footer from "./shared/Footer";
const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Header />
      <HomePage/>
      <Footer/>

    </ThemeProvider>
  );
};

export default App;
