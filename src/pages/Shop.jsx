import '../CSS/Shop.css';
import { Row, Col, Nav } from 'react-bootstrap';
import { getByCategory, getAllProducts } from '../components/products';
import ShopProductCard from '../components/ShopProductCard';
import { useState } from 'react';

function Shop() {
  const [category, setCategory] = useState('all');
  const products = category === 'all' ? getAllProducts() : getByCategory(category);

  return (
    <div id="shop">
      <div className="shop-container d-flex align-items-start justify-content-start flex-column">
        <div className="shop-header d-flex align-items-start justify-content-start flex-column">
          <h1>Everything We Make</h1>
          <p>Six pieces this season. Cut in small runs, restocked only <br />when the fabric allows.</p>
          <div>
            <Nav variant="pills" activeKey={category} onSelect={(key) => setCategory(key)} className="mb-3">
              <Nav.Link eventKey="all" className="NavLink">All</Nav.Link>
              <Nav.Link eventKey="tops" className="NavLink">Tops</Nav.Link>
              <Nav.Link eventKey="bottoms" className="NavLink">Bottoms</Nav.Link>
              <Nav.Link eventKey="outerwear" className="NavLink">Outerwear</Nav.Link>
              <Nav.Link eventKey="accessories" className="NavLink">Accessories</Nav.Link>
            </Nav>
          </div>
        </div>

        <Row className="shop-product-grid w-100">
          {products.map((product) => (
            <Col md={3} key={product.id} className="mb-4">
              <ShopProductCard product={product} />
            </Col>
          ))}
        </Row>

      </div>
    </div>
  );
}

export default Shop;