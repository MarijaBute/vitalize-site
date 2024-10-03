import './homeservices.css';
import { GoArrowUpRight } from "react-icons/go";
import { FaArrowRightLong } from "react-icons/fa6";
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function HomeServices() {
    const serviceCardsRef = useRef([]); 

    useEffect(() => {
        serviceCardsRef.current.forEach((card, index) => {
            gsap.fromTo(card, 
                { opacity: 0, x: 100 }, 
                {
                    opacity: 1,
                    x: 0,
                    duration: 1,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: card,
                        start: "top 80%", 
                        toggleActions: "play none none none",
                    },
                    delay: index * 0.2, 
                }
            );
        });
    }, []);

    return (
        <div className="home-services">
            <div className="home-services-wrapper">
                <div className="home-services-left">
                    <h4 className="services-subheading">Services</h4>
                    <h2 className="services-heading">How we can help you</h2>
                    <p className="services-paragraph">We specialize in providing personalized solutions to help you achieve your health goals. Here are the services we offer to help you.</p>
                    <div className="services-button">
                        <button className="services-btn">Contact us <GoArrowUpRight /></button>
                    </div>
                </div>

                <div className="home-services-right">
                    <div className="service-cards">
                        
                        <div className="service-card" ref={el => serviceCardsRef.current[0] = el}>
                            <h4 className="service-heading">Detox and cleanse programs</h4>
                            <p className="service-paragraph">Boost your well-being with our detox programs, designed to reset your eating habits and enhance overall health.</p>
                            <a href="" className="service-link">Learn more <FaArrowRightLong /></a>
                        </div>

                        <div className="service-card" ref={el => serviceCardsRef.current[1] = el}>
                            <h4 className="service-heading">Nutritional coaching</h4>
                            <p className="service-paragraph">One-on-one coaching to help you understand nutrition basics, make better food choices, and stay motivated.</p>
                            <a href="" className="service-link">Learn more <FaArrowRightLong /></a>
                        </div>

                        <div className="service-card" ref={el => serviceCardsRef.current[2] = el}>
                            <h4 className="service-heading">Custom diet plan</h4>
                            <p className="service-paragraph">Personalized diet plans that balance nutrition and taste, designed to fit your unique lifestyle and health goals.</p>
                            <a href="" className="service-link">Learn more <FaArrowRightLong /></a>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}