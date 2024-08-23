import React from 'react';
import Counter from './Counter'; // Assuming Counter component is defined elsewhere
import './HomeParallax.css'; // Ensure your CSS file is imported correctly
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faProjectDiagram, faSmile, faCoffee } from '@fortawesome/free-solid-svg-icons';

const HomeParallax = () => {
  return (
    <div id="parallax-wrapper">
      <section className="p-one parallax-inner">
        <div id="projectFacts" className="sectionClass">
          <div className="fullWidth">
            <div className="projectFactsWrap">
              <div className="item">
                <FontAwesomeIcon icon={faProjectDiagram} size='2x' />
                <Counter id="number1" end={30} duration={3000} />
                <span></span>
                <p>Projects done</p>
              </div>
              <div className="item">
              <FontAwesomeIcon icon={faSmile} size='2x'/>
                <Counter id="number2" end={55} duration={3000} />
                <span></span>
                <p>Happy clients</p>
              </div>
              <div className="item">
              <FontAwesomeIcon icon={faCoffee} size='2x'/>
                <Counter id="number3" end={359} duration={2000}/>
                <span></span>
                <p>Cups of coffee</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default React.memo(HomeParallax);
