import { Link, useNavigate } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import '../CSS/Menu.css';

function Menu() {
  const navigate = useNavigate();

  return (
    <div id="menu">
      <div className="menu-topbar d-flex align-items-center justify-content-between flex-row">
        <Link to="/" className="menu-brand">tumble<span className="nav-dot">.</span></Link>
        <Button className="menu-close" onClick={() => navigate(-1)}>Close</Button>
      </div>

      <div className="menu-links d-flex align-items-start justify-content-center flex-column">
        <Link to="/shop" className="menu-link">Shop all</Link>
        <Link to="/lookbook" className="menu-link">Lookbook</Link>
        <Link to="/care" className="menu-link">Materials</Link>
        <Link to="/cart" className="menu-link">Your bag</Link>
      </div>

      <p className="menu-footer-note">Free shipping over £75 · 60-day returns, no side-eye</p>
    </div>
  );
}

export default Menu;
