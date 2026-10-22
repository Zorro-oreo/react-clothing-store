import '../CSS/Lookbook.css';
import { Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { getAllProducts } from '../components/products';
import imageMap from '../components/map';
import getCurrentSeason from '../components/Season';
import { useState } from 'react';

function Lookbook() {
  const allProducts = getAllProducts();
  const [currentSeason] = useState(getCurrentSeason());

  return (
    <div id="lookbook">
      <div className="landing d-flex align-items-start justify-content-start flex-column">

        <div className="lookbook-header d-flex align-items-start justify-content-between w-100">
          <div id="lookbook-text" className="d-flex align-items-start justify-content-start flex-column">
            <div className="collection d-flex align-items-center justify-content-center flex-row">
              <div className="dot"></div>
              <p>{currentSeason}</p>
            </div>
            <div className="d-flex align-items-start justify-content-start flex-row" id="lookbook-title">
              <h1>Lookbook 01</h1>
              <p className="lookbook-desc">
                Shot on a Sunday in Porto, mostly between snacks. Six looks, <br />
                all pieces from the current drop, nothing styled we wouldn't <br />
                wear on a bus.
              </p>
            </div>
          </div>
        </div>
        
        <Row className="w-100 mt-5">
          {allProducts.map((product, index) => {
            const imageFile = Array.isArray(product.image) ? product.image[0] : product.image;
            const imageKey = imageFile.replace(/\.[^/.]+$/, "");
            return (
              <Col md={6} key={product.id} className="mb-5">
                <img
                  src={imageMap[imageKey]}
                  alt={product.name}
                  className="lookbook-image"
                  loading="lazy"
                />
                <div className="lookbook-caption d-flex align-items-center justify-content-between">
                  <h3>Look {String(index + 1).padStart(2, '0')}</h3>
                </div>
              </Col>
            );
          })}
        </Row>
      </div>
        <div className="sub-landing d-flex align-items-center justify-content-center w-100 mt-4">
          <Link to="/shop">
            <Button className="shop-now">Shop these pieces</Button>
          </Link>
        </div>
    </div>
  );
}

export default Lookbook;