import React from 'react';
import Hero from '../components/Hero';
import FeatureStrip from '../components/FeatureStrip';

const AboutUs = () => {
  return (
    <div>
      <Hero 
        title="ABOUT US"
        image="https://placehold.co/1920x1080?text=About+Us+Hero"
      />
      
      <section className="container">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem', alignItems: 'center' }}>
          <div>
            <img src="https://placehold.co/800x600?text=Processing+Plant" alt="Processing Plant" style={{ borderRadius: 'var(--radius-md)' }} />
          </div>
          <div>
            <h2 className="text-red">DOUBLE DIAMOND FARM LTD.</h2>
            <p>
              Double Diamond Farm Ltd. has been involved with Canadian wild rice for many years. Today, through Wild Rice Canada, we are building on that experience with a modern in-house processing and packaging operation, bringing us closer to the product from the natural waters of northern Saskatchewan to the finished package.
            </p>
          </div>
        </div>
      </section>

      <section className="container" style={{ paddingTop: 0 }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem', alignItems: 'center', direction: 'rtl' }}>
          <div>
            <img src="/images/about_girl_process.jpg" alt="Wild Rice Canada in-house packaging" style={{ borderRadius: 'var(--radius-md)' }} />
          </div>
          <div style={{ direction: 'ltr' }}>
            <h2 className="text-red">PROUD TO SUPPLY</h2>
            <p>
              Our wild rice is cleaned, processed, graded and packaged in-house by Wild Rice Canada. Staying close to the product helps us maintain our own quality standards and put the Wild Rice Canada name on a finished product we are proud to supply.
            </p>
          </div>
        </div>
      </section>

      <FeatureStrip items={['IN-HOUSE PROCESSING & PACKAGING', 'QUALITY CONTROL', 'CUSTOMER DIRECT']} />
    </div>
  );
};

export default AboutUs;
