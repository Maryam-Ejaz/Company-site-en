// SplashScreen.js
import React from "react";
import { useLottie } from "lottie-react";
import anim from "../assets/building.json";
import styled from "styled-components";

const SplashScreenWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fff; // Set background color as needed
  z-index: 9999;
`;

const SplashScreen = () => {
  const options = {
    animationData: anim,
    loop: true,
  };

  const { View } = useLottie(options);

  return (
    <SplashScreenWrapper>
      {View}
    </SplashScreenWrapper>
  );
};

export default SplashScreen;
