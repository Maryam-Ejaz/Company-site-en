import React, { useMemo, useEffect, useRef } from 'react';
import './HomeTeam.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle, faInstagram, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';

const teamMembers = [
  {
    name: "S. Hassan Abdullah",
    title: "Chief Operations Officer",
    imageSrc: "https://picsum.photos/130/130?image=1027",
  },
  {
    name: "S. Hussain Hammad",
    title: "Chief Marketing Officer",
    imageSrc: "https://picsum.photos/130/130?image=839",
  },
  {
    name: "Nisar Ahmad",
    title: "Chief Technical Officer",
    imageSrc: "https://picsum.photos/130/130?image=856",
  },
  {
    name: "Imarn Ahmed",
    title: "Head Fabrication",
    imageSrc: "https://picsum.photos/130/130?image=836",
  },
];

const HomeTeam = () => {
  const memoizedTeamMembers = useMemo(() => teamMembers, []);
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
        el.style.transitionDelay = `${index * 0.3}s`; // Stagger the animation
      }
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section className="team-section">
      <div className="team-container">
        <p className="team-heading">Our Dynamic Team</p>
        <div className="row">
          {memoizedTeamMembers.map((member, index) => (
            <div
              className="col team-member"
              key={index}
              ref={(el) => (teamRefs.current[index] = el)}
            >
              <div className="our-team">
                <div className="picture">
                  <img className="img-fluid" src={member.imageSrc} alt={member.name} />
                </div>
                <div className="team-content">
                  <h3 className="name">{member.name}</h3>
                  <h4 className="title">{member.title}</h4>
                </div>
                <ul className="social">
                  <li><a href="https://www.linkedin.com/feed/"><FontAwesomeIcon icon={faLinkedin} /></a></li>
                  <li><a href="https://www.linkedin.com/feed/"><FontAwesomeIcon icon={faGoogle} /></a></li>
                  <li><a href="https://www.linkedin.com/feed/"><FontAwesomeIcon icon={faInstagram} /></a></li>
                  <li><a href="https://www.linkedin.com/feed/"><FontAwesomeIcon icon={faTwitter} /></a></li>
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default React.memo(HomeTeam);
