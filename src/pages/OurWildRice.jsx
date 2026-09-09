import React from 'react';
import Hero from '../components/Hero';
import FeatureStrip from '../components/FeatureStrip';

const OurWildRice = () => {
  return (
    <div>
      <Hero 
        title="OUR WILD RICE"
        image="https://placehold.co/1920x1080?text=Wild+Rice+Nature"
      />
      
      <section className="container">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem', alignItems: 'center' }}>
          <div>
            <img src="https://placehold.co/800x600?text=Wild+Rice+Nature" alt="Wild Rice in Nature" style={{ borderRadius: 'var(--radius-md)' }} />
          </div>
          <div>
            <h2 className="text-red">GROWN BY NATURE</h2>
            <p>
              Premium organic Canadian wild rice is different. It is never blended with paddy rice.
            </p>
            <p>
              Our wild rice grows naturally in the lakes, rivers and waterways of northern Saskatchewan. It is not cultivated in rice paddies and is not a conventional field crop.
            </p>
          </div>
        </div>
      </section>

      <section className="container" style={{ paddingTop: 0 }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem', alignItems: 'center', direction: 'rtl' }}>
          <div>
            <img src="https://placehold.co/800x600?text=Wild+Rice+Grain" alt="Wild Rice Grain" style={{ borderRadius: 'var(--radius-md)' }} />
          </div>
          <div style={{ direction: 'ltr' }}>
            <h2 className="text-red">CAREFULLY CURED</h2>
            <p>
              After harvest, it is carefully cured and processed in-house to preserve the long, dark grain, distinctive flavour and natural character of genuine Canadian wild rice.
            </p>
            <p className="text-red" style={{ fontWeight: '600' }}>
              Grown by nature. Not cultivated in paddies.
            </p>
          </div>
        </div>
      </section>

      <FeatureStrip items={['NATURALLY GROWN', '100% ORGANIC', 'PURE CANADIAN', 'NEVER BLENDED']} />
    </div>
  );
};

export default OurWildRice;
