import { Box, Button, Typography } from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import StarIcon from "@mui/icons-material/Star";
import { colors } from "../theme";
// eslint-disable-next-line react/prop-types
const Cards = ({ imgSrc }) => {
  return (
    <Box
      height='433px'
      display='flex'
      flexDirection='column'
      overflow='hidden'
      width='288px'
      sx={{ border:`1px solid ${colors.grey[500]}` }}
      borderRadius='8px'>
      <Box display=' flex' height='256px'>
        <img src={imgSrc ? imgSrc : null} />
      </Box>
      <Typography
        variant='h4'
        component='h4'
        textAlign='center'
        fontWeight='bold'
        m={2}>
        دلمه برگ کلم
      </Typography>

      <Box display='flex' justifyContent='space-between'>
        <Box display='flex' justifyContent='right' alignContent='center' mr={2}>
          <FavoriteBorderIcon
            sx={{
              "&:hover": { cursor: "pointer" },
              ml: "0.5rem",
              color: colors.grey[600]
            }}
          />
          <Typography
            variant='h5 '
            component='h6'
            fontWeight={200}
            color={colors.grey[600]}>
            افزودن علاقه مندی ها
          </Typography>
        </Box>
        <Box
          display='flex'
          flexDirection='row-reverse'
          justifyContent='left'
          alignContent='center'
          ml={2}>
          <span style={{ color: "red" }}>8%</span>
          <Typography
            variant='p'
            component='p'
            sx={{
              textDecoration: "line-through",
              ml: "1.5rem",
              color: colors.grey[600]
            }}>
            222,000
          </Typography>
        </Box>
      </Box>

      <Box display='flex' justifyContent='space-between'  mt={1}>
        <Box display='flex' justifyContent='right' alignContent='center' mr={2}>
          <StarIcon
            sx={{
              "&:hover": { cursor: "pointer" },
              ml: "0.5rem",
              color: "#F4B740"
            }}
          />
          <Typography
            variant='h5 '
            component='h6'
            fontWeight={200}
            color={colors.grey[600]}>
            <span style={{color:"black" , marginLeft:'.5rem'}}>5</span>(<span>52</span> امتیاز)
          </Typography>
        </Box>
        <Box
          display='flex'
          flexDirection='row-reverse'
          justifyContent='left'
          alignContent='center'
          ml={2}
         
          >
          <span style={{ color: "black" }}>تومان</span>
          <Typography
            variant='p'
            component='p'
            sx={{
              ml: "0.5rem",
              color: "black"
            }}>
            209,000
          </Typography>
        </Box>
      </Box>
      <Button variant="contained" sx={{m:"16px"}}>افزودن به سبد خرید</Button>
    </Box>
  );
};

export default Cards;
