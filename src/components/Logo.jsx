import React from 'react';

const Logo = ({ className = '' }) => {
  return (
    <div className={`animated-logo-container ${className}`} style={{ maxWidth: '400px', width: '100%' }}>
      <svg viewBox="0 0 600 250" xmlns="http://www.w3.org/2000/svg" className="animated-logo-svg" style={{ fill: 'currentColor' }}>
        <text x="300" y="50" textAnchor="middle" className="logo-title-top logo-fade" style={{ fontSize: '32px', fontWeight: 'bold', fontFamily: 'Playfair Display' }}>WILD RICE CANADA</text>
        <line x1="300" y1="75" x2="60" y2="75" stroke="var(--color-gold)" strokeWidth="2" className="logo-draw-line"></line>
        <line x1="300" y1="75" x2="540" y2="75" stroke="var(--color-gold)" strokeWidth="2" className="logo-draw-line"></line>
        <text x="300" y="118" textAnchor="middle" className="logo-text-top" style={{ fontSize: '18px', letterSpacing: '2px' }}>PREMIUM ORGANIC CANADIAN WILD RICE</text>
        <text x="300" y="146" textAnchor="middle" className="logo-text-sub" style={{ fontSize: '14px', fontStyle: 'italic' }}>A division of Double Diamond Farm Ltd.</text>
        <polygon points="60,185 180,162 320,185 180,208" fill="transparent" stroke="var(--color-gold)" strokeWidth="5" className="logo-diamond logo-draw"></polygon>
        <polygon points="280,185 420,162 540,185 420,208" fill="transparent" stroke="var(--color-gold)" strokeWidth="5" className="logo-diamond logo-draw"></polygon>
        <text x="180" y="192" textAnchor="middle" className="logo-text-inner logo-fade logo-delay-1" style={{ fontSize: '16px', fontWeight: 'bold' }}>DOUBLE</text>
        <text x="420" y="192" textAnchor="middle" className="logo-text-inner logo-fade logo-delay-1" style={{ fontSize: '16px', fontWeight: 'bold' }}>DIAMOND</text>
        <text x="300" y="235" textAnchor="middle" className="logo-text-bottom" style={{ fontSize: '12px', letterSpacing: '4px' }}>SASKATOON . CANADA</text>
      </svg>
    </div>
  );
};

export default Logo;
