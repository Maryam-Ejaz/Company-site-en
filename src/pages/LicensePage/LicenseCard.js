import React from 'react';
import './LicenseCard.css';

import pec from "../../assets/license-logos/pec.png";
import pcsir from "../../assets/license-logos/pcsir.png";
import pra from "../../assets/license-logos/ppra.png";
import fbr from "../../assets/license-logos/fbr.png";

const LicenseCard = () => {
    return (
        <div className="license-card-container-main">
            <p className="page-component-heading-license">Registered Under</p>
            <div className="license-card-container">
                <div className="license-card-row">
                    <div className="license-card">
                        <div className="license-face license-face1">
                            <div className="license-content">
                                <img src={pec} alt="PEC" />
                                <h3>PEC</h3>
                            </div>
                        </div>
                        <div className="license-face license-face2">
                            <div className="license-content">
                                <p>We are registered with the Pakistan Engineering Council (PEC), ensuring that we adhere to the highest standards of engineering practices.</p>
                                <a href="https://www.pec.org.pk/" target="_blank" rel="noopener noreferrer">Learn More</a>
                            </div>
                        </div>
                    </div>
                    <div className="license-card">
                        <div className="license-face license-face1">
                            <div className="license-content">
                                <img src={pcsir} alt="PCSIR" />
                                <h3>PCSIR</h3>
                            </div>
                        </div>
                        <div className="license-face license-face2">
                            <div className="license-content">
                                <p>As a member of the Pakistan Council of Scientific and Industrial Research (PCSIR), we ensure excellence in research and industry.</p>
                                <a href="https://www.pcsir.gov.pk/" target="_blank" rel="noopener noreferrer">Learn More</a>
                            </div>
                        </div>
                    </div>
                    <div className="license-card">
                        <div className="license-face license-face1">
                            <div className="license-content">
                                <img src={pra} alt="PRA" />
                                <h3>PPRA</h3>
                            </div>
                        </div>
                        <div className="license-face license-face2">
                            <div className="license-content">
                                <p>Being registered with the Panjab Procurement Regulatory Authority (PPRA), we ensure transparency in our procurement processes.</p>
                                <a href="https://ppra.punjab.gov.pk/" target="_blank" rel="noopener noreferrer">Learn More</a>
                            </div>
                        </div>
                    </div>
                    <div className="license-card">
                        <div className="license-face license-face1">
                            <div className="license-content">
                                <img src={fbr} alt="FBR" />
                                <h3>FBR</h3>
                            </div>
                        </div>
                        <div className="license-face license-face2">
                            <div className="license-content">
                                <p>We are registered with the Federal Board of Revenue (FBR) for National Tax Number (NTN) and Goods and Services Tax (GST).</p>
                                <a href="https://fbr.gov.pk/" target="_blank" rel="noopener noreferrer">Learn More</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LicenseCard;
