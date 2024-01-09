import { createTheme } from "@mui/material/styles";

export const colors = {
  tint: {
    100: "#E5F2E9",
    200: "#CAE4D3",
    300: "#B0D7BD",
    400: "#96C9A7",
    500: "#7CBC91",
    600: "#61AE7B",
    700: "#4E9968"
  },
  white: {
    100: "#fff"
  },
  primary: {
    100: "#417F56",
    200: "#315F41"
  },

  shade: {
    100: "#396F4B",
    200: "#315F41",
    300: "#294F36",
    400: "#21402B",
    500: "#183020",
    600: "#102016",
    700: "#08100B"
  },

  grey: {
    100: "#FFFFFF",
    200: "#F9F9F9",
    300: "#E1E1E1",
    400: "#EDEDED",
    500: "#CBCBCB",
    600: "#ADADAD",
    700: "#757575",
    800: "#717171",
    900: "#353535",
    1000: "#0C0C0C"
  },

  error: {
    100: "#C30000",
    200: "#ED2E2E",
    300: "#FFF2F2"
  },
  success: {
    100: "#00966D",
    200: "#00BA88",
    300: "#F3FDFA"
  },
  warning: {
    100: "#A9791C",
    200: "#F4B740",
    300: "#FFF8E1"
  },
  black:{
    100:"black"
  }
};

export const theme = createTheme({
  direction: "rtl", // Both here and <body dir="rtl">,
  palette: {
    primary: { main: colors.primary[100] },
    secondary: {
      main: colors.white[100]
    }
  }
});
