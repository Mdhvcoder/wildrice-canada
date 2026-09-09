import React from 'react';
import Hero from '../components/Hero';
import FeatureStrip from '../components/FeatureStrip';

const Contact = () => {
  return (
    <div>
      <Hero 
        title="LET'S TALK WILD RICE"
        subtitle="Questions about our wild rice, packaging, availability or ordering? Please contact Wild Rice Canada."
        image="https://placehold.co/1920x1080?text=Contact+Hero"
      />
      
      <section className="container">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem', alignItems: 'start' }}>
          
          <div className="bg-white" style={{ padding: '3rem', borderRadius: 'var(--radius-lg)', boxShadow: '0 4px 20px rgba(0,0,0,0.05)' }}>
            <h2 className="text-red" style={{ marginBottom: '2rem' }}>SEND A MESSAGE</h2>
            <form style={{ display: 'grid', gap: '1.5rem' }} onSubmit={e => { e.preventDefault(); alert('Message sent. (Wix Forms simulated)'); }}>
              <div>
                <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500' }}>Name</label>
                <input type="text" required style={{ width: '100%', padding: '0.75rem', border: '1px solid var(--color-border)', borderRadius: 'var(--radius-sm)' }} />
              </div>
              <div>
                <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500' }}>Email Address</label>
                <input type="email" required style={{ width: '100%', padding: '0.75rem', border: '1px solid var(--color-border)', borderRadius: 'var(--radius-sm)' }} />
              </div>
              <div>
                <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500' }}>Inquiry Type</label>
                <select style={{ width: '100%', padding: '0.75rem', border: '1px solid var(--color-border)', borderRadius: 'var(--radius-sm)' }}>
                  <option>General Inquiry</option>
                  <option>Product Inquiry</option>
                  <option>Wholesale Inquiry</option>
                  <option>Export Inquiry</option>
                </select>
              </div>
              <div>
                <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500' }}>Message</label>
                <textarea rows="5" required style={{ width: '100%', padding: '0.75rem', border: '1px solid var(--color-border)', borderRadius: 'var(--radius-sm)' }}></textarea>
              </div>
              <button type="submit" className="btn btn-primary" style={{ justifySelf: 'start' }}>Send Message</button>
            </form>
          </div>

          <div>
            <h2 className="text-red" style={{ marginBottom: '2rem' }}>CONTACT INFO</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', fontSize: '1.125rem' }}>
              <div>
                <strong style={{ display: 'block', color: 'var(--color-gold)' }}>Phone</strong>
                306-649-2550
              </div>
              <div>
                <strong style={{ display: 'block', color: 'var(--color-gold)' }}>Email</strong>
                wildricecanada@gmail.com
              </div>
              <div>
                <strong style={{ display: 'block', color: 'var(--color-gold)' }}>Website</strong>
                wildricecanada.ca
              </div>
              <div>
                <strong style={{ display: 'block', color: 'var(--color-gold)' }}>Locations</strong>
                Beauval and Saskatoon<br />
                Saskatchewan, Canada
              </div>
            </div>

            <div className="bg-dark" style={{ marginTop: '3rem', padding: '2rem', borderRadius: 'var(--radius-md)' }}>
              <h3 className="text-gold" style={{ fontSize: '1.25rem', marginBottom: '1rem' }}>ORDER ONLINE</h3>
              <p className="text-light">
                Online ordering will also be available through the Wild Rice Canada website.
              </p>
              <div className="mt-4">
                <a href="/products" className="btn btn-outline-light">Shop Now</a>
              </div>
            </div>
          </div>

        </div>
      </section>

      <FeatureStrip items={['PHONE', 'WEBSITE', 'EMAIL', 'DIRECT CONTACT']} />
    </div>
  );
};

export default Contact;
