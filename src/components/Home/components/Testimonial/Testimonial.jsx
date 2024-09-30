import './testimonial.css';
import { useEffect, useRef } from 'react';
import TestimonialImg from './testimonial.jpeg';
import { BiSolidQuoteLeft } from "react-icons/bi";
import AuthorImg from './portrait.jpg';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export default function Testimonial() {
    const leftSectionRef = useRef(null);
    const rightSectionRef = useRef(null); 

    useEffect(() => {
        gsap.fromTo(leftSectionRef.current, 
            { opacity: 0, x: -100, scale: 0.9 }, 
            {
                opacity: 1,
                x: 0,
                scale: 1,
                duration: 1,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: leftSectionRef.current,
                    start: "top 80%", 
                    toggleActions: "play none none none", 
                },
            }
        );

        gsap.fromTo(rightSectionRef.current, 
            { opacity: 0, x: 100, scale: 0.9 }, 
            {
                opacity: 1,
                x: 0,
                scale: 1,
                duration: 1,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: rightSectionRef.current,
                    start: "top 80%",
                    toggleActions: "play none none none", 
                },
            }
        );
    }, []);

    return(
        <div className="home-testimonial-section">
            <div className="testimonial-wrapper">
                <div className="testimonial-left-section" ref={leftSectionRef}>
                    <img src={TestimonialImg} alt="Salad" className='testimonial-img' />
                </div>

                <div className="testimonial-right-section" ref={rightSectionRef}>
                    <h4 className="testimonial-subheading">Testimonial</h4>
                    <h2 className="testimonial-heading">We provide the most enjoyable experience</h2>
                    <BiSolidQuoteLeft size={50} style={{color: '#396042'}}/>
                    <p className="testimonial-paragraph">The personalized advice and support I received have dramatically improved my health and vitality. I've never felt better, and the visible results are truly beyond my expectations. Highly recommend!</p>
                    <div className="testimonial-author">
                        <div className="author-img-wrap">
                        <img src={AuthorImg} alt="author" className='author-img'/>
                        </div>
                        <h4 className="author-name">Daniela Tasi</h4>
                    </div>
                </div>
            </div>
        </div>
    )
}