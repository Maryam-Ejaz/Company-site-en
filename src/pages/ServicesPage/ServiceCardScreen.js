import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBuilding, faHammer, faBolt, faPaintBrush, faSignHanging } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import './ServiceCardScreen.css';
import { SlideProvider } from '../ServiceSliderDetail/SlideContent';

import house from "../../assets/service-images/house.jpg";
import commercial from "../../assets/service-images/commercial.jpg";
import institutional from "../../assets/service-images/institutional.jpg";
import custom from "../../assets/service-images/custom.jpg";
import shed from "../../assets/service-images/shed.jpg";
import pump from "../../assets/service-images/pump.jpeg";
import peb from "../../assets/service-images/peb.jpg";
import wire from "../../assets/service-images/wire.jpg";
import interior from "../../assets/service-images/interior.png";
import paint from "../../assets/service-images/paint.jpg";
import polish from "../../assets/service-images/polish.jpg";
import al from "../../assets/service-images/al.jpg";
import wood from "../../assets/service-images/wood.jpg";
import pole from "../../assets/service-images/pole.jpg";
import gate from "../../assets/service-images/gate.jpg";
import indoor from "../../assets/service-images/ndoor.jpg";
import puma from "../../assets/service-images/pumajpg.jpg";
import bridge from "../../assets/service-images/bridge.jpg";


const services = [
    {
        icon: faBuilding,
        title: 'Construction',
        description: 'We offer comprehensive construction services, specializing in various types of buildings including residential, commercial, institutional, and custom projects. Our commitment to quality ensures that every project meets the highest standards of durability and functionality.',
        slides: [
          {
            imageUrl: house, // Replace with actual image URL
            name: 'Residential Construction',
            description: 'Expertly design and build homes that cater to your personal needs and style, ensuring comfort and aesthetic appeal.',
          },
          {
            imageUrl: commercial, // Replace with actual image URL
            name: 'Commercial Construction',
            description: 'Constructed office complexes, retail spaces, and industrial facilities with a focus on durability and functionality.',
          },
          {
            imageUrl: institutional, // Replace with actual image URL
            name: 'Institutional Construction',
            description: 'Built schools, hospitals, and government facilities designed to serve the community efficiently and safely.',
          },
          {
            imageUrl: custom, // Replace with actual image URL
            name: 'Custom Construction',
            description: 'Tailor-made construction solutions to create unique and stylish living or working spaces based on your specifications.',
          },
        ],
      },
      {
        icon: faHammer,
        title: 'Steel Fabrication',
        description: 'Specializing in steel fabrication for various applications, including pre-engineered buildings, agricultural sheds, petrol pump canopies, pedestrian bridges, and light poles. Our services are dedicated to meeting diverse industry demands with precision and excellence.',
        slides: [
          {
            imageUrl: peb, // Replace with actual image URL
            name: 'Pre-Engineered Buildings',
            description: 'Durable and versatile steel structures ideal for various industrial applications.',
          },
          {
            imageUrl: shed, // Replace with actual image URL
            name: 'Agricultural Sheds',
            description: 'Robust and hygienic environments for livestock management in the agricultural sector.',
          },
          {
            imageUrl: pump, // Replace with actual image URL
            name: 'Petrol Pump Canopies',
            description: 'Strength and aesthetic appeal combined to provide reliable shelter for fueling stations.',
          },
          {
            imageUrl: bridge, // Replace with actual image URL
            name: 'Pedestrian Bridges',
            description: 'Safe and durable crossings for both urban and rural settings.',
          },
          {
            imageUrl: wire, // Replace with actual image URL
            name: 'Miscellaneous',
            description: 'We also provide barbed wire fencing, light pole installation, and solar structure setup services.',
          },
        
        ],
      },
      {
        icon: faPaintBrush,
        title: 'Interior Works',
        description: 'Transforming spaces into functional and aesthetically pleasing environments with our expert interior design, painting, polishing, aluminum, and woodwork services. We ensure every detail meets your vision and enhances the overall ambiance of your space.',
        slides: [
          {
            imageUrl: interior, // Replace with actual image URL
            name: 'Interior Design',
            description: 'Customized designs that reflect personal style and meet specific needs.',
          },
          {
            imageUrl: paint, // Replace with actual image URL
            name: 'Painting',
            description: 'A wide range of color options and finishes to enhance the beauty of your interiors.',
          },
          {
            imageUrl: polish, // Replace with actual image URL
            name: 'Polishing',
            description: 'Expert polishing techniques that add a lustrous shine to your surfaces.',
          },
          {
            imageUrl: al, // Replace with actual image URL
            name: 'Aluminum Work',
            description: 'Modern and sleek aluminum fixtures for a contemporary look.',
          },
          {
            imageUrl: wood, // Replace with actual image URL
            name: 'Woodwork',
            description: 'Crafting bespoke wooden furniture and fixtures for a timeless appearance.',
          },
        ],
      },
      {
        icon: faBolt,
        title: 'Electrical Services',
        description: 'Providing comprehensive electrical services, from installation to maintenance, ensuring safety and efficiency for residential, commercial, and industrial needs. Our expertise includes wiring, lighting, and power systems designed to meet all your electrical requirements.',
        slides: [
          {
            imageUrl: pole, // Replace with actual image URL
            name: 'Lighting Solutions',
            description: 'Innovative lighting designs to enhance visibility and ambiance.',
          },
          {
            imageUrl: gate, // Replace with actual image URL
            name: 'Electric Gates',
            description: 'Reliable power systems to ensure uninterrupted electrical supply.',
          },
        ],
      },
      {
        icon: faSignHanging,
        title: 'Signage Boards',
        description: 'Expertly crafted signage solutions to enhance visibility and branding. We provide high-quality boards for various applications, including commercial and public spaces, ensuring clear communication and effective promotion.',
        slides: [
          {
            imageUrl: indoor, // Replace with actual image URL
            name: 'Indoor Signage',
            description: 'Custom indoor signs that guide and inform within buildings.',
          },
          {
            imageUrl: puma, // Replace with actual image URL
            name: 'Outdoor Signage',
            description: 'Durable outdoor signs designed for visibility and weather resistance.',
          },
        ],
      },
    ];

const ServiceCardScreen = () => {
  return (
    <div className="service-card-container">
      <p className="service-card-text">Our Services</p>
      <div className="service-card-row">
        {services.map((service, index) => {
          // Encode slides data to a query string
          const slidesQuery = encodeURIComponent(JSON.stringify(service.slides));

          return (
            <div key={index} className="service-card">
              <FontAwesomeIcon icon={service.icon} size="3x" className="service-icon" />
              <h2>{service.title}</h2>
              <p>{service.description}</p>
              <Link
                to={`/slider-detail?slides=${slidesQuery}`}
                className="learn-more-button"
              >
                Learn More
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ServiceCardScreen;
