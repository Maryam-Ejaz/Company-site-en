import React from 'react';
import './AboutBentoGrid.css';
import { useLottie } from "lottie-react";
import anim from "../../assets/p-building.json";
import styled from "styled-components";

import image1 from "../../assets/media1.jpeg";
import image2 from "../../assets/media2.jpeg";
import image3 from "../../assets/media3.jpeg";


const AnimWrapper = styled.div`
  padding: 1rem;

`;

const AboutBentoGrid = () => {
    const options = {
        animationData: anim,
        loop: true,
      };
    
      const { View } = useLottie(options);

  return (
    <div className="parent-about">
        <div className="div1-about bento-container-one-about">
            <p>ABOUT</p>
        </div>
        <div className="div2-about bento-container-two-about"></div>
        <div className="div3-about bento-container-three-about"></div>
        <div className="div4-about bento-container-four-about">
            <img src={image1} alt={"Shed Construction"} loading="lazy" />
        </div>
        <div className="div5-about bento-container-five-about">
            <img src={image3} alt={"Construction"} loading="lazy" />
        </div>
        <div className="div6-about bento-container-six-about"></div>
        <div className="div7-about bento-container-four-about"></div>
        <div className="div8-about bento-container-one-about">
            <img src={image2} alt={"Interior"} loading="lazy" />
        </div>
        <div className="div9-about bento-container-two-about">
            <AnimWrapper>
                {View}
            </AnimWrapper>
        </div>
    </div>
  );
};

export default AboutBentoGrid;
