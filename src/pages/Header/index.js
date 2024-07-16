import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import logo from "../../assets/logo-en.jpg";

const Headers = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 5rem;
  background: transparent;
  color: var(--white);
  position: fixed;
  top: 1rem;
  left: 0;
  right: 0;
  z-index: 1000;
  transition: background 0.5s ease, padding 0.5s ease, backdrop-filter 0.5s ease, color 0.5s ease;
  @media only screen and (max-width: 64em) {
    padding: 0.5rem 3rem;
  }
  @media only screen and (max-width: 40em) {
    padding: 0.5rem 1.5rem;
  }
`;

const Logo = styled(Link)`
  display: flex;
  align-items: center;
  width: auto;
  height: auto;
  cursor: pointer;
  img {
    width: 4rem;
    height: auto;
    margin-right: 0.5rem;
    border-radius: 50%;
  }
  h3 {
    color: inherit; /* Make text color inherit */
    margin: 0;
  }
`;

const Nav = styled.nav`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1.5rem;
  max-width: 40rem;
  margin-left: 2rem;
  transition: all 0.3s;
  @media only screen and (max-width: 48em) {
    display: none;
  }
  a {
    font-weight: 600;
    line-height: 1.5;
    color: inherit; /* Make text color inherit */
    position: relative;
    &::after {
      content: "";
      position: absolute;
      bottom: -4px;
      left: 0;
      height: 2px;
      width: 0;
      background: transparent;
      transition: width 0.5s;
    }
    &:not(:last-child):hover::after {
      width: 100%;
      background: var(--purple);
    }
  }
`;

const Button = styled(Link)`
  background-color: var(--purple);
  padding: 0.5rem 1rem;
  border-radius: 20px;
  color: var(--white);
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s;
  &:hover {
    transform: scale(1.1);
  }
  &:focus {
    transform: scale(0.9);
  }
  @media only screen and (max-width: 40em) {
    font-size: 1.1rem;
    &:hover {
      transform: none;
    }
    &:focus {
      transform: none;
    }
  }
`;

const Header = () => {
  const ref = useRef(null);
  const [isScrolled, setIsScrolled] = useState(false);

  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    const element = ref.current;

    ScrollTrigger.create({
      trigger: element,
      start: "top top+=1",
      end: "+=200",
      onUpdate: (self) => {
        if (self.progress > 0.1) {
          element.style.background = "rgba(255, 255, 255, 0.1)";
          element.style.backdropFilter = "blur(10px)";
          element.style.padding = "0.5rem 2rem";
          element.style.color = "var(--white)";
        } else {
          element.style.background = "transparent";
          element.style.backdropFilter = "none";
          element.style.padding = "1rem 5rem";
          element.style.color = "var(--white)";
        }
      },
    });

    const mq = window.matchMedia("(max-width: 40em)");
    if (mq.matches) {
      gsap.to(element, {
        position: "fixed",
        top: "1rem",
        left: "0",
        right: "0",
        padding: "0.5rem 2.5rem",
        borderRadius: "0 0 50px 50px",
        duration: 1,
        ease: "power1.out",
        scrollTrigger: {
          trigger: element,
          start: "bottom+=200 top",
          end: "+=100",
          scrub: true,
        },
      });
    } else {
      gsap.to(element, {
        position: "fixed",
        top: "1rem",
        left: "3rem",
        right: "3rem",
        padding: "0.5rem 2rem",
        borderRadius: "50px",
        duration: 1,
        ease: "power1.out",
        scrollTrigger: {
          trigger: element,
          start: "bottom+=300 top",
          end: "+=250",
          scrub: true,
        },
      });
    }

    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const triggerPosition1 = 3000; // Change this value based on your white background position
      const triggerPosition2 = 4900; // Change this value based on where you want to revert back to white
      if (scrollPosition > triggerPosition1 && scrollPosition < triggerPosition2) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Headers ref={ref} style={{ color: isScrolled ? 'black' : 'var(--white)' }}>
      <Logo to="/" style={{ color: isScrolled ? 'black' : 'var(--white)' }}>
        <img src={logo} alt="Engineers Nest" />
        <h3>Engineers Nest</h3>
      </Logo>
      <Nav style={{ color: isScrolled ? 'black' : 'var(--white)' }}>
        <Link to="/" style={{ color: isScrolled ? 'black' : 'var(--white)' }}>Home</Link>
        <Link to="/about" style={{ color: isScrolled ? 'black' : 'var(--white)' }}>About</Link>
        <Link to="/services" style={{ color: isScrolled ? 'black' : 'var(--white)' }}>Services</Link>
        <Link to="/portfolio" style={{ color: isScrolled ? 'black' : 'var(--white)' }}>Portfolio</Link>
        <Link to="/clients" style={{ color: isScrolled ? 'black' : 'var(--white)' }}>Clients</Link>
        <Link to="/license" style={{ color: isScrolled ? 'black' : 'var(--white)' }}>License</Link>
        <Button to="/contact" style={{ color: 'var(--white)' }}>Contact us</Button>
      </Nav>
    </Headers>
  );
};

export default Header;
