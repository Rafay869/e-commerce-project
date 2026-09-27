import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import Newsletter from '../components/Newsletter';

function Home({ addToCart }) {
  const [featuredProducts, setFeaturedProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://dummyjson.com/products?limit=4')
      .then((res) => res.json())
      .then((data) => {
        setFeaturedProducts(data.products);
        setLoading(false);
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="container">
      {/* Section 1: Hero Banner */}
      <section className="hero">
        <h1>Welcome to ShopVibe</h1>
        <p>Discover high-quality electronics, fashion, and accessories.</p>
        <Link to="/products" className="btn">Explore All Products</Link>
      </section>

      {/* Section 2: Features/Benefits */}
      <section className="section">
        <h2 className="section-title">Why Shop With Us</h2>
        <div className="features-grid">
          <div className="feature-box">
            <h3>🚚 Free Delivery</h3>
            <p>On orders above $50</p>
          </div>
          <div className="feature-box">
            <h3>⚡ Fast Shipping</h3>
            <p>Delivered within 2-3 days</p>
          </div>
          <div className="feature-box">
            <h3>🔒 Secure Payment</h3>
            <p>100% safe transactions</p>
          </div>
          <div className="feature-box">
            <h3>🎧 24/7 Support</h3>
            <p>Dedicated customer service</p>
          </div>
        </div>
      </section>

      {/* Section 3: Featured Products */}
      <section className="section">
        <h2 className="section-title">Featured Products</h2>
        {loading ? (
          <p style={{ textAlign: 'center' }}>Loading featured items...</p>
        ) : (
          <div className="product-grid">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} addToCart={addToCart} />
            ))}
          </div>
        )}
      </section>

      {/* Section 4: Promo Banner */}
      <section className="section" style={{ background: '#f1f5f9', padding: '40px', borderRadius: '12px', textAlign: 'center' }}>
        <h2>Special Summer Sale!</h2>
        <p style={{ margin: '10px 0 20px' }}>Get up to 30% off on selected items across all categories.</p>
        <Link to="/products" className="btn">Shop Sale Now</Link>
      </section>

      {/* Section 5: Newsletter */}
      <Newsletter />
    </div>
  );
}

export default Home;