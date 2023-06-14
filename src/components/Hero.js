import React from 'react';
import landing from '../assets/landing.png'
import left from '../assets/left.png'
import right from '../assets/right.png'
import './component.css'
import { Link } from 'react-router-dom';

const Hero = () => {
    return (
        <section className="hero">
            <div className="container1">
                <img src={left} alt='left' id='left' />
                <img src={right} alt='right' id='right'/>
                <div className="hero-content">
                    <h4>Nigeria Food Compositon Database</h4>
                    <h3>Advancing Reality of Healthiness to All</h3>
                    <p>and providing access to technological resources to improve nutrition and health</p>
                </div>
                <div className="hero-buttons">
                    <Link to={"signup"}><button>Get Started</button></Link>
                    <Link to={"signup"}><button id='trial'>Free trial</button></Link>
                </div>
                <img src={landing} alt="nutritionist" />
            </div>
        </section>
    );
}
 
export default Hero;