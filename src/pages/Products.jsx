import { Link } from 'react-router-dom';

const productsData = [
  {
    id: 1,
    title: "Wireless Headphones",
    price: 99.99,
    category: "Electronics",
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&q=80",
    description: "High quality wireless noise-canceling headphones with deep bass."
  },
  {
    id: 2,
    title: "Smart Watch",
    price: 149.99,
    category: "Electronics",
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&q=80",
    description: "Sleek smartwatch with heart rate monitor and fitness tracking."
  },
  {
    id: 3,
    title: "Classic Denim Jacket",
    price: 59.99,
    category: "Clothing",
    image: "https://images.unsplash.com/photo-1576995853123-5a10305d93c0?w=500&q=80",
    description: "Stylish and durable denim jacket for all seasons."
  },
  {
    id: 4,
    title: "Minimalist Leather Backpack",
    price: 79.99,
    category: "Accessories",
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500&q=80",
    description: "Premium leather backpack with modern minimalist design."
  }
];

export default function Products({ addToCart }) {
  return (
    <div>
      <h2 style={{ fontSize: '28px', fontWeight: '800', marginBottom: '20px' }}>
        Our Products
      </h2>
      <div className="product-grid">
        {productsData.map((product) => (
          <div key={product.id} className="card">
            <img src={product.image} alt={product.title} />
            <h3>{product.title}</h3>
            <p>${product.price}</p>
            <div className="card-actions">
              <button className="btn" onClick={() => addToCart(product)}>
                Add to Cart
              </button>
              <Link to={`/products/${product.id}`} className="btn-secondary">
                Details
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}