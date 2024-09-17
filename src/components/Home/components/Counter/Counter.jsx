import './counter.css';
import CountUp from 'react-countup';


export default function Counter() {
    return(
        <div className="site-counter">
            <div className="counter-wrapper"> 
                <div className="counter">
                <CountUp start={0} end={200} duration={3} className='countup'/><span className='plus'>+</span>
                <h4 className="counter-heading">Diets created</h4>
                </div>

                <div className="counter">
                <CountUp start={0} end={500} duration={3} className='countup'/><span className='plus'>+</span>
                <h4 className="counter-heading">Satisfied clients</h4>
                </div>

                <div className="counter">
                <CountUp start={0} end={600} duration={3} className='countup'/><span className='plus'>+</span>
                <h4 className="counter-heading">Meals planned</h4>
                </div>

                <div className="counter">
                <CountUp start={0} end={2500} duration={3} className='countup'/><span className='plus'>+</span>
                <h4 className="counter-heading">Hours of expertise</h4>
                </div>
                
            </div>
        </div>
    )
}