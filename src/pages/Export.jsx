import React from 'react';
import Hero from '../components/Hero';
import FeatureStrip from '../components/FeatureStrip';

const Export = () => {
  return (
    <div>
      <Hero
        title="EXPORT READY"
        subtitle="Wild Rice Canada supplies premium organic Canadian wild rice to international buyers."
        image="https://placehold.co/1920x1080?text=Export+Hero"
      />

      <section className="container">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem', alignItems: 'center' }}>
          <div>
            <img src="https://placehold.co/800x600?text=Container+Shipment" alt="Container Shipment" style={{ borderRadius: 'var(--radius-md)' }} />
          </div>
          <div>
            <h2 className="text-red">WORLDWIDE SUPPLY</h2>
            <p>
              Commercial quantities, palletized orders, bulk packaging and container shipments can be arranged according to customer requirements.
            </p>
            <p>
              For export inquiries, please provide the destination, preferred package size and approximate quantity so we can discuss availability, shipping requirements and pricing.
            </p>
          </div>
        </div>
      </section>

      <section className="container bg-white" style={{ padding: '4rem', borderRadius: 'var(--radius-lg)', boxShadow: '0 4px 20px rgba(0,0,0,0.05)', marginBottom: '4rem' }}>
        <h2 className="text-center text-red" style={{ marginBottom: '2rem' }}>EXPORT INQUIRY</h2>
        <form style={{ display: 'grid', gap: '1.5rem', maxWidth: '600px', margin: '0 auto' }} onSubmit={e => { e.preventDefault(); alert('Export inquiry submitted. (Wix Forms simulated)'); }}>
          <div>
            <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500' }}>Name / Company</label>
            <input type="text" required style={{ width: '100%', padding: '0.75rem', border: '1px solid var(--color-border)', borderRadius: 'var(--radius-sm)' }} />
          </div>
          <div>
            <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500' }}>Email Address</label>
            <input type="email" required style={{ width: '100%', padding: '0.75rem', border: '1px solid var(--color-border)', borderRadius: 'var(--radius-sm)' }} />
          </div>
          <div>
            <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500' }}>Destination Country / Port</label>
            <input type="text" required style={{ width: '100%', padding: '0.75rem', border: '1px solid var(--color-border)', borderRadius: 'var(--radius-sm)' }} />
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
            <div>
              <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500' }}>Preferred Package Size</label>
              <select style={{ width: '100%', padding: '0.75rem', border: '1px solid var(--color-border)', borderRadius: 'var(--radius-sm)' }}>
                <option>25 KG Sacks</option>
                <option>Mini-Bulk / Commercial</option>
                <option>Other</option>
              </select>
            </div>
            <div>
              <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500' }}>Approximate Quantity</label>
              <input type="text" placeholder="e.g. 1 Pallet, 1 Container" required style={{ width: '100%', padding: '0.75rem', border: '1px solid var(--color-border)', borderRadius: 'var(--radius-sm)' }} />
            </div>
          </div>
          <div>
            <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500' }}>Additional Details</label>
            <textarea rows="4" style={{ width: '100%', padding: '0.75rem', border: '1px solid var(--color-border)', borderRadius: 'var(--radius-sm)' }}></textarea>
          </div>
          <button type="submit" className="btn btn-primary" style={{ justifySelf: 'start' }}>Submit Inquiry</button>
        </form>
      </section>

      <FeatureStrip items={['CANADIAN PRODUCT', 'ORGANIC WILD RICE', 'PROCESSED IN-HOUSE', 'WORLDWIDE SUPPLY']} />
    </div>
  );
};

export default Export;
