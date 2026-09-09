import React from 'react';
import './Hero.css';

const Hero = ({ title, subtitle, image, ctaText, ctaLink }) => {
  return (
    <section className="hero" style={{ backgroundImage: `linear-gradient(rgba(28, 30, 27, 0.4), rgba(28, 30, 27, 0.7)), url(${image})` }}>
      <div className="container hero-content fade-in-up">
        <h1 className="hero-title">{title}</h1>
        {subtitle && <p className="hero-subtitle">{subtitle}</p>}
        {ctaText && ctaLink && (
          <div className="mt-4">
            <a href={ctaLink} className="btn btn-primary">{ctaText}</a>
          </div>
        )}
      </div>
    </section>
  );
};

export default Hero;
