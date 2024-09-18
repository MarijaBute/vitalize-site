import './faq.css';
import { useState } from 'react';
import { FaChevronDown } from "react-icons/fa";

const faqData = [
    {
        number: "01",
        question: "What can I expect from my initial consultation?",
        answer: "During your first visit, we'll discuss your health goals, dietary preferences, and lifestyle to create a personalized nutrition plan tailored just for you. This session is designed to understand your needs thoroughly and to set a clear and achievable path forward."
    },
    {
        number: "02",
        question: "How long does it typically take to see results?",
        answer: "Results can vary based on individual goals and adherence to the nutrition plan. Generally, clients start to notice improvements in their energy levels and overall well-being within a few weeks, with more significant changes occurring over several months."
    },
    {
        number: "03",
        question: "Are the diet plans suitable for people with food allergies?",
        answer: "Absolutely! All diet plans are customized to accommodate any allergies, sensitivities, or specific dietary needs such as vegan, gluten-free, or keto diets. Your safety and health preferences are our top priority."
    },
    {
        number: "04",
        question: "How do I maintain my results after reaching my initial goals?",
        answer: "Sustaining your results is key. We provide ongoing support and adjustments to your diet plan as needed. Additionally, we offer tips and strategies to help you maintain your achievements long-term, ensuring you continue to live a healthy lifestyle."
    }
];

export default function FAQ(){
    
    const [openFAQ, setOpenFAQ] = useState([false, false, false, false]);

    const toggleFAQ = (index) => {
        const newFAQState = [...openFAQ];
        newFAQState[index] = !newFAQState[index];
        setOpenFAQ(newFAQState);
    }


    return(
        <div className="faq-section">
            <div className="faq-wrapper">
                <div className="faq-left-section">
                    <h4 className="faq-subheading">FAQ</h4>
                    <h2 className="faq-heading">Frequently asked questions</h2>
                    <p className="faq-paragraph">Discover solutions to the most common queries.</p>
                </div>

                <div className="faq-right-section">
                    <div className="faq-boxes">
                        {faqData.map((faq, index) => (
                            <div className="faq-box" key={index}>
                                <div className="box-wrap">
                                <p className="faq-box-number">{faq.number}</p>
                                <h4 className="faq-box-heading">{faq.question}</h4>
                                <FaChevronDown
                                    className={`faq-icon ${openFAQ[index] ? 'open' : ''}`}
                                    onClick={() => toggleFAQ(index)}
                                />
                                </div>

                                {openFAQ[index] && (
                                    <div className="faq-answer">
                                        <p>{faq.answer}</p>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}