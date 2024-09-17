import './whyus.css';
import { FaUser } from "react-icons/fa";
import { FaArrowUpShortWide } from "react-icons/fa6";
import { AiFillLike } from "react-icons/ai";
import { GoArrowUpRight } from "react-icons/go";

export default function WhyUs(){
    return(
        <div className="why-us">
            <div className="why-us-wrapper">
                <h4 className="why-us-subheading">Why us?</h4>
                <h2 className="why-us-heading">A history of excellence</h2>
                <p className="why-us-paragraph">This is why we are the industry leader.</p>

                <div className="why-us-boxes">
                    <div className="why-us-box">
                        <div className="why-us-box-icon">
                        <FaUser color='#ffffff' size={25}/>
                        </div>

                        <h2 className="box-heading">Personalized Approach</h2>
                        <p className="box-paragraph">Tailored solutions precisely crafted to meet your specific needs, leveraging our expertise.</p>

                    </div>

                    <div className="why-us-box">
                        <div className="why-us-box-icon">
                        <FaArrowUpShortWide color='#ffffff' size={25} />
                        </div>
                        <h2 className="box-heading">Support and Motivation</h2>
                        <p className="box-paragraph">Unwavering support and motivation to guide you towards your goals, ensuring your success.</p>
        
                    </div>

                    <div className="why-us-box">
                        <div className="why-us-box-icon">
                        <AiFillLike color='#ffffff' size={25}/>
                        </div>

                        <h2 className="box-heading">Visible Results</h2>
                        <p className="box-paragraph">Guaranteed visible results with comprehensive support throughout your journey.</p>
                    </div>
                </div>

                <div className="why-us-button">
                    <button className="why-us-btn">Contact us  <GoArrowUpRight /></button>
                </div>
            </div>
        </div>
    )
}