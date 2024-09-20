import './blogposts.css'
import MealPrepImg from './mealprep.jpg';
import PlantImg from './plant.jpg';
import GutBrainImg from './gutbrain.png';
import { GoArrowUpRight } from "react-icons/go";
import { FaArrowRightLong } from "react-icons/fa6";

export default function BlogPosts() {
    return (
        <div className="blog-posts-section">
            <div className="blog-posts-wrapper">
               <h4 className="blog-posts-subheading">Blog</h4> 
               <h2 className="blog-posts-heading">Learn more about nutrition</h2>
               <p className="blog-posts-paragraph">Learn more about nutrition and healthy lifestyle in our blog.</p>

               <div className="blog-posts">
                <div className="blog-post">
                    <div className="blog-post-image">
                        <img src={MealPrepImg} alt="Blog post" className='post-img'  />
                    </div>

                    <div className="blog-post-content">
                        <h4 className="blog-post-heading">Meal Prepping: A Simple Strategy for Healthy Eating</h4>
                        <p className="blog-post-paragraph">Learn how meal prepping can save time and help you stick to nutritious choices throughout the week.</p>
                        <a href="" className="blog-post-link">Learn more <FaArrowRightLong /></a>
                    </div>
                </div>

                <div className="blog-post">
                <div className="blog-post-image">
                        <img src={PlantImg} alt="Blog post" className='post-img' />
                    </div>

                    <div className="blog-post-content">
                        <h4 className="blog-post-heading">Plant-Based Diets: More Than Just a Trend</h4>
                        <p className="blog-post-paragraph">Discover the benefits of plant-based eating and how to transition to this lifestyle for improved health.</p>
                        <a href="" className="blog-post-link">Learn more <FaArrowRightLong /></a>
                    </div>
                </div>

                <div className="blog-post">
                <div className="blog-post-image">
                        <img src={GutBrainImg} alt="Blog post" className='post-img'  />
                    </div>

                    <div className="blog-post-content">
                        <h4 className="blog-post-heading">The Gut-Brain Connection: How Nutrition Impacts Mental Health</h4>
                        <p className="blog-post-paragraph">Explore the link between what you eat and how you feel, focusing on gut health and its influence on mood.</p>
                        <a href="" className="blog-post-link">Learn more <FaArrowRightLong /></a>
                    </div>
                </div>
               </div>

               <div className="blog-posts-button">
                <button className="blog-btn">See all blog posts <GoArrowUpRight /></button>
               </div>
            </div>
        </div>
    );
}