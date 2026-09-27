import React from 'react';
import { Link } from 'react-router-dom'
function ProductCard({ product, addToCart }) {
    return(
        <div className="product-card">
            <img src={product.thumbnail} alt={product.title} />
            <div className="product-info">
                <h3 className='product-title'>{product.title}</h3>
                <p className='product.price'>{product.price}</p>
                <div>
                <Link to={`/products/${product.id}`} className="btn btn-secondary" style={{ flex: 1, textAlign: 'center' }}>
                 Details
                 </Link>
                <button className='btn' style={{ flex: 1 }} onClick={() => addToCart(product)}>Add</button>
                </div>
            </div>
        </div>
    )
}
export default ProductCard