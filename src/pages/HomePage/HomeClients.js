import React from 'react';
import './HomeClients.css'; // Import your CSS file for styling

// Import your images
import caa from "../../assets/clients-logos/caa.png";
import din from "../../assets/clients-logos/din.png";
import go from "../../assets/clients-logos/go.png";
import hsc from "../../assets/clients-logos/hcs.png";
import interwood from "../../assets/clients-logos/interwood.png";
import nishat from "../../assets/clients-logos/nishat.png";
import pcsir from "../../assets/clients-logos/pcsir.png";
import pel from "../../assets/clients-logos/pel.png";
import pp from "../../assets/clients-logos/pp.png";
import pso from "../../assets/clients-logos/pso.png";
import puma from "../../assets/clients-logos/puma.png";
import shell from "../../assets/clients-logos/shell.png";
import usa from "../../assets/clients-logos/usa.png";
import vertex from "../../assets/clients-logos/vertex.png";

const HomeClients = () => {
  return (
    <div className="client-div">
      <div className="client-content">
        <p className="client-heading">Worked with</p>
        <p className="client-text">Thrilled to have worked with several prominent companies and government institutions on some great projects.</p>
      </div>
      <div className="slider">
      <div className="slide-track">
      <div className="slide">
        <a href="https://caapakistan.com.pk/" target="_blank" rel="noopener noreferrer">
          <img 
            src={caa} 
            alt="Logo 1" 
            loading="lazy" 
          />
        </a>
      </div>
      <div className="slide">
        <a href="https://www.dingroup.com/" target="_blank" rel="noopener noreferrer">
          <img 
            src={din} 
            alt="Logo 2" 
            loading="lazy" 
          />
        </a>
      </div>
      <div className="slide">
        <a href="https://www.gno.com.pk/" target="_blank" rel="noopener noreferrer">
          <img 
            src={go} 
            alt="Logo 3" 
            loading="lazy" 
          />
        </a>
      </div>
      <div className="slide">
        <a href="https://www.hcs.com.pk/" target="_blank" rel="noopener noreferrer">
          <img 
            src={hsc} 
            alt="Logo 4" 
            loading="lazy" 
          />
        </a>
      </div>
      <div className="slide">
        <a href="https://interwood.pk/" target="_blank" rel="noopener noreferrer">
          <img 
            src={interwood} 
            alt="Logo 5" 
            loading="lazy" 
          />
        </a>
      </div>
      <div className="slide">
        <a href="https://nishatmillsltd.com/" target="_blank" rel="noopener noreferrer">
          <img 
            src={nishat} 
            alt="Logo 6" 
            loading="lazy" 
          />
        </a>
      </div>
      <div className="slide">
        <a href="https://www.pcsir.gov.pk/" target="_blank" rel="noopener noreferrer">
          <img 
            src={pcsir} 
            alt="Logo 7" 
            loading="lazy" 
          />
        </a>
      </div>
      <div className="slide">
        <a href="https://pel.com.pk/" target="_blank" rel="noopener noreferrer">
          <img 
            src={pel} 
            alt="Logo 8" 
            loading="lazy" 
          />
        </a>
      </div>
      <div className="slide">
        <a href="https://punjabpolice.gov.pk/" target="_blank" rel="noopener noreferrer">
          <img 
            src={pp} 
            alt="Logo 9" 
            loading="lazy" 
          />
        </a>
      </div>
      <div className="slide">
        <a href="https://psopk.com/" target="_blank" rel="noopener noreferrer">
          <img 
            src={pso} 
            alt="Logo 10" 
            loading="lazy" 
          />
        </a>
      </div>
      <div className="slide">
        <a href="https://www.pumapakistan.com/en" target="_blank" rel="noopener noreferrer">
          <img 
            src={puma} 
            alt="Logo 11" 
            loading="lazy" 
          />
        </a>
      </div>
      <div className="slide">
        <a href="https://www.shell.com.pk/" target="_blank" rel="noopener noreferrer">
          <img 
            src={shell} 
            alt="Logo 12" 
            loading="lazy" 
          />
        </a>
      </div>
      <div className="slide">
        <a href="https://pk.usembassy.gov/" target="_blank" rel="noopener noreferrer">
          <img 
            src={usa} 
            alt="Logo 13" 
            loading="lazy" 
          />
        </a>
      </div>
      <div className="slide">
        <a href="https://vertexmedical.com/" target="_blank" rel="noopener noreferrer">
          <img 
            src={vertex} 
            alt="Logo 14" 
            loading="lazy" 
          />
        </a>
      </div>

      {/* Duplicate slides for infinite effect */}
      <div className="slide">
        <a href="https://caapakistan.com.pk/" target="_blank" rel="noopener noreferrer">
          <img 
            src={caa} 
            alt="Logo 1" 
            loading="lazy" 
          />
        </a>
      </div>
      <div className="slide">
        <a href="https://www.dingroup.com/" target="_blank" rel="noopener noreferrer">
          <img 
            src={din} 
            alt="Logo 2" 
            loading="lazy" 
          />
        </a>
      </div>
      <div className="slide">
        <a href="https://www.gno.com.pk/" target="_blank" rel="noopener noreferrer">
          <img 
            src={go} 
            alt="Logo 3" 
            loading="lazy" 
          />
        </a>
      </div>
      <div className="slide">
        <a href="https://www.hcs.com.pk/" target="_blank" rel="noopener noreferrer">
          <img 
            src={hsc} 
            alt="Logo 4" 
            loading="lazy" 
          />
        </a>
      </div>
      <div className="slide">
        <a href="https://interwood.pk/" target="_blank" rel="noopener noreferrer">
          <img 
            src={interwood} 
            alt="Logo 5" 
            loading="lazy" 
          />
        </a>
      </div>
      <div className="slide">
        <a href="https://nishatmillsltd.com/" target="_blank" rel="noopener noreferrer">
          <img 
            src={nishat} 
            alt="Logo 6" 
            loading="lazy" 
          />
        </a>
      </div>
      <div className="slide">
        <a href="https://www.pcsir.gov.pk/" target="_blank" rel="noopener noreferrer">
          <img 
            src={pcsir} 
            alt="Logo 7" 
            loading="lazy" 
          />
        </a>
      </div>
      <div className="slide">
        <a href="https://pel.com.pk/" target="_blank" rel="noopener noreferrer">
          <img 
            src={pel} 
            alt="Logo 8" 
            loading="lazy" 
          />
        </a>
      </div>
      <div className="slide">
        <a href="https://punjabpolice.gov.pk/" target="_blank" rel="noopener noreferrer">
          <img 
            src={pp} 
            alt="Logo 9" 
            loading="lazy" 
          />
        </a>
      </div>
      <div className="slide">
        <a href="https://psopk.com/" target="_blank" rel="noopener noreferrer">
          <img 
            src={pso} 
            alt="Logo 10" 
            loading="lazy" 
          />
        </a>
      </div>
      <div className="slide">
        <a href="https://www.pumapakistan.com/en" target="_blank" rel="noopener noreferrer">
          <img 
            src={puma} 
            alt="Logo 11" 
            loading="lazy" 
          />
        </a>
      </div>
      <div className="slide">
        <a href="https://www.shell.com.pk/" target="_blank" rel="noopener noreferrer">
          <img 
            src={shell} 
            alt="Logo 12" 
            loading="lazy" 
          />
        </a>
      </div>
      <div className="slide">
        <a href="https://pk.usembassy.gov/" target="_blank" rel="noopener noreferrer">
          <img 
            src={usa} 
            alt="Logo 13" 
            loading="lazy" 
          />
        </a>
      </div>
      <div className="slide">
        <a href="https://vertexmedical.com/" target="_blank" rel="noopener noreferrer">
          <img 
            src={vertex} 
            alt="Logo 14" 
            loading="lazy" 
          />
        </a>
      </div>
    </div>
      </div>
    </div>
  );
};

export default HomeClients;
