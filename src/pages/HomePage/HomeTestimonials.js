import React, { useEffect, useRef } from 'react';
import './HomeTestimonials.scss'; // Import the SCSS file

const testimonialsData = [
    {
        className: "testimonial daniel",
        imgSrc: "https://github.com/annafkt/frontend-mentor-challenges/blob/main/challenges/testimonials-grid-section/images/image-daniel.jpg?raw=true",
        name: "Daniel Clifford",
        title: "Verified Customer",
        quote1: "I am thoroughly impressed with the construction work completed by your company.",
        quote2: `“This experience has reinforced my confidence in your company's ability to handle complex projects with precision and care. 
                  The materials used were top-notch, and the craftsmanship was outstanding, resulting in a finished product that exceeded my expectations. 
                  I highly recommend your services to anyone seeking quality construction work, and I look forward to the possibility of working with your team on future projects.”`
    },
    {
        className: "testimonial jonathan",
        imgSrc: "https://github.com/annafkt/frontend-mentor-challenges/blob/main/challenges/testimonials-grid-section/images/image-jonathan.jpg?raw=true",
        name: "Jonathan Walters",
        title: "Verified Customer",
        quote1: "The team provided great support throughout the shed construction project.",
        quote2: `“The finished shed meets my expectations, and the process was smooth from start to finish.”`
    },
    {
        className: "testimonial jeanette",
        imgSrc: "https://github.com/annafkt/frontend-mentor-challenges/blob/main/challenges/testimonials-grid-section/images/image-jeanette.jpg?raw=true",
        name: "Jeanette Harmon",
        title: "Verified Customer",
        quote1: "The agricultural animal shed project turned out great.",
        quote2: `“I recently had your team build an agricultural animal shed, and I’m really pleased with how it turned out. 
                  The whole process was smooth, and the final result is just what we needed.”`
    },
    {
        className: "testimonial patrick",
        imgSrc: "https://github.com/annafkt/frontend-mentor-challenges/blob/main/challenges/testimonials-grid-section/images/image-patrick.jpg?raw=true",
        name: "Patrick Abrams",
        title: "Verified Customer",
        quote1: "The home renovation project was handled with great professionalism, and the standout feature was the remarkable craftsmanship on the curved staircase.",
        quote2: `“I recently completed a home renovation project with your company, and I am thoroughly impressed with the results. 
                  The project was managed with a high level of professionalism and care, and the quality of the work speaks volumes about your team's expertise. 
                  The most outstanding feature of the renovation was the curved staircase. The craftsmanship was beyond awesome. 
                  It has truly become a focal point of the home, adding both elegance and functionality.”`
    },
    {
        className: "testimonial kira",
        imgSrc: "https://github.com/annafkt/frontend-mentor-challenges/blob/main/challenges/testimonials-grid-section/images/image-kira.jpg?raw=true",
        name: "Kira Whittle",
        title: "Verified Customer",
        quote1: "The construction of the medical facility was a standout success. Highly recommend your services for any similar projects!",
        quote2: `“What really stood out was how well the space was designed to meet our specific needs. 
                  The facility is not just functional but also thoughtfully planned, making it a great environment for both staff and patients. 
                  While there were some minor delays in the early stages, these were addressed promptly and did not significantly impact the overall timeline. 
                  Your team’s expertise really shone through, and I’m excited to see how this new space will benefit the community. Highly recommend your services for any similar projects! 100% recommend!”`
    }
];

const HomeTestimonials = () => {
    const containerRef = useRef(null);

    useEffect(() => {
        const container = containerRef.current;
        const testimonials = container.querySelectorAll('.testimonial');

        const observerOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 0.1
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry, index) => {
                if (entry.isIntersecting) {
                    entry.target.style.animationDelay = `${index * 0.4}s`;
                    entry.target.classList.add('visible');
                    observer.unobserve(entry.target); // Unobserve to trigger the animation only once
                }
            });
        }, observerOptions);

        testimonials.forEach((testimonial) => {
            observer.observe(testimonial);
        });

        return () => {
            if (observer) {
                observer.disconnect();
            }
        };
    }, []);

    return (
        <div ref={containerRef} className="testimonial-container">
            <p className="page-component-heading test-heading">What our customers say</p>
            <section id="testimonials">
                {testimonialsData.map((testimonial, index) => (
                    <figure key={index} className={`testimonial ${testimonial.className}`}>
                        <figcaption>
                            <img src={testimonial.imgSrc} alt={testimonial.name} width="35" />
                            <p className="name">
                                {testimonial.name} <span className="title">{testimonial.title}</span>
                            </p>
                        </figcaption>
                        <blockquote>
                            <h3 className="quote-part-1">{testimonial.quote1}</h3>
                            <p className="quote-part-2">{testimonial.quote2}</p>
                        </blockquote>
                    </figure>
                ))}
            </section>
        </div>
    );
};

export default HomeTestimonials;



// import React, { useRef, useEffect } from 'react';
// import './HomeTestimonials.scss'; // Import the SCSS file

// const HomeTestimonials = () => {
//     const testimonialsRef = useRef([]);

//     useEffect(() => {
//         const options = {
//             threshold: 0.1,
//         };

//         const observer = new IntersectionObserver((entries) => {
//             entries.forEach((entry) => {
//                 if (entry.isIntersecting) {
//                     const index = entry.target.dataset.index;
//                     entry.target.classList.add(index % 2 === 0 ? 'slide-in-left' : 'slide-in-right');
//                     observer.unobserve(entry.target);
//                 }
//             });
//         }, options);

//         testimonialsRef.current.forEach((testimonial) => {
//             observer.observe(testimonial);
//         });

//         return () => {
//             if (testimonialsRef.current) {
//                 testimonialsRef.current.forEach((testimonial) => {
//                     observer.unobserve(testimonial);
//                 });
//             }
//         };
//     }, []);

//     return (
//         <div className="testimonial-container">
//             <p className="page-component-heading test-heading">
//                 What our customers say
//             </p>
//             <section id="testimonials">
//                 {[
//                     {
//                         name: 'Daniel Clifford',
//                         title: 'Verified Customer',
//                         img: 'https://github.com/annafkt/frontend-mentor-challenges/blob/main/challenges/testimonials-grid-section/images/image-daniel.jpg?raw=true',
//                         quote1: 'I am thoroughly impressed with the construction work completed by your company.',
//                         quote2: '“This experience has reinforced my confidence in your company\'s ability to handle complex projects with precision and care. The materials used were top-notch, and the craftsmanship was outstanding, resulting in a finished product that exceeded my expectations. I highly recommend your services to anyone seeking quality construction work, and I look forward to the possibility of working with your team on future projects.”',
//                     },
//                     {
//                         name: 'Jonathan Walters',
//                         title: 'Verified Customer',
//                         img: 'https://github.com/annafkt/frontend-mentor-challenges/blob/main/challenges/testimonials-grid-section/images/image-jonathan.jpg?raw=true',
//                         quote1: 'The team provided great support throughout the shed construction project.',
//                         quote2: '“The finished shed meets my expectations, and the process was smooth from start to finish.”',
//                     },
//                     {
//                         name: 'Jeanette Harmon',
//                         title: 'Verified Customer',
//                         img: 'https://github.com/annafkt/frontend-mentor-challenges/blob/main/challenges/testimonials-grid-section/images/image-jeanette.jpg?raw=true',
//                         quote1: 'The agricultural animal shed project turned out great.',
//                         quote2: '“I recently had your team build an agricultural animal shed, and I’m really pleased with how it turned out. The whole process was smooth, and the final result is just what we needed.”',
//                     },
//                     {
//                         name: 'Patrick Abrams',
//                         title: 'Verified Customer',
//                         img: 'https://github.com/annafkt/frontend-mentor-challenges/blob/main/challenges/testimonials-grid-section/images/image-patrick.jpg?raw=true',
//                         quote1: 'The home renovation project was handled with great professionalism, and the standout feature was the remarkable craftsmanship on the curved staircase.',
//                         quote2: '“I recently completed a home renovation project with your company, and I am thoroughly impressed with the results. The project was managed with a high level of professionalism and care, and the quality of the work speaks volumes about your team\'s expertise. The most outstanding feature of the renovation was the curved staircase. The craftsmanship was beyond awesome. It has truly become a focal point of the home, adding both elegance and functionality.”',
//                     },
//                     {
//                         name: 'Kira Whittle',
//                         title: 'Verified Customer',
//                         img: 'https://github.com/annafkt/frontend-mentor-challenges/blob/main/challenges/testimonials-grid-section/images/image-kira.jpg?raw=true',
//                         quote1: 'The construction of the medical facility was a standout success. Highly recommend your services for any similar projects!',
//                         quote2: '“What really stood out was how well the space was designed to meet our specific needs. The facility is not just functional but also thoughtfully planned, making it a great environment for both staff and patients. While there were some minor delays in the early stages, these were addressed promptly and did not significantly impact the overall timeline. Your team’s expertise really shone through, and I’m excited to see how this new space will benefit the community. Highly recommend your services for any similar projects! 100% recommend!”',
//                     },
//                 ].map((testimonial, index) => (
//                     <figure
//                         className="testimonial"
//                         data-index={index}
//                         key={index}
//                         ref={(el) => (testimonialsRef.current[index] = el)}
//                     >
//                         <figcaption>
//                             <img src={testimonial.img} alt={testimonial.name} width="35" />
//                             <p className="name">
//                                 {testimonial.name}
//                                 <p className="title">{testimonial.title}</p>
//                             </p>
//                         </figcaption>
//                         <blockquote>
//                             <h3 className="quote-part-1">{testimonial.quote1}</h3>
//                             <p className="quote-part-2">{testimonial.quote2}</p>
//                         </blockquote>
//                     </figure>
//                 ))}
//             </section>
//         </div>
//     );
// };

// export default HomeTestimonials;
