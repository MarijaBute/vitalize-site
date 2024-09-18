import './testimonial.css';
import TestimonialImg from './testimonial.jpeg';
import { BiSolidQuoteLeft } from "react-icons/bi";
import AuthorImg from './portrait.jpg';

export default function Testimonial() {
    return(
        <div className="home-testimonial-section">
            <div className="testimonial-wrapper">
                <div className="testimonial-left-section">
                    <img src={TestimonialImg} alt="Salad" className='testimonial-img' />
                </div>

                <div className="testimonial-right-section">
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