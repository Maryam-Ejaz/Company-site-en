import React from 'react';
import './ClientsBentoGrid.css';
import { useLottie } from "lottie-react";
import anim from "../../assets/p-building.json";
import styled from "styled-components";

import image1 from "../../assets/media1.jpeg";
import image2 from "../../assets/media2.jpeg";
import image3 from "../../assets/media3.jpeg";


const AnimWrapper = styled.div`
  padding: 1rem;

`;

const ClientsBentoGrid = () => {
    const options = {
        animationData: anim,
        loop: true,
      };
    
      const { View } = useLottie(options);

  return (
    <div className="parent-clients">
        <div className="div1-clients bento-container-one-clients">
            <p>CLIENTS</p>
        </div>
        <div className="div2-clients bento-container-two-clients"></div>
        <div className="div3-clients bento-container-three-clients"></div>
        <div className="div4-clients bento-container-four-clients">
            <img src={image1} alt={"Shed Construction"} loading="lazy" />
        </div>
        <div className="div5-clients bento-container-five-clients">
            <img src={image3} alt={"Construction"} loading="lazy" />
        </div>
        <div className="div6-clients bento-container-six-clients"></div>
        <div className="div7-clients bento-container-four-clients"></div>
        <div className="div8-clients bento-container-one-clients">
            <img src={image2} alt={"Interior"} loading="lazy" />
        </div>
        <div className="div9-clients bento-container-two-clients">
            <AnimWrapper>
                {View}
            </AnimWrapper>
        </div>
    </div>
  );
};

export default ClientsBentoGrid;
