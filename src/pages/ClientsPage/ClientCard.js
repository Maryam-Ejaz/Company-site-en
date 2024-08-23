import React from 'react';
import './ClientCard.css';

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


const ClientCard = () => {
    return (
        <div className="client-card-container-main">
            <p className="page-component-heading-client">Our Clients</p>
            <div className="client-card-container">
                <div className="client-card-row">
                    <div className="client-card">
                        <div className="client-face client-face1">
                            <div className="client-content">
                                <img src={caa} alt="PEC" />
                                <h3>CAA</h3>
                            </div>
                        </div>
                        <div className="client-face client-face2">
                            <div className="client-content">
                                <p>Executed multiple projects for the Civil Aviation Authority of Pakistan, encompassing a range of specialized construction and renovation tasks.</p>
                                <a href="https://caapakistan.com.pk/" target="_blank" rel="noopener noreferrer">Learn More</a>
                            </div>
                        </div>
                    </div>
                    <div className="client-card">
                        <div className="client-face client-face1">
                            <div className="client-content">
                                <img src={din} alt="DIN GROUP" />
                                <h3>DIN GROUP</h3>
                            </div>
                        </div>
                        <div className="client-face client-face2">
                            <div className="client-content">
                                <p>Handled the entire interior design and renovation for Din Group, ensuring a comprehensive and high-quality finish.</p>
                                <a href="https://www.dingroup.com/" target="_blank" rel="noopener noreferrer">Learn More</a>
                            </div>
                        </div>
                    </div>
                    <div className="client-card">
                        <div className="client-face client-face1">
                            <div className="client-content">
                                <img src={go} alt="GO" />
                                <h3>GO</h3>
                            </div>
                        </div>
                        <div className="client-face client-face2">
                            <div className="client-content">
                                <p>Completed comprehensive signage and ceiling projects for Go Petroleum at multiple locations throughout Pakistan.</p>
                                <a href="https://www.gno.com.pk/" target="_blank" rel="noopener noreferrer">Learn More</a>
                            </div>
                        </div>
                    </div>
                    <div className="client-card">
                        <div className="client-face client-face1">
                            <div className="client-content">
                                <img src={hsc} alt="Habib" />
                                <h3>HABIB CONSTRUCTION</h3>
                            </div>
                        </div>
                        <div className="client-face client-face2">
                            <div className="client-content">
                                <p>Managed both construction and interior design projects for the office block of Habib Construction, delivering a cohesive and functional workspace.</p>
                                <a href="https://www.hcs.com.pk/" target="_blank" rel="noopener noreferrer">Learn More</a>
                            </div>
                        </div>
                    </div>
                    <div className="client-card">
                        <div className="client-face client-face1">
                            <div className="client-content">
                                <img src={interwood} alt="INTERWOOD" />
                                <h3>INTERWOOD</h3>
                            </div>
                        </div>
                        <div className="client-face client-face2">
                            <div className="client-content">
                                <p>We performed a range of interior work for Interwood, including custom cabinetry, stylish flooring, and modern furnishings.</p>
                                <a href="https://interwood.pk/" target="_blank" rel="noopener noreferrer">Learn More</a>
                            </div>
                        </div>
                    </div>
                    <div className="client-card">
                        <div className="client-face client-face1">
                            <div className="client-content">
                                <img src={nishat} alt="NISHAT" />
                                <h3>NISHAT MILLS</h3>
                            </div>
                        </div>
                        <div className="client-face client-face2">
                            <div className="client-content">
                                <p>We executed comprehensive interior work for the Nishat Group, delivering high-quality finishes and design solutions.</p>
                                <a href="https://nishatmillsltd.com/" target="_blank" rel="noopener noreferrer">Learn More</a>
                            </div>
                        </div>
                    </div>
                    <div className="client-card">
                        <div className="client-face client-face1">
                            <div className="client-content">
                                <img src={pcsir} alt="PCSIR" />
                                <h3>PCSIR</h3>
                            </div>
                        </div>
                        <div className="client-face client-face2">
                            <div className="client-content">
                                <p>We performed maintenance work related to construction for the Pakistan Council of Scientific and Industrial Research (PCSIR), ensuring the upkeep of their facilities.</p>
                                <a href="https://www.pcsir.gov.pk/" target="_blank" rel="noopener noreferrer">Learn More</a>
                            </div>
                        </div>
                    </div>
                    <div className="client-card">
                        <div className="client-face client-face1">
                            <div className="client-content">
                                <img src={pel} alt="PEL" />
                                <h3>PEL</h3>
                            </div>
                        </div>
                        <div className="client-face client-face2">
                            <div className="client-content">
                                <p>We collaborated with Pakistan Electron Limited (PEL) on various projects, delivering quality solutions and services.</p>
                                <a href="https://pel.com.pk/" target="_blank" rel="noopener noreferrer">Learn More</a>
                            </div>
                        </div>
                    </div>
                    <div className="client-card">
                        <div className="client-face client-face1">
                            <div className="client-content">
                                <img src={pp} alt="Punjab Police" />
                                <h3>PUNJAB POLICE</h3>
                            </div>
                        </div>
                        <div className="client-face client-face2">
                            <div className="client-content">
                                <p>We ensured the timely and reliable delivery of livestock to Kot Lakhpat Jail, fulfilling their supply needs with consistent quality and efficiency.</p>
                                <a href="https://punjabpolice.gov.pk/" target="_blank" rel="noopener noreferrer">Learn More</a>
                            </div>
                        </div>
                    </div>
                    <div className="client-card">
                        <div className="client-face client-face1">
                            <div className="client-content">
                                <img src={pso} alt="PSO" />
                                <h3>PSO</h3>
                            </div>
                        </div>
                        <div className="client-face client-face2">
                            <div className="client-content">
                                <p>We managed the ceiling work for Pakistan State Oil (PSO), providing high-quality installations for their facilities.</p>
                                <a href="https://psopk.com/" target="_blank" rel="noopener noreferrer">Learn More</a>
                            </div>
                        </div>
                    </div>
                    <div className="client-card">
                        <div className="client-face client-face1">
                            <div className="client-content">
                                <img src={puma} alt="PUMA" />
                                <h3>PUMA PERTROLEUM</h3>
                            </div>
                        </div>
                        <div className="client-face client-face2">
                            <div className="client-content">
                                <p>We completed signage and fabrication work for Puma Petroleum, boosting their brand visibility and infrastructure.</p>
                                <a href="https://www.pumapakistan.com/en" target="_blank" rel="noopener noreferrer">Learn More</a>
                            </div>
                        </div>
                    </div>
                    <div className="client-card">
                        <div className="client-face client-face1">
                            <div className="client-content">
                                <img src={shell} alt="Shell" />
                                <h3>SHELL</h3>
                            </div>
                        </div>
                        <div className="client-face client-face2">
                            <div className="client-content">
                                <p>We executed the signage and civil work for Shell Petroleum, enhancing their operational and branding needs.</p>
                                <a href="https://www.shell.com.pk/" target="_blank" rel="noopener noreferrer">Learn More</a>
                            </div>
                        </div>
                    </div>
                    <div className="client-card">
                        <div className="client-face client-face1">
                            <div className="client-content">
                                <img src={usa} alt="US Embassy" />
                                <h3>US Embassy</h3>
                            </div>
                        </div>
                        <div className="client-face client-face2">
                            <div className="client-content">
                                <p>We managed the renovation of the United States Embassy, delivering high-quality upgrades and enhancements.</p>
                                <a href="https://pk.usembassy.gov/" target="_blank" rel="noopener noreferrer">Learn More</a>
                            </div>
                        </div>
                    </div>
                    <div className="client-card">
                        <div className="client-face client-face1">
                            <div className="client-content">
                                <img src={vertex} alt="Vertex Medical" />
                                <h3>VERTEX MEDICAL</h3>
                            </div>
                        </div>
                        <div className="client-face client-face2">
                            <div className="client-content">
                                <p>We designed and built medical facilities and hospitals for Vertex Medical, enhancing their healthcare infrastructure.</p>
                                <a href="https://vertexmedical.com/" target="_blank" rel="noopener noreferrer">Learn More</a>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default ClientCard;
