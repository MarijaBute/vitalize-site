import './homeabout.css'
import GirlImg from './home-about.png';
import { GoArrowUpRight } from "react-icons/go";
import { FaCircleCheck } from "react-icons/fa6";

export default function HomeAbout() {
    return(
        <div className="home-about-section">
            <div className="home-about-wrapper">
                <div className="ha-left-section">
                    <img src={GirlImg} alt="About" className='home-about-image' />
                </div>

                <div className="ha-right-section">
                    <h4 className="ha-subheading">About</h4>

                    <h2 className="ha-heading">Wanna stay fit & healthy?</h2>

                    <p className="ha-paragraph">
                    As experienced nutritionists, we specialize in designing delicious, personalized meal plans tailored to your unique needs. We’ve helped countless clients achieve their health goals and are eager to support you on your journey.
                    </p>

                    <div className="ha-checkmarks">
                        <div className='checkmark-wrap'>
                        <FaCircleCheck color='#395f42' size={18}/>
                        <p>Certified</p>
                        </div>

                        <div className='checkmark-wrap'>
                        <FaCircleCheck color='#395f42' size={18}/>
                        <p>Innovative</p>
                        </div>

                        <div className='checkmark-wrap'>
                        <FaCircleCheck color='#395f42' size={18}/>
                        <p>Experienced</p>
                        </div>

                        <div className='checkmark-wrap'>
                        <FaCircleCheck color='#395f42' size={18}/>
                        <p>Compassionate</p>
                        </div>
                   
                  
                    </div>

                    <div className="ha-button">
                        <button className="ha-btn">Contact us <GoArrowUpRight /></button>
                    </div>
                </div>
            </div>
        </div>
    )
}