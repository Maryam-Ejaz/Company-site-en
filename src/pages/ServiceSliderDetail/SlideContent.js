// SlideContext.js
import React, { createContext, useContext, useState } from 'react';

const SlideContext = createContext();

export const SlideProvider = ({ children }) => {
  const [slides, setSlides] = useState([]);

  return (
    <SlideContext.Provider value={{ slides, setSlides }}>
      {children}
    </SlideContext.Provider>
  );
};

export const useSlides = () => useContext(SlideContext);
