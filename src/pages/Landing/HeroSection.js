import React from 'react';
import "../../styles/HeroSection.css";
import {NavLink} from 'react-router-dom';
import HeroImage from "../../assets/gourmet.jpg";

const HeroSection = () => {
    return (
        <section className="hero-section-background">
            <div className="hero-section-container">
                <article className="section-left">
                    <h1>Little Lemon</h1>
                    <h2>Chicago</h2>
                    <p>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a
                        modern twist.</p>
                    <NavLink to="/reservations">
                        <button className="btn" aria-label="Reserve a Table">Reserve a Table</button>
                    </NavLink>
                </article>
                <aside className="section-right">
                    <div className="image-box">
                        <img src={HeroImage} alt="Serving delicious dish"/>
                    </div>
                </aside>
            </div>
        </section>
    )
}

export default HeroSection