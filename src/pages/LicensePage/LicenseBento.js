import React from 'react';
import './LicenseBento.css';
import { useLottie } from "lottie-react";
import anim from "../../assets/p-building.json";
import styled from "styled-components";

import image1 from "../../assets/media1.jpeg";
import image2 from "../../assets/media2.jpeg";
import image3 from "../../assets/media3.jpeg";


const AnimWrapper = styled.div`
  padding: 1rem;

`;

const LicenseBento = () => {
    const options = {
        animationData: anim,
        loop: true,
      };
    
      const { View } = useLottie(options);

  return (
    <div className="parent-license">
        <div className="div1-license bento-container-one-license">
            <p>LICENSE</p>
        </div>
        <div className="div2-license bento-container-two-license"></div>
        <div className="div3-license bento-container-three-license"></div>
        <div className="div4-license bento-container-four-license">
            <img src={image1} alt={"Shed Construction"} loading="lazy" />
        </div>
        <div className="div5-license bento-container-five-license">
            <img src={image3} alt={"Construction"} loading="lazy" />
        </div>
        <div className="div6-license bento-container-six-license"></div>
        <div className="div7-license bento-container-four-license"></div>
        <div className="div8-license bento-container-one-license">
            <img src={image2} alt={"Interior"} loading="lazy" />
        </div>
        <div className="div9-license bento-container-two-license">
            <AnimWrapper>
                {View}
            </AnimWrapper>
        </div>
    </div>
  );
};

export default LicenseBento;
