import React, { useState } from "react";
import { Box, Typography, Grid, IconButton, Container } from "@mui/material";


// logo
import Logo from "../photoes/logo.png";
// colors
import { colors } from "../theme";
// icons
import SearchIcon from "@mui/icons-material/Search";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import LocalGroceryStoreOutlinedIcon from "@mui/icons-material/LocalGroceryStoreOutlined";

const Header = () => {
  // toye har safhe ey bod bayad in state ro baraye hamon header true kone
  const [active, setActive] = useState(true);
  return (
   <Container>
     <Box
      display='flex'
      justifyContent='space-evenly'
      alignContent='center'
      margin='32px auto'>
      <Box component='img' sx={{ width: "155px", height: "51px" }} src={Logo} />
      <Grid
        container
        sx={{
          display: "flex",
          justifyContent: "space-evenly",
          alignItems: "center",
          width: "500px",
          margin: "0 130px"
        }}>
        <Grid
          item
          sx={{
            cursor: "pointer",
            fontWeight: "bold",
            borderBottom: `1px solid ${colors.grey[900]}`

            // "&:hover": active && {
            //   borderBottom: `1px solid ${colors.grey[900]}`
            // },
          }}>
          <Typography variant='p'> صفحه اصلی</Typography>
        </Grid>

        <Grid
          item
          sx={{
            cursor: "pointer",
            "&:hover": active && {
              borderBottom: `1px solid ${colors.grey[900]}`
            },
            color: colors.grey[700]
          }}>
          <Typography variant='p' id='drop-shobe'> شعبه</Typography>
        </Grid>
        <Grid
          item
          sx={{
            cursor: "pointer",
            "&:hover": active && {
              borderBottom: `1px solid ${colors.grey[900]}`
            },
            color: colors.grey[700]
          }}>
          <Typography variant='p'> منو</Typography>
        </Grid>
        <Grid
          item
          sx={{
            cursor: "pointer",
            "&:hover": active && {
              borderBottom: `1px solid ${colors.grey[900]}`
            },
            color: colors.grey[700]
          }}>
          <Typography variant='p'> اعطای نمایندگی</Typography>
        </Grid>
        <Grid
          item
          sx={{
            cursor: "pointer",
            "&:hover": active && {
              borderBottom: `1px solid ${colors.grey[900]}`
            },
            color: colors.grey[700],

            textAlign: "center"
          }}>
          <Typography variant='p'> درباره ما</Typography>
        </Grid>
        <Grid
          item
          sx={{
            cursor: "pointer",
            "&:hover": active && {
              borderBottom: `1px solid ${colors.grey[900]}`
            },
            color: colors.grey[700]
          }}>
          <Typography variant='p'>تماس با ما</Typography>
        </Grid>
      </Grid>
      <Box display='flex' margin='auto'>
        <IconButton
          sx={{
            borderRadius: "4px",
            backgroundColor: colors.grey[400],
            m: "2px"
          }}>
          <SearchIcon />
        </IconButton>
        <IconButton
          sx={{
            borderRadius: "4px",
            backgroundColor: colors.grey[400],
            m: "2px"
          }}>
          <AccountCircleOutlinedIcon />
        </IconButton>
        <IconButton
          sx={{
            borderRadius: "4px",
            backgroundColor: colors.grey[400],
            m: "2px"
          }}>
          <LocalGroceryStoreOutlinedIcon variant='outlined' />
        </IconButton>
      </Box>
    </Box>
   </Container>
  );
};

export default Header;
