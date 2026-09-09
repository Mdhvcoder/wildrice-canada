import React from 'react';

const Logo = ({ className = '' }) => {
  return (
    <div className={`animated-logo-container ${className}`} style={{ maxWidth: '580px', width: '100%' }}>
      <svg
        viewBox="0 0 520 260"
        xmlns="http://www.w3.org/2000/svg"
        className="animated-logo-svg"
        role="img"
        aria-label="Wild Rice Canada logo"
      >
        {/* WILD RICE CANADA — large red serif */}
        <text
          x="260" y="52"
          textAnchor="middle"
          className="logo-title-top logo-fade"
          style={{ fontSize: 52, fontFamily: "'Playfair Display', serif", fill: '#a32020', fontWeight: 700 }}
        >
          Wild Rice Canada
        </text>

        {/* Gold lines + ornament */}
        <line x1="260" y1="66" x2="30" y2="66" stroke="#c0a062" strokeWidth="1.5" className="logo-line-left" />
        <line x1="260" y1="66" x2="490" y2="66" stroke="#c0a062" strokeWidth="1.5" className="logo-line-right" />
        <text
          x="260" y="72"
          textAnchor="middle"
          className="logo-fade logo-delay-1"
          style={{ fontSize: 14, fill: '#c0a062', fontFamily: 'serif' }}
        >
          ❧
        </text>

        {/* PREMIUM ORGANIC CANADIAN WILD RICE */}
        <text
          x="260" y="96"
          textAnchor="middle"
          className="logo-fade logo-delay-1"
          style={{ fontSize: 15, fontFamily: "'Roboto', Arial, sans-serif", fill: '#0a5538', fontWeight: 700, letterSpacing: 1.2 }}
        >
          PREMIUM ORGANIC CANADIAN WILD RICE
        </text>

        {/* A division of Double Diamond Farm Ltd. */}
        <text
          x="260" y="117"
          textAnchor="middle"
          className="logo-fade logo-delay-1"
          style={{ fontSize: 13.5, fontFamily: "'Playfair Display', 'Times New Roman', serif", fill: '#222', fontStyle: 'italic' }}
        >
          A division of Double Diamond Farm Ltd.
        </text>

        {/* Double Diamond shapes — symmetric, well-proportioned diamonds */}
        <polygon
          points="46,170 153,138 260,170 153,202"
          className="logo-diamond logo-draw logo-delay-1"
          style={{ fill: 'none', stroke: '#111', strokeWidth: 2.2, strokeLinejoin: 'miter' }}
        />
        <polygon
          points="260,170 367,138 474,170 367,202"
          className="logo-diamond logo-draw logo-delay-1"
          style={{ fill: 'none', stroke: '#111', strokeWidth: 2.2, strokeLinejoin: 'miter' }}
        />

        {/* DOUBLE text inside left diamond */}
        <text
          x="153" y="176"
          textAnchor="middle"
          className="logo-fade logo-delay-2"
          style={{ fontSize: 17, fontFamily: "'Roboto', Arial, sans-serif", fill: '#111', fontWeight: 700, letterSpacing: 1.5 }}
        >
          DOUBLE
        </text>

        {/* DIAMOND text inside right diamond */}
        <text
          x="367" y="176"
          textAnchor="middle"
          className="logo-fade logo-delay-2"
          style={{ fontSize: 17, fontFamily: "'Roboto', Arial, sans-serif", fill: '#111', fontWeight: 700, letterSpacing: 1.5 }}
        >
          DIAMOND
        </text>

        {/* SASKATOON, CANADA */}
        <text
          x="260" y="232"
          textAnchor="middle"
          className="logo-fade logo-delay-2"
          style={{ fontSize: 13, fontFamily: "'Roboto', Arial, sans-serif", fill: '#0a5538', fontWeight: 700, letterSpacing: 5 }}
        >
          SASKATOON, CANADA
        </text>
      </svg>
    </div>
  );
};

export default Logo;
