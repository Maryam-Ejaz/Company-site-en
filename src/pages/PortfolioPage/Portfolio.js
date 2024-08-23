import {React, useLayoutEffect} from 'react';
import BentoGrid from './BentoGrid';
import ProjectComponent from './ProjectComponent';
import FinalHomeFooter from '../HomePage/FinalHomeFooter';
import HomeFooter from '../HomePage/HomeFooter';
import { useLocation } from 'react-router-dom';


import aiia from "../../assets/portfolio/aiia1.jpg";
import aiia0 from "../../assets/portfolio/aiia0.jpg";
import aiia1 from "../../assets/portfolio/aiia2.jpg";
import aiia2 from "../../assets/portfolio/aiia3.jpg";
import aiia3 from "../../assets/portfolio/aiia4.jpg";
import aiia4 from "../../assets/portfolio/aiia5.jpg";
import aiia5 from "../../assets/portfolio/aiia6.jpg";
import aiia6 from "../../assets/portfolio/aiia7.jpg";
import aiia7 from "../../assets/portfolio/aiia8.jpg";
import masjidShed from "../../assets/portfolio/masjidShed.jpg";
import gm0 from "../../assets/portfolio/gm0.jpg";
import gm1 from "../../assets/portfolio/gm1.jpg";
import gm2 from "../../assets/portfolio/gm2.jpg";
import gm3 from "../../assets/portfolio/gm3.jpg";
import gm4 from "../../assets/portfolio/gm4.jpg";
import shed0 from "../../assets/portfolio/shd0.jpg";
import shed1 from "../../assets/portfolio/shed1.jpg";
import shed2 from "../../assets/portfolio/shed2.jpg";
import ruder  from "../../assets/portfolio/ruder.jpg";
import ruder1 from "../../assets/portfolio/ruder1.jpg";
import ruder2 from "../../assets/portfolio/ruder3.jpg";
import wire0 from "../../assets/portfolio/wire0.jpg";
import wire1 from "../../assets/portfolio/wire1.jpg";
import wh0 from "../../assets/portfolio/wh0.jpg";
import wh1 from "../../assets/portfolio/wh1.jpg";
import wh2 from "../../assets/portfolio/wh2.jpg";
import wh3 from "../../assets/portfolio/wh4.jpg";
import house0 from "../../assets/portfolio/house0.jpg";
import house1 from "../../assets/portfolio/house2.jpg";
import house2 from "../../assets/portfolio/house3.jpg";
import house3 from "../../assets/portfolio/house4.jpg";
import house4 from "../../assets/portfolio/house5.jpg";
import house5 from "../../assets/portfolio/house6.jpg";
import house6 from "../../assets/portfolio/house7.jpg";
import house7 from "../../assets/portfolio/house8.jpg";
import jail from "../../assets/portfolio/jai;.png";
import house_1 from "../../assets/portfolio/house_1.jpg";
import house_2 from "../../assets/portfolio/house_2.jpg";
import house_3 from "../../assets/portfolio/house_3.jpg";
import house_4 from "../../assets/portfolio/house_4.jpg";
import puma from "../../assets/service-images/pump.jpeg";
import ae1 from "../../assets/portfolio/ae0.jpg";
import ae2 from "../../assets/portfolio/ae1.jpg";
import ae3 from "../../assets/portfolio/ae2.jpg";
import go from "../../assets/portfolio/go.jpeg";
import pso from "../../assets/portfolio/pso_.jpg";
import shell from "../../assets/portfolio/shell_.jpg";
import vertex from "../../assets/portfolio/med.jpg";
import signage from "../../assets/portfolio/signage.jpg";

const projects = [
  { type: 'text-image', heading:"Allama Iqbal Inernational Airport Projects", text: 'ENGINEERSNEST undertook a range of specialized projects at Allama Iqbal International Airport, including the construction of a secure gunman post, the fabrication of aluminum cargo sheds, the installation of aluminum partitions in a hall, and extensive interior work. These projects encompassed designing and building durable structures, implementing secure storage solutions, creating flexible space management systems, and enhancing the overall interior environment with high-quality finishes and functional upgrades.', images: [aiia, aiia0, aiia1, aiia2, aiia3, aiia4, aiia5, aiia6, aiia7], tags: [
    'Fabrication',
    'Design',
    'Construction',
    'Secure Structures',
    'Durable Materials',
    'Space Management',
    'Interior Renovation',
    'Aluminum Partition',
    'Woodwork',
    'Custom Solutions'
  ] },
  { type: 'image-text', heading:"Jamia Masjid Shed Construction", text: 'We constructed a large shed at the Jamia Masjid of Allama Iqbal International Airport. This project involved designing and building an approximately 800 square feet shed to provide a functional and aesthetically pleasing space for the mosque. The shed was engineered to handle varying weather conditions and integrate seamlessly with the surrounding infrastructure, ensuring durability and functionality for worshippers and airport staff. 2', images: [masjidShed], tags: [
    'Shed Construction',
    'Structural Design',
    'Weather-Resistant Material',
    'Functional Space',
    'Mosque Facilities',
    'Durable Materials',
    'Custom Building',
    'Integration with Existing Infrastructure'
  ]},
  { type: 'text-image', heading:"General Manager Office Renovation", text: 'Undertook a comprehensive renovation of the general manger office at Allama Iqbal International Airport. This project involved a full overhaul of the office space, including the installation of elegant wooden flooring, fresh painting, and various interior upgrades to enhance functionality and aesthetics. The renovation aimed to modernize the office environment, ensuring a professional and comfortable workspace for the General Manager and staff.', images: [gm0, gm1, gm2, gm3,gm4], tags: [
    'Office Renovation',
    'Wooden Flooring',
    'Interior Upgrades',
    'Painting and Finishing',
    'Functional Enhancements',
    'Modernization',
    'Professional Workspace',
    'Aesthetic Improvements'
  ] },
  { type: 'image-text', heading:"Cargo and Entrance Booth Sheds", text: "At Allama Iqbal International Airport, ENGINEERSNEST delivered a range of aluminum sheds, including those for entrance booths in the parking area, providing essential shelter for airport staff. Additionally, three other aluminum sheds were expertly fabricated to meet various operational requirements, offering robust and weather-resistant storage solutions integrated seamlessly into the airport's infrastructure.", images: [shed0,shed1, shed2], tags: [
    'Aluminum Fabrication',
    'Entrance Booth Sheds',
    'Parking Area Shelters',
    'Weather-Resistant',
    'Custom Sizes',
    'Secure Facilities',
    'Cargo Storage',
    'Durable Construction'
  ]},
  { type: 'text-image', heading:"Signage Boards", text: "ENGINEERSNEST executed a comprehensive signage project at Allama Iqbal International Airport, producing 40 to 50 sign boards for the Civil Aviation Authority to improve wayfinding and information at the airport. In addition, a substantial gantry sign board, towering nearly 30 feet, was fabricated to ensure high visibility and effective communication from a distance, enhancing the airport's operational and branding needs.", images: [signage], tags: [
    'Signage Boards',
    'Fabrication',
    'Large-Scale Signage',
  ] },
  { type: 'image-text', heading:"Airport Ruder Room Renovation", text: "Enigeersnest carried out a significant renovation of the ruder room at Allama Iqbal International Airport by installing advanced anti-static tiles imported from Germany. These tiles are designed to manage and prevent static electricity, which is crucial for protecting sensitive electronic equipment and ensuring optimal operational conditions within the room.", images: [ruder, ruder1, ruder2], tags: [
    'Anti-Static Tiles',
    'Imported Flooring',
    'Specialized Renovation',
  ]},
  { type: 'text-image', heading:"Boundry with Barbed Wire", text: "We executed a major security upgrade at a farm house by installing approximately 1400 running feet of barbed wire. This installation was designed to enhance the perimeter security by creating a strong physical barrier that effectively deters unauthorized access. Our meticulous installation ensures durability and long-term effectiveness, significantly boosting the safety and protection of the premises.", images: [wire0, wire1], tags: [
    'Barbed Wire Installation',
    'Physical Barrier',
    'Security Upgrade',
    'Durable Installation',
    'High-Security Fencing'
  ]},
  {
    type: 'image-text',
    heading: "Warehouse Shed Construction in Kalam",
    text: "We successfully completed the construction of a 1200 sq/ft warehouse shed for our client, Mr. Abdul Qavi Butt from PEL, in Kalam. Our team managed the entire project from fabrication to construction, delivering a robust and functional storage solution. This project included custom fabrication and meticulous construction to ensure durability and efficiency, tailored to the client's specific needs.",
    images: [wh0, wh1, wh2, wh3], 
    tags: [
        'Shed Construction',
        'Fabrication',
        'Custom Construction',
        'Durable Storage Solutions',
    ]
},
{
  type: 'text-image',
  heading: "Puma Petroleum Canopy and Signage Work",
  text: "We undertook the fabrication of a petrol pump canopy for PUMA Petroleum in Uch Sharif, which included the complete signage work for the canopy. The project involved creating a custom-designed, durable canopy that not only provides essential protection for the petrol station but also enhances its aesthetic appeal. The signage was carefully crafted and installed to ensure high visibility and effective branding, aligning with PUMA Petroleum's corporate identity. Our team ensured that the canopy and signage met all operational and safety standards, providing a professional and functional solution for the petrol station.",
  images: [puma], 
  tags: [
      'Petrol Pump Canopy',
      'Signage Work',
      'Fabrication',
      'Durable Canopy',
      'Branding and Visibility',
      'Custom Design',
      'Professional Installation',
      'Safety Standards'
  ]
},
{
    type: 'image-text',
    heading: "House Renovation",
    text: "We proudly completed a sophisticated high glass polish project at the newly constructed residence of Mian Mansha, CEO of Nishat, in Lahore. Our skilled team employed advanced polishing techniques to achieve an exceptional mirror-like finish on all glass surfaces, enhancing the residence’s overall elegance and luxury. The process involved multiple stages of meticulous polishing to ensure a flawless, reflective surface that not only boosts the aesthetic appeal but also highlights the opulence of the property. This project underscores our commitment to delivering top-tier craftsmanship and attention to detail, ensuring a visually stunning result that complements the sophisticated design of the residence.",
    images: [house0, house2, house3, house4, house5, house6, house7, house1], // Add appropriate image references here
    tags: [
        'High Glass Polish',
        'Luxury Residences',
        'Mirror-Like Finish',
        'Advanced Techniques',
        'Meticulous Craftsmanship',
        'Aesthetic Enhancement',
        'Reflective Surfaces',
        'Sophisticated Design'
    ]
},

{
    type: 'text-image',
    heading: "Vegetable Supply for Central Jail",
    text: "We executed a large-scale vegetable supply project for Central Jail Kot Lakh Pat, where we delivered over 125,000 kg of essential vegetables, including tomatoes, ginger, and onions, from January to June 2021. As a dependable general order supplier, we managed the entire procurement and delivery process with efficiency and reliability. This project underscored our capability to handle substantial orders and maintain high standards of quality and service in the supply chain.",
    images: [jail], // Add appropriate image references here
    tags: [
        'Vegetable Supply',
        'General Order Supplier',
        'Large-Scale Procurement',
    ]
},
{
  type: 'image-text',
  heading: "Din Group House Renovation",
  text: "We proudly completed a sophisticated high glass polish project at the newly constructed residence of the CEO of DIN group, in Lahore. Our skilled team employed advanced polishing techniques to achieve an exceptional mirror-like finish on all glass surfaces, enhancing the residence’s overall elegance and luxury. The process involved multiple stages of meticulous polishing to ensure a flawless, reflective surface that not only boosts the aesthetic appeal but also highlights the opulence of the property. This project underscores our commitment to delivering top-tier craftsmanship and attention to detail, ensuring a visually stunning result that complements the sophisticated design of the residence.",
  images: [house_1, house_2, house_3], // Add appropriate image references here
  tags: [
      'Renovation',
      'Advanced Techniques',
      'Meticulous Craftsmanship',
      'Aesthetic Enhancement',
      'Reflective Surfaces',
      'Sophisticated Design'
  ]
},
{
  type: 'text-image',
  heading: "Shell Petroleum Shed and Signage",
  text: "We successfully completed the design and installation of the shed and signage for a Shell Petroleum station. Our team meticulously crafted and installed the shed structure, ensuring durability and adherence to safety standards. The signage was designed with a focus on visibility and brand alignment, utilizing high-quality materials to ensure longevity and resistance to weather conditions. This project demonstrates our expertise in combining functionality with aesthetic appeal, providing a robust and visually appealing solution that enhances the overall customer experience at the station.",
  images: [shell], // Add appropriate image references here
  tags: [
      'Construction',
      'Signage Design',
      'Durability',
      'Safety Standards',
      'Brand Alignment',
      'Customer Experience'
  ]
},
{
  type: 'image-text',
  heading: "Renovation of American Embassy",
  text: "We successfully undertook the renovation project for the American Embassy, focusing on enhancing both the functionality and security of the premises. Our team executed the project with precision, ensuring that all renovations adhered to the stringent safety and security standards required for diplomatic facilities. The renovation included upgrading the interior and exterior structures, implementing modern design elements, and improving the overall energy efficiency of the building. This project highlights our capability to handle high-security environments while delivering exceptional quality and attention to detail.",
  images: [ae1,ae2,ae3], // Add appropriate image references here
  tags: [
      'Renovation',
      'Security Standards',
      'Modern Design',
      'Energy Efficiency',
      'Diplomatic Facility',
      'Attention to Detail'
  ]
},
{
  type: 'text-image',
  heading: "Projects with Interwood",
  text: "We have successfully partnered with Interwood to deliver high-quality wooden work projects for various esteemed clients. Our collaboration has involved designing, crafting, and installing a wide range of wooden elements, including bespoke furniture, cabinetry, and interior decor. Each project was tailored to meet the unique requirements of our clients, ensuring both functionality and aesthetic excellence. Through our meticulous attention to detail and commitment to using premium materials, we have consistently delivered results that exceed expectations and enhance the living and working environments of our clients.",
  images: [house_4], // Add appropriate image references here
  tags: [
      'Wooden Work',
      'Custom Furniture',
      'Interior Decor',
      'Premium Materials',
      'Bespoke Design',
      'Client Satisfaction'
  ]
},
{
  type: 'image-text',
  heading: "GO Petroleum Pumps",
  text: "We successfully completed the signage and ceiling work across various GO petroleum pump sites in Pakistan. Our team was tasked with creating and installing durable signage that aligns with the brand's identity, as well as executing ceiling work that enhances the aesthetic and functionality of the service stations. The project required meticulous attention to detail, ensuring that all work was completed to the highest standards across multiple locations. This project demonstrates our ability to manage and execute large-scale branding and construction efforts with consistent quality across diverse geographical locations.",
  images: [go], // Add appropriate image references here
  tags: [
      'Signage',
      'Ceiling Work',
      'Brand Identity',
      'Construction',
  ]
},
{
  type: 'text-image',
  heading: "Fascia and Ceiling Work at PSO",
  text: "We have successfully completed the fascia and ceiling work at various Pakistan State Oil (PSO) service stations. This project involved the design, fabrication, and installation of high-quality fascia panels and ceiling structures that not only align with PSO's brand identity but also enhance the overall appearance and functionality of the service stations. Our team ensured that each installation was carried out with precision and attention to detail, meeting the rigorous standards required for such high-traffic commercial environments. The result is a modern and cohesive look that reflects PSO's commitment to excellence and customer satisfaction.",
  images: [pso], // Add appropriate image references here
  tags: [
      'Fascia Work',
      'Ceiling Work',
      'PSO',
      'Service Station',
      'Brand Identity',
      'Commercial Installation'
  ]
},
{
  type: 'image-text',
  heading: "Facilities and Hospitals Construction for Vertex Medical",
  text: "We have successfully constructed a range of facilities and hospitals across Punjab for Vertex Medical. Our work involved the development of state-of-the-art medical infrastructure designed to meet the highest standards of healthcare. Each project was executed with a focus on precision, quality, and functionality, ensuring that the facilities serve the needs of patients and medical professionals alike. From modern hospital complexes to specialized medical centers, we have delivered solutions that enhance the healthcare landscape in the region. This extensive portfolio reflects our commitment to building reliable and advanced healthcare infrastructure for the betterment of the community.",
  images: [vertex], // Add appropriate image references here
  tags: [
      'Construction',
      'Healthcare Infrastructure',
      'Hospital Development',
      'Quality Standards',
      'Medical Facilities',
      'Community Health'
  ]
},




];

const Portfolio = () => {
  const location = useLocation();

  // scroll to top of page after a page transition.
  useLayoutEffect(() => {
      document.documentElement.scrollTo({ top:0, left:0, behavior: "instant" });
  }, [location.pathname]);

  return (
    <div className='homeMainDiv'>
      <BentoGrid id="section1"/>
      {projects.map((project, index) => (
        <ProjectComponent key={index} type={project.type} heading = {project.heading} text={project.text} images={project.images} tags={project.tags} />
      
      ))}
      <HomeFooter/>
      <FinalHomeFooter/>
    </div>
  );
};

export default Portfolio;
