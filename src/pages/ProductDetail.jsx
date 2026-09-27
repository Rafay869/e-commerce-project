import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';

function ProductDetail({ addToCart }) {
  const { id } = useParams(); // Dynamic Parameter from URL
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`https://dummyjson.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setProduct(data);
        setLoading(false);
      });
  }, [id]);

  if (loading) return <div className="container section"><p>Loading details...</p></div>;
  if (!product) return <div className="container section"><p>Product not found.</p></div>;

  return (
    <div className="container section">
      {/* Section 1: Navigation Breadcrumb */}
      <div style={{ marginBottom: '20px' }}>
        <Link to="/products" style={{ color: 'var(--primary-color)' }}>← Back to Products</Link>
      </div>

      {/* Section 2: Main Overview Product Section */}
      <div className="detail-wrapper">
        <img src={product.thumbnail} alt={product.title} className="detail-img" />
        <div>
          <span style={{ background: '#e2e8f0', padding: '4px 8px', borderRadius: '4px', fontSize: '0.85rem' }}>
            {product.category.toUpperCase()}
          </span>
          <h1 style={{ margin: '10px 0' }}>{product.title}</h1>
          <p style={{ color: '#64748b', marginBottom: '15px' }}>Brand: {product.brand || 'Generic'}</p>
          <h2 style={{ color: 'var(--primary-color)', marginBottom: '15px' }}>${product.price}</h2>
          <p style={{ lineHeight: '1.6', marginBottom: '20px' }}>{product.description}</p>
          <button className="btn" onClick={() => addToCart(product)}>Add to Cart</button>
        </div>
      </div>

      {/* Section 3: Specifications */}
      <section style={{ marginTop: '30px', background: 'white', padding: '20px', borderRadius: '8px' }}>
        <h3>Specifications</h3>
        <p>Rating: ⭐ {product.rating} / 5</p>
        <p>Stock Status: {product.stock > 0 ? `In Stock (${product.stock} available)` : 'Out of Stock'}</p>
        <p>Discount: {product.discountPercentage}% Off</p>
      </section>

      {/* Section 4: Delivery Info */}
      <section style={{ marginTop: '20px', background: 'white', padding: '20px', borderRadius: '8px' }}>
        <h3>Shipping Information</h3>
        <p>Ships in 1-3 business days. Free returns within 14 days of purchase.</p>
      </section>

      {/* Section 5: Policy */}
      <section style={{ marginTop: '20px', background: '#e0e7ff', padding: '15px', borderRadius: '8px', textAlign: 'center' }}>
        <p>🛡 100% Authentic product directly sourced from official manufacturers.</p>
      </section>
    </div>
  );
}

export default ProductDetail;