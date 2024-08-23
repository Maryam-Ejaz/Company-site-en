import React from 'react';
import './HomeTestimonials.scss'; // Import the SCSS file

const HomeTestimonials = () => {
    return (

            
        <div className="testimonial-container">
            <p className="page-component-heading test-heading">
                What our customers say</p>
            <section id="testimonials">
                <figure className="testimonial daniel">
                    <figcaption>
                        <img src="https://github.com/annafkt/frontend-mentor-challenges/blob/main/challenges/testimonials-grid-section/images/image-daniel.jpg?raw=true" alt="" width="35" />
                        <p className="name">Daniel Clifford <p className="title">Verified Customer</p></p>

                    </figcaption>
                    <blockquote>
                        <h3 className="quote-part-1">I am thoroughly impressed with the construction work completed by your company.</h3>
                        <p className="quote-part-2">“This experience has reinforced my confidence in your company's ability to handle complex projects with precision and care. The materials used were top-notch, and the craftsmanship was outstanding, resulting in a finished product that exceeded my expectations. I highly recommend your services to anyone seeking quality construction work, and I look forward to the possibility of working with your team on future projects.”</p>
                    </blockquote>
                </figure>
                <figure className="testimonial jonathan">
                    <figcaption>
                        <img src="https://github.com/annafkt/frontend-mentor-challenges/blob/main/challenges/testimonials-grid-section/images/image-jonathan.jpg?raw=true" alt="" width="35" />
                        <p className="name">Jonathan Walters<p className="title">Verified Customer</p></p>
                    </figcaption>
                    <blockquote>
                        <h3 className="quote-part-1">The team provided great support throughout the shed construction project.</h3>
                        <p className="quote-part-2">“The finished shed meets my expectations, and the process was smooth from start to finish.”</p>
                    </blockquote>
                </figure>
                <figure className="testimonial jeanette">
                    <figcaption>
                        <img src="https://github.com/annafkt/frontend-mentor-challenges/blob/main/challenges/testimonials-grid-section/images/image-jeanette.jpg?raw=true" alt="" width="35" />
                        <p className="name">Jeanette Harmon<p className="title">Verified Customer</p></p>
                    </figcaption>
                    <blockquote>
                        <h3 className="quote-part-1">The agricultural animal shed project turned out great.</h3>
                        <p className="quote-part-2">“I recently had your team build an agricultural animal shed, and I’m really pleased with how it turned out. The whole process was smooth, and the final result is just what we needed.”</p>
                    </blockquote>
                </figure>
                <figure className="testimonial patrick">
                    <figcaption>
                        <img src="https://github.com/annafkt/frontend-mentor-challenges/blob/main/challenges/testimonials-grid-section/images/image-patrick.jpg?raw=true" alt="" width="35" />
                        <p className="name">Patrick Abrams <p className="title">Verified Customer</p></p>
                    </figcaption>
                    <blockquote>
                        <h3 className="quote-part-1">The home renovation project was handled with great professionalism, and the standout feature was the remarkable craftsmanship on the curved staircase.</h3>
                        <p className="quote-part-2">“I recently completed a home renovation project with your company, and I am thoroughly impressed with the results. The project was managed with a high level of professionalism and care, and the quality of the work speaks volumes about your team's expertise. The most outstanding feature of the renovation was the curved staircase. The craftsmanship was beyond awesome. It has truly become a focal point of the home, adding both elegance and functionality.”</p>
                    </blockquote>
                </figure>
                <figure className="testimonial kira">
                    <figcaption>
                        <img src="https://github.com/annafkt/frontend-mentor-challenges/blob/main/challenges/testimonials-grid-section/images/image-kira.jpg?raw=true" alt="" width="35" />
                        <p className="name">Kira Whittle<p className="title">Verified Customer</p></p>
                    </figcaption>
                    <blockquote>
                        <h3 className="quote-part-1">The construction of the medical facility was a standout success. Highly recommend your services for any similar projects!</h3>
                        <p className="quote-part-2">“What really stood out was how well the space was designed to meet our specific needs. The facility is not just functional but also thoughtfully planned, making it a great environment for both staff and patients. While there were some minor delays in the early stages, these were addressed promptly and did not significantly impact the overall timeline. Your team’s expertise really shone through, and I’m excited to see how this new space will benefit the community. Highly recommend your services for any similar projects! 100% recommend!”</p>
                    </blockquote>
                </figure>
            </section>
        
        
        </div>

    );
};

export default HomeTestimonials;
