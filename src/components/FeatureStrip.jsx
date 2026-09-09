import React from 'react';

const FeatureStrip = ({ items }) => {
  return (
    <div className="bg-dark" style={{ padding: '1.5rem 0', borderBottom: '2px solid var(--color-gold)' }}>
      <div className="container" style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '2rem' }}>
        {items.map((item, index) => (
          <span key={index} style={{ 
            color: 'var(--color-gold)', 
            fontFamily: 'var(--font-sans)', 
            fontWeight: '600',
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
            fontSize: '0.875rem',
            display: 'flex',
            alignItems: 'center',
            gap: '1rem'
          }}>
            {item}
            {index < items.length - 1 && <span style={{ color: 'var(--color-border)', opacity: 0.3 }}>|</span>}
          </span>
        ))}
      </div>
    </div>
  );
};

export default FeatureStrip;
