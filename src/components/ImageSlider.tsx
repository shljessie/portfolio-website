import 'swiper/swiper-bundle.css'

import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, {Pagination} from 'swiper';

import React from "react";
import { Typography } from "@material-ui/core"
import theme from "../theme"

SwiperCore.use([Pagination]);

export const ImageSlider = () => {
  const slides = [];

    slides.push(
      <>
      <SwiperSlide key ={1} >
      <Typography variant= "h4" style = {{color: 'white', marginBottom: theme.spacing(4)}}>
        Unwanted music in your audio/ video
      </Typography>
          <img 
          src= { `https://picsum.photos/id/${1}/500/300`}
          alt= {`Slide ${1}`}  
          />
      </SwiperSlide>
      <SwiperSlide key ={2} >
      <Typography variant= "h4" style = {{color: 'white',marginBottom: theme.spacing(4)}}>
        Violations of music copyright infringements
      </Typography>
          <img 
          src= { `https://picsum.photos/id/${2}/500/300`}
          alt= {`Slide ${2}`}  
          />
      </SwiperSlide>
      <SwiperSlide key ={`3`} >
      <Typography variant= "h4" style = {{color: 'white', marginBottom: theme.spacing(4)}}>
        Need for similiar noncopyrighted music
      </Typography>
          <img 
          src= { `https://picsum.photos/id/${3}/500/300`}
          alt= {`Slide ${3}`}  
          />
      </SwiperSlide>
      </>
    );

  
  return (
    <div style= {{marginBottom: theme.spacing(15)}}>
    <Typography variant="h2" style={{color:'white', marginBottom: theme.spacing(8)}}>Discover. Change. Go Live</Typography>
    <Typography variant="subtitle2" style={{color:'white' }}>If you have experienced...</Typography>
      <Swiper pagination>
        {slides}
      </Swiper>
    </div>
  );
};

export default ImageSlider