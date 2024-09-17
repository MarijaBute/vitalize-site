import './home.css';
import { GoArrowUpRight } from "react-icons/go";
import Counter from './components/Counter/Counter';
import HomeAbout from './components/HomeAbout/HomeAbout';
import HomeServices from './components/HomeServices/HomeServices';
import WhyUs from './components/WhyUs/WhyUs';

export default function Home() {
    return (
        <>
        <div className="site-home">
            <div className="home-wrapper">
            <div className="text-box-section">
                <h4 className="subheading">
                ♡ Vitalize - Health solutions
                </h4>

                <h2 className="home-heading">
                    Start eating healthy
                </h2>

                <p className='text-box-paragraph'>
                Create a healthier you with our personalized plans and expert support.
                </p>

                <div className="home-button">
                   <button className="home-btn">
                    Contact us <GoArrowUpRight />
                   </button>
                </div>
            </div>
            </div>   
         
        </div>

        <Counter />
        <HomeAbout />
        <HomeServices />
        <WhyUs />

        </>
    )
}