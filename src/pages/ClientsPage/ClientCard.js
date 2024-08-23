import React, { useEffect, useRef } from 'react';
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
    const teamRefs = useRef([]);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('fade-in');
                        observer.unobserve(entry.target);
                    }
                });
            },
            {
                threshold: 0.1, // Trigger when 10% of the element is in view
            }
        );

        teamRefs.current.forEach((el, index) => {
            if (el) {
                observer.observe(el);
                el.style.transitionDelay = `${index * 0.1}s`; // Stagger the animation
            }
        });

        return () => observer.disconnect();
    }, []);

    return (
        <div className="client-card-container-main">
            <p className="page-component-heading-client">Our Clients</p>
            <div className="client-card-container">
                <div className="client-card-row">
                    {[
                        { src: caa, alt: "PEC", title: "CAA", description: "Executed multiple projects for the Civil Aviation Authority of Pakistan, encompassing a range of specialized construction and renovation tasks.", link: "https://caapakistan.com.pk/" },
                        { src: din, alt: "DIN GROUP", title: "DIN GROUP", description: "Handled the entire interior design and renovation for Din Group, ensuring a comprehensive and high-quality finish.", link: "https://www.dingroup.com/" },
                        { src: go, alt: "GO", title: "GO", description: "Completed comprehensive signage and ceiling projects for Go Petroleum at multiple locations throughout Pakistan.", link: "https://www.gno.com.pk/" },
                        { src: hsc, alt: "Habib", title: "HABIB CONSTRUCTION", description: "Managed both construction and interior design projects for the office block of Habib Construction, delivering a cohesive and functional workspace.", link: "https://www.hcs.com.pk/" },
                        { src: interwood, alt: "INTERWOOD", title: "INTERWOOD", description: "We performed a range of interior work for Interwood, including custom cabinetry, stylish flooring, and modern furnishings.", link: "https://interwood.pk/" },
                        { src: nishat, alt: "NISHAT", title: "NISHAT MILLS", description: "We executed comprehensive interior work for the Nishat Group, delivering high-quality finishes and design solutions.", link: "https://nishatmillsltd.com/" },
                        { src: pcsir, alt: "PCSIR", title: "PCSIR", description: "We performed maintenance work related to construction for the Pakistan Council of Scientific and Industrial Research (PCSIR), ensuring the upkeep of their facilities.", link: "https://www.pcsir.gov.pk/" },
                        { src: pel, alt: "PEL", title: "PEL", description: "We collaborated with Pakistan Electron Limited (PEL) on various projects, delivering quality solutions and services.", link: "https://pel.com.pk/" },
                        { src: pp, alt: "Punjab Police", title: "PUNJAB POLICE", description: "We ensured the timely and reliable delivery of livestock to Kot Lakhpat Jail, fulfilling their supply needs with consistent quality and efficiency.", link: "https://punjabpolice.gov.pk/" },
                        { src: pso, alt: "PSO", title: "PSO", description: "We managed the ceiling work for Pakistan State Oil (PSO), providing high-quality installations for their facilities.", link: "https://psopk.com/" },
                        { src: puma, alt: "PUMA", title: "PUMA PERTROLEUM", description: "We completed signage and fabrication work for Puma Petroleum, boosting their brand visibility and infrastructure.", link: "https://www.pumapakistan.com/en" },
                        { src: shell, alt: "Shell", title: "SHELL", description: "We executed the signage and civil work for Shell Petroleum, enhancing their operational and branding needs.", link: "https://www.shell.com.pk/" },
                        { src: usa, alt: "US Embassy", title: "US Embassy", description: "We managed the renovation of the United States Embassy, delivering high-quality upgrades and enhancements.", link: "https://pk.usembassy.gov/" },
                        { src: vertex, alt: "Vertex Medical", title: "VERTEX MEDICAL", description: "We designed and built medical facilities and hospitals for Vertex Medical, enhancing their healthcare infrastructure.", link: "https://vertexmedical.com/" }
                    ].map((client, index) => (
                        <div className="client-card" ref={el => teamRefs.current[index] = el} key={client.title}>
                            <div className="client-face client-face1">
                                <div className="client-content">
                                    <img src={client.src} alt={client.alt} />
                                    <h3>{client.title}</h3>
                                </div>
                            </div>
                            <div className="client-face client-face2">
                                <div className="client-content">
                                    <p>{client.description}</p>
                                    <a href={client.link} target="_blank" rel="noopener noreferrer">Learn More</a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ClientCard;
