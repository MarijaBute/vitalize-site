import './counter.css';
import { useEffect, useRef, useState } from 'react';
import CountUp from 'react-countup';

export default function Counter() {
    const [isVisible, setIsVisible] = useState(false);
    const counterRef = useRef(null); 

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                const entry = entries[0];
                setIsVisible(entry.isIntersecting); 
            },
            {
                threshold: 0.5, 
            }
        );

        if (counterRef.current) {
            observer.observe(counterRef.current);
        }

        return () => {
            if (counterRef.current) {
                observer.unobserve(counterRef.current);
            }
        };
    }, []);

    return (
        <div className="site-counter" ref={counterRef}>
            <div className="counter-wrapper"> 
                <div className="counter">
                    {isVisible && (
                        <>
                            <CountUp start={0} end={200} duration={2.5} className='countup' />
                            <span className='plus'>+</span>
                        </>
                    )}
                    <h4 className="counter-heading">Diets created</h4>
                </div>

                <div className="counter">
                    {isVisible && (
                        <>
                            <CountUp start={0} end={500} duration={2.5} className='countup' />
                            <span className='plus'>+</span>
                        </>
                    )}
                    <h4 className="counter-heading">Satisfied clients</h4>
                </div>

                <div className="counter">
                    {isVisible && (
                        <>
                            <CountUp start={0} end={600} duration={2.5} className='countup' />
                            <span className='plus'>+</span>
                        </>
                    )}
                    <h4 className="counter-heading">Meals planned</h4>
                </div>

                <div className="counter">
                    {isVisible && (
                        <>
                            <CountUp start={0} end={2500} duration={2.5} className='countup' />
                            <span className='plus'>+</span>
                        </>
                    )}
                    <h4 className="counter-heading">Hours of expertise</h4>
                </div>
            </div>
        </div>
    );
}