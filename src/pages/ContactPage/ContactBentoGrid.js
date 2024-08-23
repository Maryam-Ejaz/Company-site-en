import React from 'react';
import './ContactBentoGrid.css';
import { useLottie } from "lottie-react";
import anim from "../../assets/p-building.json";
import styled from "styled-components";

import image1 from "../../assets/media1.jpeg";
import image2 from "../../assets/media2.jpeg";
import image3 from "../../assets/media3.jpeg";


const AnimWrapper = styled.div`
  padding: 1rem;

`;

const ContactBentoGrid = () => {
    const options = {
        animationData: anim,
        loop: true,
      };
    
      const { View } = useLottie(options);

  return (
    <div className="parent-contact">
        <div className="div1-contact bento-container-one-contact">
            <p>CONTACT</p>
        </div>
        <div className="div2-contact bento-container-two-contact"></div>
        <div className="div3-contact bento-container-three-contact"></div>
        <div className="div4-contact bento-container-four-contact">
            <img src={image1} alt={"Shed Construction"} loading="lazy" />
        </div>
        <div className="div5-contact bento-container-five-contact">
            <img src={image3} alt={"Construction"} loading="lazy" />
        </div>
        <div className="div6-contact bento-container-six-contact"></div>
        <div className="div7-contact bento-container-four-contact"></div>
        <div className="div8-contact bento-container-one-contact">
            <img src={image2} alt={"Interior"} loading="lazy" />
        </div>
        <div className="div9-contact bento-container-two-contact">
            <AnimWrapper>
                {View}
            </AnimWrapper>
        </div>
    </div>
  );
};

export default ContactBentoGrid;
