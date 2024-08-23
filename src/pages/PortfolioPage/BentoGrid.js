import React from 'react';
import './BentoGrid.css';
import { useLottie } from "lottie-react";
import anim from "../../assets/p-building.json";
import styled from "styled-components";

import image1 from "../../assets/media1.jpeg";
import image2 from "../../assets/media2.jpeg";
import image3 from "../../assets/media3.jpeg";


const AnimWrapper = styled.div`
  padding: 1rem;

`;

const BentoGrid = () => {
    const options = {
        animationData: anim,
        loop: true,
      };
    
      const { View } = useLottie(options);

  return (
    <div className="parent">
        <div className="div1 bento-container-one">
            <p>PORTFOLIO</p>
        </div>
        <div className="div2 bento-container-two"></div>
        <div className="div3 bento-container-three"></div>
        <div className="div4 bento-container-four">
            <img src={image1} alt={"Shed Construction"} loading="lazy" />
        </div>
        <div className="div5 bento-container-five">
            <img src={image3} alt={"Construction"} loading="lazy" />
        </div>
        <div className="div6 bento-container-six"></div>
        <div className="div7 bento-container-four"></div>
        <div className="div8 bento-container-one">
            <img src={image2} alt={"Interior"} loading="lazy" />
        </div>
        <div className="div9 bento-container-two">
            <AnimWrapper>
                {View}
            </AnimWrapper>
        </div>
    </div>
  );
};

export default BentoGrid;
