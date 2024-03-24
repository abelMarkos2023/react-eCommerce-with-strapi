import { ArrowForward } from '@mui/icons-material'
import { Box, Button, Container, Link, Stack, Typography, useMediaQuery, useTheme } from '@mui/material'
import React from 'react'
import IconSection from './IconSection'
import Slider1 from '../../assets/banner-15.jpg'
import Slider2 from '../../assets/banner-25.jpg'

import { Swiper, SwiperSlide } from 'swiper/react';
//import {Pagination} from 'swiper'

// Import Swiper styles
import 'swiper/css';
import '../../swiper.css'

const swiperList = [
    {
        img:Slider1,
        text1:"LIFESTYLE COLLECTION",
        text2:"Men",
        text3:"SALLES UP TO",
        text4:"50%"

    },
    {
        img:Slider2,
        text1:"LIFESTYLE COLLECTION",
        text2:"Women",
        text3:"SALLES UP TO",
        text4:"50%"

    }
]

const Hero = () => {
    const theme = useTheme()
  return (
    <Container sx={{py:2}}>
        <Box sx={{display:"flex", mt:2.5,gap:1.9,overflow:"hidden"}}>
        <Box className='sliderImg' flexGrow={1} sx={{overflow:"hidden",position:"relative",maxWidth:"100%"}}>
    
        <Swiper
      slidesPerView={1}
      loop={true}
      className='swiper'
     
    //   modules={[Pagination]}
    >
        {swiperList.map(item => (
        <SwiperSlide>
            <img src ={item.img} style={{
                maxWidth:"100%",
                maxHeight:"100%",
                objectFit:"cover"
            }} alt="slide" />

<Box className='' sx={{
             
             [theme.breakpoints.up('sm')]:{
              position:"absolute",
              top:"50%",
              transform:"translateY(-50%)",
              left:"5%",
              background:"transparent",
            textAlign:"left"
             },
             [theme.breakpoints.down('sm')]:{
              bgcolor:"#FFF",
              textAlign:"center",
              py:4
             }
          }}>
              <Typography variant="h3" sx={{
                  fontSize:"20px",
                  fontWeight:400,
                  color:"#222"
              }}>
                 {item.text1}
              </Typography>
              <Typography variant="h2" sx={{
                  fontSize:"30px",
                  fontWeight:600,
                  color:"#222",
                  mt:1
              }}>
                {item.text2}
              </Typography>
              <Stack direction={'row'} sx={{
                  [theme.breakpoints.down('sm')]:{
                      justifyContent:"center",
                      textAlign:"center",
                     }
              }} textAlign={'left'} alignItems={"center"}>
                  <Typography variant='h4' color="#333" mr={1}>{item.text3} </Typography>
                  <Typography variant='h4' color="#D23F57" mr={1}>{item.text4}</Typography>
              </Stack>
              <Typography color="#333" sx={{
                [theme.breakpoints.down('md')]:{
                    width:"80%"
                },
                [theme.breakpoints.down('md')]:{
                    width:"100%"
                }
              }} variant='h6'>Get Free Shipping On Orders Over $99.00 </Typography>
              <Button sx={{
                  mt:1,
                  px:5,
                  py:1,
                  bgcolor:"#222",
                  color:"#FFF",
                  borderRadius:"6px",
                  boxShadow:"0px 4px 16px rgba(0,0,0,0.4)",
                  ":hover":{
                  bgcolor:"#444",
                  boxShadow:"0px 4px 16px rgba(0,0,0,0.4)",
                  }
              }}>Shop Now</Button>
          </Box>

        </SwiperSlide>
        ))}
    </Swiper>
           

            
        </Box>
{useMediaQuery('(min-width:900px)') && 
        <Box sx={{minWidth:"26.6%",overflow:"hidden",maxHeight:"100%"}}>
            <Box sx={{position:"relative"}}>
                <img style={{
                    width:"100%",
                    objectFit:"cover"
                }} src="src\assets\banner-17.jpg" alt="" 
                />

                <Stack sx={{position:"absolute",top:"50%",transform:"translateY(-50%)",left:8}}>
                <Typography variant="caption" sx={{
                    fontSize:"20px",
                    color:"#2B3445",
                    mb:2,
                    color:"teal",
                    fontWeight:600
                }}>
                    New Arrivals
                </Typography>
                <Typography variant='h6' sx={{
                    lineHeight:"16px",
                    color:"#2B3445",
                    mb:2,
                    fontSize:"22px",
                    fontWeight:800,
                    color:"magenta"
                }}>
                    Summer Salles 20% off

                </Typography>

                <Link sx={{color:"#2B3445",display:"flex",alignItems:"center",cursor:"pointer",gap:"5px",transition:"all 200ms ease-in",":hover":{color:"#D23F57"}}} href="#" underline='none'>
                    Shop Now
                    <ArrowForward />
                    </Link>
                </Stack>
            </Box>
            <Box sx={{position:"relative"}}>
                <img style={{
                    width:"100%",
                    objectFit:"cover"
                }} src="src\assets\banner-16.jpg" alt="" />


                <Stack sx={{position:"absolute",top:"50%",transform:"translateY(-50%)",left:8}}>
                <Typography variant="caption" sx={{
                    fontSize:"20px",
                   
                    mb:2,
                    color:"teal",
                    fontWeight:600
                }}>
                    Mobile Phones
                </Typography>
                <Typography variant='h6' sx={{
                    lineHeight:"16px",
                   
                    mb:2,
                    fontSize:"22px",
                    fontWeight:800,
                    color:"magenta"
                }}>
                    All Brands

                </Typography>

                <Link sx={{color:"#2B3445",display:"flex",alignItems:"center",cursor:"pointer",gap:"5px",transition:"all 200ms ease-in",":hover":{color:"#D23F57"}}} href="#" underline='none'>
                    Shop Now
                    <ArrowForward />
                    </Link>
                </Stack>
            </Box>
        </Box>

            }
            </Box>
            <IconSection />
    </Container>
  )
}

export default Hero