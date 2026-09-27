import React from 'react';
import { Link } from 'react-router-dom';

function Cart({ cartItems, removeFromCart, clearCart }) {
  const totalAmount = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div className="container section">
      {/* Section 1: Title Header */}
      <h1 className="section-title">Your Shopping Cart</h1>

      {cartItems.length === 0 ? (
        <div style={{ textAlign: 'center', padding: '40px' }}>
          <p>Your cart is currently empty.</p>
          <Link to="/products" className="btn" style={{ marginTop: '15px' }}>Start Shopping</Link>
        </div>
      ) : (
        <>
          {/* Section 2: Items Table */}
          <table className="cart-table">
            <thead>
              <tr>
                <th>Product</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Subtotal</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {cartItems.map((item) => (
                <tr key={item.id}>
                  <td>{item.title}</td>
                  <td>${item.price}</td>
                  <td>{item.quantity}</td>
                  <td>${(item.price * item.quantity).toFixed(2)}</td>
                  <td>
                    <button className="btn btn-danger" onClick={() => removeFromCart(item.id)}>Remove</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {/* Section 3: Summary Box */}
          <div className="cart-summary">
            <h3>Total: ${totalAmount.toFixed(2)}</h3>
            <p style={{ color: '#64748b', margin: '5px 0 15px' }}>Taxes and shipping calculated at checkout</p>
            <button className="btn btn-danger" style={{ marginRight: '10px' }} onClick={clearCart}>
              Clear Cart
            </button>
            <button className="btn" onClick={() => alert('Order placed successfully!')}>
              Checkout Now
            </button>
          </div>

          {/* Section 4: Discount Banner */}
          <section style={{ marginTop: '30px', background: '#fef3c7', padding: '15px', borderRadius: '8px', textStyle: 'center' }}>
            <p>💡 Have a coupon code? You can apply it on the checkout step!</p>
          </section>

          {/* Section 5: Guaranteed Checkout Banner */}
          <section style={{ marginTop: '20px', textAlign: 'center', color: '#64748b' }}>
            <p>🔒 256-Bit SSL Encrypted & Safe Checkout</p>
          </section>
        </>
      )}
    </div>
  );
}

export default Cart;