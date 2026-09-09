import React, { useState } from 'react';
import Hero from '../components/Hero';
import FeatureStrip from '../components/FeatureStrip';

const Products = () => {
  const [cartCount, setCartCount] = useState(0);

  const handleAddToCart = () => {
    setCartCount(prev => prev + 1);
    alert("Added to cart! (This is a prototype simulating Wix Stores functionality)");
  };

  const products = [
    {
      id: 1,
      name: "Premium Wild Rice - 500g",
      category: "RETAIL PACKAGING",
      description: "Convenient packages for home use and retail customers.",
      price: "$14.99",
      image: "https://placehold.co/400x400?text=Retail+Package+500g"
    },
    {
      id: 2,
      name: "Premium Wild Rice - 1kg",
      category: "RETAIL PACKAGING",
      description: "Perfect for families and regular use.",
      price: "$24.99",
      image: "https://placehold.co/400x400?text=Retail+Package+1kg"
    },
    {
      id: 3,
      name: "Wild Rice - 25 KG SACK",
      category: "WHOLESALE & BULK SUPPLY",
      description: "Larger-volume packaging for food-service, wholesale and distribution.",
      price: "Call for Pricing",
      image: "https://placehold.co/400x400?text=25+KG+Sack"
    },
    {
      id: 4,
      name: "Mini-Bulk / Commercial Box",
      category: "WHOLESALE & BULK SUPPLY",
      description: "Larger packaging options for commercial and export requirements.",
      price: "Call for Pricing",
      image: "https://placehold.co/400x400?text=Mini-Bulk+Supply"
    }
  ];

  return (
    <div>
      <Hero 
        title="OUR PRODUCTS"
        subtitle="We supply premium organic Canadian wild rice in packaging for retail, food-service, wholesale and commercial customers."
        image="https://placehold.co/1920x1080?text=Products+Hero"
      />

      <div className="bg-dark" style={{ padding: '1rem', position: 'sticky', top: '70px', zIndex: 100, borderBottom: '1px solid var(--color-gold)' }}>
        <div className="container" style={{ display: 'flex', justifyContent: 'flex-end' }}>
          <button className="btn btn-outline-light">
            Cart ({cartCount})
          </button>
        </div>
      </div>

      <section className="container">
        <h2 className="text-center text-red" style={{ marginBottom: '3rem' }}>RETAIL PACKAGING</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '2rem' }}>
          {products.filter(p => p.category === "RETAIL PACKAGING").map(product => (
            <div key={product.id} style={{ border: '1px solid var(--color-border)', borderRadius: 'var(--radius-md)', padding: '1.5rem', display: 'flex', flexDirection: 'column' }}>
              <img src={product.image} alt={product.name} style={{ width: '100%', height: 'auto', marginBottom: '1rem', borderRadius: 'var(--radius-sm)' }} />
              <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem' }}>{product.name}</h3>
              <p style={{ fontSize: '0.875rem', flex: 1 }}>{product.description}</p>
              <div style={{ marginTop: '1rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ fontWeight: 'bold', fontSize: '1.25rem' }}>{product.price}</span>
                <button className="btn btn-primary" onClick={handleAddToCart} style={{ padding: '0.5rem 1rem' }}>Add to Cart</button>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="container bg-white" style={{ marginTop: '2rem', paddingTop: '4rem', paddingBottom: '4rem', borderRadius: 'var(--radius-lg)', boxShadow: '0 4px 20px rgba(0,0,0,0.05)' }}>
        <h2 className="text-center text-red" style={{ marginBottom: '3rem' }}>WHOLESALE & BULK SUPPLY</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '2rem' }}>
          {products.filter(p => p.category === "WHOLESALE & BULK SUPPLY").map(product => (
            <div key={product.id} style={{ border: '1px solid var(--color-border)', borderRadius: 'var(--radius-md)', padding: '1.5rem', display: 'flex', flexDirection: 'column' }}>
              <img src={product.image} alt={product.name} style={{ width: '100%', height: 'auto', marginBottom: '1rem', borderRadius: 'var(--radius-sm)' }} />
              <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem' }}>{product.name}</h3>
              <p style={{ fontSize: '0.875rem', flex: 1 }}>{product.description}</p>
              <div style={{ marginTop: '1rem' }}>
                <a href="/contact" className="btn btn-outline" style={{ width: '100%' }}>{product.price}</a>
              </div>
            </div>
          ))}
        </div>
      </section>

      <FeatureStrip items={['PRODUCT OF CANADA', 'PREMIUM ORGANIC CANADIAN WILD RICE', 'PROCESSED IN-HOUSE BY WILD RICE CANADA']} />
    </div>
  );
};

export default Products;
