import 'swiper/swiper-bundle.css'

import { DefaultInnerRootCont, DefaultOuterRootCont } from "../components/Containers"
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, {Pagination} from 'swiper';

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

      </DefaultInnerRootCont>
    </DefaultOuterRootCont>
  );
};

export default ImageSlider