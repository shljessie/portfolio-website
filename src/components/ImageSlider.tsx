import 'swiper/swiper-bundle.css'

import { DefaultInnerRootCont, DefaultOuterRootCont } from "../components/Containers"
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, {Pagination} from 'swiper';

import { FEATURE_DATA } from '../constants/PageData';
import { FEATURE_IMAGE_URLS } from '../constants/ImageUrls'
import React from "react";
import { Typography } from "@material-ui/core"
import theme from "../theme"

SwiperCore.use([Pagination]);

export const ImageSlider = () => {
  const slides = [];
    slides.push(
      <>
        {
          FEATURE_IMAGE_URLS.features.map((imageUrl, i) => {
          return(
            <SwiperSlide key ={i} >
              <Typography variant= "h5" style = {{color: 'white', marginBottom: theme.spacing(4)}}>
                {FEATURE_IMAGE_URLS.features[i].description}
              </Typography>
                  <img 
                  src=  {FEATURE_IMAGE_URLS.features[i].imageUrl}
                  alt= {`Slide ${i}`}  
                  />
          </SwiperSlide>
          )
        }) 
      }
      </>
    );

  
  return (
    <DefaultOuterRootCont>
      <DefaultInnerRootCont>
      <Typography variant="h2" style={{color:'white', marginBottom: theme.spacing(4)}}>Discover. Change. Go Live</Typography>
      <Typography variant="subtitle2" style={{color:'white' }}>If you have experienced...</Typography>
        <Swiper pagination>
          {slides}
        </Swiper>
      </DefaultInnerRootCont>
    </DefaultOuterRootCont>
  );
};

export default ImageSlider