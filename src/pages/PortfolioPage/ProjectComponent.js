import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import 'bootstrap'; // Import Bootstrap JS
import './PortfolioProjectComponent.css';

const highlightKeywords = (text) => {
  const keywords = [
    // { word: 'secure gunman post', style: 'highlight' },
    // { word: 'aluminum cargo sheds', style: 'highlight' },
    // { word: 'aluminum partitions', style: 'highlight' },
    // { word: 'interior work', style: 'highlight' },
    // { word: '800 square feet shed', style: 'highlight'},
    // { word: 'overhaul of the office space', style: 'highlight'},
    // { word: 'entrance booths', style: 'highlight'},
    // { word: 'three other aluminum sheds', style: 'highlight'},
    // { word: '40 to 50 sign boards', style: 'highlight'},
    // { word: 'sign board, towering nearly 30 feet', style: 'highlight'},
    // { word: 'anti-static tiles imported from Germany', style: 'highlight'},
    // { word: '1400 running feet of barbed wire', style: 'highlight'},
    // { word: 'a 1200 sq/ft warehouse shed', style: 'highlight'},
    // { word: 'signage was carefully crafted and installed', style: 'highlight'},
    // { word: 'custom-designed, durable canopy', style: 'highlight'},
    // { word: 'high glass polish', style: 'highlight'},
    // { word: 'large-scale vegetable supply', style: 'highlight'},
  ];

  keywords.forEach(({ word, style }) => {
    const regex = new RegExp(`(${word})`, 'gi');
    text = text.replace(regex, `<span class="${style}">$1</span>`);
  });

  return text;
};

const Tag = ({ text }) => (
  <div className="tag">
    {text}
  </div>
);


// const ProjectComponent = ({ type, heading, text, images, tags }) => {
//   const highlightedText = highlightKeywords(text);

//   return (
//     <div className="flex-container">
//       {type === 'text-image' ? (
//         <>
//           <div className="left-column">
//             <p className="ProjrctHeading">{heading}</p>
//             <p className="ProjrctText" dangerouslySetInnerHTML={{ __html: highlightedText }} />
//             <div className="tags-container">
//               {tags.map((tag, index) => (
//                 <Tag key={index} text={tag} />
//               ))}
//             </div>
//           </div>
//           <div className="right-column">
//             <div id="carouselExampleFade" className="carousel slide carousel-fade carousel-container">
//               <div className="carousel-indicators">
//                 {images.map((image, index) => (
//                   <button
//                     key={index}
//                     type="button"
//                     data-bs-target="#carouselExampleFade"
//                     data-bs-slide-to={index}
//                     className={index === 0 ? 'active' : ''}
//                     aria-current={index === 0 ? 'true' : undefined}
//                     aria-label={`Slide ${index + 1}`}
//                   ></button>
//                 ))}
//               </div>
//               <div className="carousel-inner">
//                 {images.map((image, index) => (
//                   <div key={index} className={`carousel-item ${index === 0 ? 'active' : ''}`}>
//                     <img src={image} className="carousel-image" alt={`Project ${index}`} />
//                   </div>
//                 ))}
//               </div>
//               <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
//                 <span className="carousel-control-prev-icon" aria-hidden="true"></span>
//                 <span className="visually-hidden">Previous</span>
//               </button>
//               <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
//                 <span className="carousel-control-next-icon" aria-hidden="true"></span>
//                 <span className="visually-hidden">Next</span>
//               </button>
//             </div>
//           </div>
//         </>
//       ) : (
//         <>
//           <div className="right-column">
//             <div id="carouselExampleIndicators" className="carousel slide carousel-container">
//               <div className="carousel-indicators">
//                 {images.map((image, index) => (
//                   <button
//                     key={index}
//                     type="button"
//                     data-bs-target="#carouselExampleIndicators"
//                     data-bs-slide-to={index}
//                     className={index === 0 ? 'active' : ''}
//                     aria-current={index === 0 ? 'true' : undefined}
//                     aria-label={`Slide ${index + 1}`}
//                   ></button>
//                 ))}
//               </div>
//               <div className="carousel-inner">
//                 {images.map((image, index) => (
//                   <div key={index} className={`carousel-item ${index === 0 ? 'active' : ''}`}>
//                     <img src={image} className="carousel-image" alt={`Project ${index}`} />
//                   </div>
//                 ))}
//               </div>
//               <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
//                 <span className="carousel-control-prev-icon" aria-hidden="true"></span>
//                 <span className="visually-hidden">Previous</span>
//               </button>
//               <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
//                 <span className="carousel-control-next-icon" aria-hidden="true"></span>
//                 <span className="visually-hidden">Next</span>
//               </button>
//             </div>
//           </div>
//           <div className="left-column">
//             <p className="ProjrctHeading">{heading}</p>
//             <p className="ProjrctText" dangerouslySetInnerHTML={{ __html: highlightedText }} />
//             <div className="tags-container">
//               {tags.map((tag, index) => (
//                 <Tag key={index} text={tag} />
//               ))}
//             </div>
//           </div>
//         </>
//       )}
//     </div>
//   );
// };

const ProjectComponent = ({ type, heading, text, images, tags }) => {
  const highlightedText = highlightKeywords(text);

  return (
    <div className={`flex-container ${type === 'text-image' ? 'text-image' : 'image-text'}`}>
      {type === 'text-image' ? (
        <>
          <div className="left-column">
            <p className="ProjrctHeading">{heading}</p>
            <p className="ProjrctText" dangerouslySetInnerHTML={{ __html: highlightedText }} />
            <div className="tags-container">
              {tags.map((tag, index) => (
                <Tag key={index} text={tag} />
              ))}
            </div>
          </div>
          <div className="right-column">
            <div id={`carouselTextImage-${heading.replace(/\s+/g, '-')}`} className="carousel slide carousel-fade carousel-container">
              <div className="carousel-indicators">
                {images.map((image, index) => (
                  <button
                    key={index}
                    type="button"
                    data-bs-target={`#carouselTextImage-${heading.replace(/\s+/g, '-')}`}
                    data-bs-slide-to={index}
                    className={index === 0 ? 'active' : ''}
                    aria-current={index === 0 ? 'true' : undefined}
                    aria-label={`Slide ${index + 1}`}
                  ></button>
                ))}
              </div>
              <div className="carousel-inner">
                {images.map((image, index) => (
                  <div key={index} className={`carousel-item ${index === 0 ? 'active' : ''}`}>
                    <img src={image} className="carousel-image" alt={`Project ${index}`} />
                  </div>
                ))}
              </div>
              <button className="carousel-control-prev" type="button" data-bs-target={`#carouselTextImage-${heading.replace(/\s+/g, '-')}`} data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button className="carousel-control-next" type="button" data-bs-target={`#carouselTextImage-${heading.replace(/\s+/g, '-')}`} data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
              </button>
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="right-column">
            <div id={`carouselImageText-${heading.replace(/\s+/g, '-')}`} className="carousel slide carousel-container">
              <div className="carousel-indicators">
                {images.map((image, index) => (
                  <button
                    key={index}
                    type="button"
                    data-bs-target={`#carouselImageText-${heading.replace(/\s+/g, '-')}`}
                    data-bs-slide-to={index}
                    className={index === 0 ? 'active' : ''}
                    aria-current={index === 0 ? 'true' : undefined}
                    aria-label={`Slide ${index + 1}`}
                  ></button>
                ))}
              </div>
              <div className="carousel-inner">
                {images.map((image, index) => (
                  <div key={index} className={`carousel-item ${index === 0 ? 'active' : ''}`}>
                    <img src={image} className="carousel-image" alt={`Project ${index}`} />
                  </div>
                ))}
              </div>
              <button className="carousel-control-prev" type="button" data-bs-target={`#carouselImageText-${heading.replace(/\s+/g, '-')}`} data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button className="carousel-control-next" type="button" data-bs-target={`#carouselImageText-${heading.replace(/\s+/g, '-')}`} data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
              </button>
            </div>
          </div>
          <div className="left-column">
            <p className="ProjrctHeading">{heading}</p>
            <p className="ProjrctText" dangerouslySetInnerHTML={{ __html: highlightedText }} />
            <div className="tags-container">
              {tags.map((tag, index) => (
                <Tag key={index} text={tag} />
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  );
};


export default ProjectComponent;


