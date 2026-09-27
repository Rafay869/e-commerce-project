import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ShoppingCart, Menu, X } from 'lucide-react';

export default function Navbar({ cartCount }) {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <header className="navbar-header">
      <nav className="navbar">
        <Link to="/" className="logo" onClick={closeMenu}>
          My<span>Store</span>
        </Link>

        {/* Mobile Hamburger Toggle Button */}
        <button className="menu-icon" onClick={toggleMenu} aria-label="Toggle Menu">
          {isOpen ? <X size={26} /> : <Menu size={26} />}
        </button>

        {/* Nav Links */}
        <div className={`nav-links ${isOpen ? 'active' : ''}`}>
          <Link to="/" onClick={closeMenu} className={location.pathname === '/' ? 'active-link' : ''}>
            Home
          </Link>
          <Link to="/products" onClick={closeMenu} className={location.pathname.startsWith('/products') ? 'active-link' : ''}>
            Products
          </Link>
          <Link to="/contact" onClick={closeMenu} className={location.pathname === '/contact' ? 'active-link' : ''}>
            Contact
          </Link>
          <Link to="/cart" onClick={closeMenu} className="cart-link">
            <div className="cart-icon-wrapper">
              <ShoppingCart size={22} />
              {cartCount > 0 && <span className="badge">{cartCount}</span>}
            </div>
            <span className="cart-text">Cart</span>
          </Link>
        </div>
      </nav>
    </header>
  );
}