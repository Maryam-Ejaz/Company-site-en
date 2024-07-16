// src/pages/Home.js
import React from 'react';
import Wrapper from './components/Wrapper';
import Title from './components/Title';
import Subtitle from './components/Subtitle';
import HeroSlider, { Overlay, Slide, MenuNav } from 'hero-slider';
import './HomePageSlider.css'

import image_1 from "../../assets/woodwork2.jpg";
import image_2 from "../../assets/building7.jpg";
import image_3 from "../../assets/building3.jpg";
import image_4 from "../../assets/building6.jpg";

// Define slider background images
// const bogliasco = "https://i.imgur.com/woodwork.jpg";
// const countyClare = "https://i.imgur.com/idjXzVQ.jpg";
// const craterRock = "https://i.imgur.com/8DYumaY.jpg";
// const giauPass = "https://i.imgur.com/8IuucQZ.jpg";

function HomePageSlider() {
  return (
    <div className='homeComponent'>
    <div className='mainSlider'>
    <HeroSlider 
      height={"100vh"}
      autoplay={{
        autoplayDuration: 6000,
      }}
      animations={{
        slidingAnimation: 'fade',
      }}
      controller={{
        initialSlide: 1,
        slidingDuration: 600,
        slidingDelay: 20,
        onSliding: (nextSlide) =>
          console.debug("onSliding(nextSlide): ", nextSlide),
        onBeforeSliding: (previousSlide, nextSlide) =>
          console.debug(
            "onBeforeSliding(previousSlide, nextSlide): ",
            previousSlide,
            nextSlide
          ),
        onAfterSliding: (nextSlide) =>
          console.debug("onAfterSliding(nextSlide): ", nextSlide)
      }}
    >
      {/* Overlay for HeroSlider */}
      <Overlay>
        <Wrapper>
            <div className='hsMainDiv'>
              <Title>Building Beyond Boundaries</Title>
              <div className='hsDiv'>
                <Subtitle>
                  Your trusted partner in construction, fabrication, and woodworks across Pakistan.
                </Subtitle>
              </div>
            </div>
            </Wrapper>
      </Overlay>

      {/* Slides for HeroSlider */}
      <Slide
        shouldRenderMask
        label="Construction"
        background={{
          backgroundImageSrc: image_4,
          backgroundAnimation:"zoom",
        }}
      >
        
        </Slide>

      <Slide
        shouldRenderMask
        label="Design"
        background={{
          backgroundImageSrc: image_2,
          backgroundAnimation:"zoom",
        }}
      />

      <Slide
        shouldRenderMask
        label="Renovation"
        background={{
          backgroundImageSrc: image_3,
          backgroundAnimation:"zoom",
        }}
      />

      <Slide
        shouldRenderMask
        label="Wood Work"
        background={{
          backgroundImageSrc: image_1,
          backgroundAnimation:"zoom",
        }}
      />

      {/* Navigation for HeroSlider */}
      <MenuNav />
    </HeroSlider>
    </div>

    </div>
  );
}



export default HomePageSlider;
