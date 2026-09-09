import React from 'react';
import Hero from '../components/Hero';
import FeatureStrip from '../components/FeatureStrip';

const Home = () => {
  return (
    <div>
      <Hero
        title="IN-HOUSE PROCESSING"
        subtitle="Our wild rice is processed and packaged in-house by Wild Rice Canada for retail, wholesale, food-service and export customers. Naturally grown in northern waters - not cultivated in rice paddies."
        image="https://placehold.co/1920x1080?text=Home+Garage+Final"
      />

      <FeatureStrip items={['100% CANADIAN', 'IN-HOUSE PROCESSING', 'RETAIL & WHOLESALE', 'EXPORT READY']} />

      <section className="container">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem', alignItems: 'center' }}>
          <div>
            <img src="https://placehold.co/1200x800?text=Truck+with+Double+Diamond+Logo" alt="Truck with Double Diamond Logo" style={{ borderRadius: 'var(--radius-md)' }} />
          </div>
          <div>
            <h2 className="text-red">WILD RICE CANADA</h2>
            <p>
              Wild Rice Canada supplies premium organic Canadian wild rice naturally grown in the lakes and waterways of northern Saskatchewan.
            </p>
            <div className="mt-4">
              <a href="/products" className="btn btn-primary">Shop Wild Rice</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
