import React, { Suspense } from 'react';
import construction from "../../assets/construction.webp";
import fabrication from "../../assets/fabrication.webp";
import woodwork from "../../assets/woodwork2.webp";
import electrical from "../../assets/electrical.webp";
import { Parallax } from 'react-scroll-parallax';
import './HomeServices.css'; // Import relevant styles here if needed
import { ParallaxContext } from 'react-scroll-parallax';

const ServiceBox = React.lazy(() => import('./ServiceBox')); // Lazy load the ServiceBox component

const ServiceContainer = () => {
    return (
        <div className="service-container">
            <Suspense fallback={<div>Loading...</div>}>
                <Parallax speed={-5} tagOuter="figure">
                    <ServiceBox imgSrc={construction} title="Construction Solutions" />
                </Parallax>
                <Parallax speed={-5} tagOuter="figure">
                    <ServiceBox imgSrc={fabrication} title="Fabrication Excellence" />
                </Parallax>
                <Parallax speed={-5} tagOuter="figure">
                    <ServiceBox imgSrc={woodwork} title="Interior Design" />
                </Parallax>
                <Parallax speed={-5} tagOuter="figure">
                    <ServiceBox imgSrc={electrical} title="Electrical Work" />
                </Parallax>
            </Suspense>
        </div>
    );
};

export default React.memo(ServiceContainer); // Memoize ServiceContainer
