import { Grid, Typography } from "@mui/material";
import VisitedTarkhineBox from "../shared/VisitedTarkhineBox";

// images
import image1 from '../photoes/visited.jpg'
import image2 from '../photoes/visited2.jpg'
import image3 from '../photoes/visited3.jpg'


// data
const data = [
  { image: image1, title: "اکباتان", description: "شهرک اکباتان، فاز ۳، مجتمع تجاری کوروش، طبقه سوم" },
  { image: image2, title: "چالوس", description: "چالوس، خیابان ۱۷ شهریور، بعد کوچه کوروش، جنب داروخانه دکتر میلانی" },
  { image: image1, title: "اقدسیه", description: "خیابان اقدسیه ، نرسیده به میدان خیام، پلاک ۸" },
  { image: image3, title: "ونک", description: "میدان ونک، خیابان فردوسی، نبش کوچه نیلوفر، پلاک ۲۶" }
];
const VisitedTarkhine = () => {
  return (
    <Grid container mb={5}>
      <Grid item display='block' width='100%' mt={5}>
        <Typography variant='h3' component='h3' textAlign='center'
        mb={3}>
          ترخینه گردی
        </Typography>
      </Grid>
      <Grid
        item
        width='100%'
        display='flex'
        justifyContent='space-between'
        alignContent='center'
        gap="8px"
        >
        {data.map((item, i) => (
          <VisitedTarkhineBox item={item} key={i} />
        ))}
      </Grid>
    </Grid>
  );
};

export default VisitedTarkhine;
