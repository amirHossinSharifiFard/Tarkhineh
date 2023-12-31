import {
  Box,
  Button,
  Container,
  Grid,
  Stack,
  TextField,
  Typography
} from "@mui/material";

import footerImage from "../photoes/Footer.png";
import { Link } from "react-router-dom";
// icons
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import TelegramIcon from "@mui/icons-material/Telegram";
import { colors } from "../theme";

const dataShobe = ["اکباتان", "چالوس", "اقدسیه", "ونک"];
const dataDastrasi = ["پرسش های متداول", "قوانین ترخینه", "حریم خصوصی"];
// RTl
const Footer = () => {
  return (
    <Container>
      <Grid container sx={{ height: "255px", position: "relative" }}>
        <Grid item sx={{ filter: "brightness(50%)", position: "absolute" }}>
          <img src={footerImage} width='100%' height='100%' />
        </Grid>
        <Grid
          item
          sx={{
            zIndex: "2",
            width: "100%",
            color: colors.white[100],
            display: "flex"
          }}>
          <Box
            width='50%'
            display='flex'
            m='2rem 0 0 0'
            justifyContent='space-evenly'>
            <Stack
              display='flex'
              flexDirection='column'
              alignContent='center'
              gap={2}>
              <Typography variant='h4' component='p' fontWeight='700'>
                دسترسی آسان
              </Typography>
              {dataDastrasi.map((item, i) => (
                <Link key={i}>
                  <Typography
                    variant='p'
                    component='p'
                    color={colors.grey[400]}>
                    {item}
                  </Typography>
                </Link>
              ))}

              <Box display='flex' gap={2}>
                <Link>
                  <TwitterIcon sx={{ color: colors.white[100] }} />
                </Link>
                <Link>
                  <InstagramIcon sx={{ color: colors.white[100] }} />
                </Link>
                <Link>
                  <TelegramIcon sx={{ color: colors.white[100] }} />
                </Link>
              </Box>
            </Stack>

            <Stack
              display='flex'
              flexDirection='column'
              alignContent='center'
              gap={2}>
              <Typography variant='h4' component='p' fontWeight='700'>
                شعبه‌های ترخینه
              </Typography>

              {dataShobe.map((item, i) => (
                <Link key={i}>
                  <Typography
                    variant='p'
                    component='p'
                    color={colors.grey[400]}>
                    شعبه {item}
                  </Typography>
                </Link>
              ))}
            </Stack>
          </Box>
          <Box width='50%' m='2rem 0 0 0'>
            <form>
              <Typography variant='h4' component='p' fontWeight='700'>
                پیام به ترخینه
              </Typography>
              <Box display='flex' ml={10} gap={3}>
                <Box display='flex' flexDirection='column' gap={0.5}>
                  <TextField
                    variant='standard'
                    label='نام و نام خانوادگی'
                    InputLabelProps={{
                      style: { color: `${colors.grey[200]}` }
                    }}
                    sx={{
                      label: {
                        left: "auto",
                        right: "auto",
                        transformOrigin: "top right",
                        textAlign: "right"
                      },
                      " .css-cr9lnm-MuiInputBase-root-MuiInput-root:before": {
                        borderBottom: "1px solid"
                      },
                      ".css-x2l1vy-MuiInputBase-root-MuiOutlinedInput-root": {
                        color: `${colors.grey[800]}`
                      },
                      "& .MuiInputBase-root": {
                        color: `${colors.grey[200]}`
                      },
                      ".css-1o0bman-MuiInputBase-root-MuiInput-root:before": {
                        borderBottom: `1px solid ${colors.grey[800]}`
                      },
                      ".css-1o0bman-MuiInputBase-root-MuiInput-root:after": {
                        borderBottom: `1px solid ${colors.grey[800]}`
                      }
                    }}
                    InputProps={{
                      sx: {
                        ".css-1d3z3hw-MuiOutlinedInput-notchedOutline": {
                          borderBottom: `2px solid ${colors.grey[800]}`
                        },
                        "&:hover": {
                          ".css-1d3z3hw-MuiOutlinedInput-notchedOutline": {
                            border: `2px solid ${colors.grey[800]}`
                          }
                        }
                      }
                    }}
                    color='secondary'
                  />
                  <TextField
                    variant='standard'
                    label='شماره تماس'
                    InputLabelProps={{
                      style: { color: `${colors.grey[200]}` }
                    }}
                    sx={{
                      label: {
                        left: "auto",
                        right: "auto",
                        transformOrigin: "top right",
                        textAlign: "right"
                      },
                      " .css-cr9lnm-MuiInputBase-root-MuiInput-root:before": {
                        borderBottom: "1px solid"
                      },
                      ".css-x2l1vy-MuiInputBase-root-MuiOutlinedInput-root": {
                        color: colors.grey[800]
                      },
                      "& .MuiInputBase-root": {
                        color: `${colors.grey[200]}`
                      },
                      ".css-1o0bman-MuiInputBase-root-MuiInput-root:before": {
                        borderBottom: `1px solid ${colors.grey[800]}`
                      },
                      ".css-1o0bman-MuiInputBase-root-MuiInput-root:after": {
                        borderBottom: `1px solid ${colors.grey[800]}`
                      }
                    }}
                    InputProps={{
                      sx: {
                        ".css-1d3z3hw-MuiOutlinedInput-notchedOutline": {
                          borderBottom: `2px solid ${colors.grey[800]}`
                        },
                        "&:hover": {
                          ".css-1d3z3hw-MuiOutlinedInput-notchedOutline": {
                            border: `2px solid ${colors.grey[800]}`
                          }
                        }
                      }
                    }}
                    color='secondary'
                  />
                  <TextField
                    variant='standard'
                    label='آدرس ایمیل (اختیاری)'
                    InputLabelProps={{
                      style: { color: `${colors.grey[200]}` }
                    }}
                    sx={{
                      label: {
                        left: "auto",
                        right: "auto",
                        transformOrigin: "top right",
                        textAlign: "right"
                      },
                      " .css-cr9lnm-MuiInputBase-root-MuiInput-root:before": {
                        borderBottom: "1px solid"
                      },
                      ".css-x2l1vy-MuiInputBase-root-MuiOutlinedInput-root": {
                        color: `${colors.grey[800]}`
                      },
                      "& .MuiInputBase-root": {
                        color: `${colors.grey[200]}`
                      },
                      ".css-1o0bman-MuiInputBase-root-MuiInput-root:before": {
                        borderBottom: `1px solid ${colors.grey[800]}`
                      },
                      ".css-1o0bman-MuiInputBase-root-MuiInput-root:after": {
                        borderBottom: `1px solid ${colors.grey[800]}`
                      }
                    }}
                    InputProps={{
                      sx: {
                        ".css-1d3z3hw-MuiOutlinedInput-notchedOutline": {
                          borderBottom: `2px solid ${colors.grey[800]}`
                        },
                        "&:hover": {
                          ".css-1d3z3hw-MuiOutlinedInput-notchedOutline": {
                            border: `2px solid ${colors.grey[800]}`
                          }
                        }
                      }
                    }}
                    color='secondary'
                  />
                </Box>

                <Box width='100%'>
                  <TextField
                    label='پیام شما'
                    multiline
                    rows={6.5}
                    variant='standard'
                    InputLabelProps={{
                      style: { color: `${colors.grey[200]}` }
                    }}
                    sx={{
                      width: "100%",
                      label: {
                        left: "auto",
                        right: "auto",
                        transformOrigin: "top right",
                        textAlign: "right"
                      },
                      ".css-1m810gj-MuiInputBase-root-MuiInput-root:before": {
                        borderBottom: `1px solid ${colors.grey[800]}`
                      },
                      ".css-50utin-MuiInputBase-root-MuiInput-root:before": {
                        borderBottom: `1px solid ${colors.grey[800]}`
                      },
                      ".css-x2l1vy-MuiInputBase-root-MuiOutlinedInput-root": {
                        color: `${colors.grey[800]}`
                      },
                      "& .MuiInputBase-root": {
                        color: `${colors.grey[200]}`
                      },
                      " .css-1m810gj-MuiInputBase-root-MuiInput-root:after": {
                        borderBottom: `2px solid ${colors.grey[800]}`
                      }
                    }}
                    InputProps={{
                      sx: {
                        ".css-1d3z3hw-MuiOutlinedInput-notchedOutline": {
                          borderBottom: `2px solid ${colors.grey[800]}`
                        }
                      }
                    }}
                    color='secondary'
                  />
                </Box>
              </Box>
              <Box display='flex' flexDirection="column" justifyContent="center" textAlign="left" position="absolute" left='0' ml={10}>
                <span>0/200</span>
                <Button color="secondary"  variant="outlined" size="large"  >ارسال پیام</Button>
              </Box>
            </form>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Footer;
