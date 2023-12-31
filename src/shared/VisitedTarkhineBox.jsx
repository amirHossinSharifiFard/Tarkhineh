import { Box, Typography } from "@mui/material";

const VisitedTarkhineBox = (item) => {
  const { image, title, description } = item.item;

  return (
    <Box
      width='290px'
      height='350px'
      sx={{
        pb: "16px",
        borderRadius: "8px",
        border: "1px solid #CBCBCB",
        boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)"
      }}>
      <img
        src={image}
        width='100%'
        height='230px'
        style={{
          borderRadius: "4px 4px  0 0"
        }}
      />
      <Box textAlign='center'>
        <Typography variant='h3' component='h3' m='1rem 0'>
          شعبه {` ${title}`}
        </Typography>
        <Typography
          variant='p'
          component='p'
          color='#717171'
          m='auto 0.9rem'
          fontSize='16px'>
          {description}
        </Typography>
      </Box>
    </Box>
  );
};

export default VisitedTarkhineBox;
