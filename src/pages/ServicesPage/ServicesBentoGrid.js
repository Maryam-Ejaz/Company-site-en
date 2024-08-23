import React from 'react';
import './ServicesBentoGrid.css';
import { useLottie } from "lottie-react";
import anim from "../../assets/p-building.json";
import styled from "styled-components";

import image1 from "../../assets/media1.jpeg";
import image2 from "../../assets/media2.jpeg";
import image3 from "../../assets/media3.jpeg";


const AnimWrapper = styled.div`
  padding: 1rem;

`;

const ServicesBentoGrid = () => {
    const options = {
        animationData: anim,
        loop: true,
      };
    
      const { View } = useLottie(options);

  return (
    <div className="parent-services">
        <div className="div1-services bento-container-one-services">
            <p>SERVICES</p>
        </div>
        <div className="div2-services bento-container-two-services"></div>
        <div className="div3-services bento-container-three-services"></div>
        <div className="div4-services bento-container-four-services">
            <img src={image1} alt={"Shed Construction"} loading="lazy" />
        </div>
        <div className="div5-services bento-container-five-services">
            <img src={image3} alt={"Construction"} loading="lazy" />
        </div>
        <div className="div6-services bento-container-six-services"></div>
        <div className="div7-services bento-container-four-services"></div>
        <div className="div8-services bento-container-one-services">
            <img src={image2} alt={"Interior"} loading="lazy" />
        </div>
        <div className="div9-services bento-container-two-services">
            <AnimWrapper>
                {View}
            </AnimWrapper>
        </div>
    </div>
  );
};

export default ServicesBentoGrid;
