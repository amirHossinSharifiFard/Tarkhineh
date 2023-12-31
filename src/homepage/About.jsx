import { Box,  Stack } from "@mui/material";
import aboutImage from "../photoes/about.png";
import AboutDescribe from "../shared/AboutDescribe";

const About = () => {
  return (
    <Box display='flex'>
      <Box position='relative'>
        <img
          src={aboutImage}
          style={{
            width: "100%",
            height: "100%",
            top: "0",
            left: "0"
          }}
        />
        <Stack
          zIndex='1'
          position='absolute'
          width='100%'
          height='100%'
          top='0'
          left='0'
          bgcolor='rgba(0,0,0, 0.5)'
        />
        <Box display='flex' justifyContent='space-evenly'>
          <AboutDescribe />
        </Box>
      </Box>
    </Box>
  );
};

export default About;
