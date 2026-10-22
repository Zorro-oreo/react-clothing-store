import '../CSS/Home.css';
import { Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import getCurrentSeason from '../components/Season';
import { getByTag, getHeroProduct, getLookbookPreview } from '../components/products';
import ProductCard from '../components/featured';
import imageMap from '../components/map';
import AddToCartModal from '../components/AddToCartModal';
import { UseCart } from '../components/CartP';

function Home() {
  const { addToCart } = UseCart();
  const [currentDay] = useState(new Date().toLocaleDateString('en-US', { weekday: 'long' }));
  const [currentSeason] = useState(getCurrentSeason());
  const heroProduct = getHeroProduct();
  const featuredProducts = getByTag('New');
  const heroImageFile = Array.isArray(heroProduct.image) ? heroProduct.image[0] : heroProduct.image;
  const heroImageKey = heroImageFile.replace(/\.[^/.]+$/, "");
  const lookbookPreview = getLookbookPreview();
  const testimonials = [
    { quote: "Wore the cardigan four days running. Nobody said anything, which I'm taking as a win.", author: 'Neve R.', product: 'Fuzzy Zip Cardigan' },
    { quote: "The jeans have pockets that fit my phone. I've told everyone I know.", author: 'Sam O.', product: 'Baggy Twill Jeans' },
    { quote: 'Ordered Monday, wearing it Thursday, still soft after eight washes.', author: 'Priya K.', product: 'Puff-Sleeve Crop Tee' },
  ];
  const [showModal, setShowModal] = useState(false);


  return (
    <div id="home">
      <div className="landing d-flex align-items-start justify-content-start flex-column">
        <div className="hero d-flex align-items-start justify-content-start flex-row">
          <div className="hero-text d-flex align-items-start justify-content-start flex-column">
            <div className="collection d-flex align-items-center justify-content-center flex-row">
              <div className="dot"></div>
              <p>{currentSeason}</p>
            </div>
            <div className="d-flex align-items-start justify-content-start flex-row">
              <h1>Clothes that can take a <span id="current-day">{currentDay}</span>.</h1>
            </div>
            
            <h2>Soft cotton, roomy cuts, colours borrowed from <br></br>snack packaging. Made in small runs so you don't see <br></br>yourself coming.</h2>
            <div className="d-flex align-items-center justify-content-start flex-row mt-4 gap-3">
              <Link to="/shop">
                <Button className="shop-now">Shop New Collection</Button>
              </Link>
              <Link to="/lookbook">
                <Button className="learn-more">See the Lookbook</Button>
              </Link>
            </div>
            <div className="d-flex align-items-center justify-content-start flex-row mt-4 gap-4" id="hero-info">
              <p>Egyptian cotton</p>
              <p>Made in Egypt</p>
              <p>30-day returns</p>
            </div>
          </div>

          <Button variant="link" onClick={() => setShowModal(true)} className="hero-image-link">
            <img
              src={imageMap[heroImageKey]}
              alt={heroProduct.name}
              className="hero-image"
            />
          </Button>
          <AddToCartModal
            product={heroProduct}
            show={showModal}
            onHide={() => setShowModal(false)}
            onConfirm={(size, color) => addToCart(heroProduct, size, color, 1)}
          />

        </div>
      </div>

      <div className="featured-products d-flex align-items-start justify-content-start flex-column">
        <div className="d-flex align-items-center justify-content-between flex-row w-100">
          <h2>Out Now</h2>
          <p>Four pieces, cut once. Restocks are a maybe.</p>
        </div>
        <div className="products d-flex align-items-start justify-content-start flex-row gap-4 mt-4">
          <Row className="product-grid w-100">
            {featuredProducts.map((product) => (
              <Col md={3} key={product.id} className="mb-4">
                <ProductCard product={product} />
              </Col>
            ))}
          </Row>
        </div>
      </div>

      <div className="lookbook d-flex align-items-start justify-content-start flex-column">
        <div className="d-flex align-items-start justify-content-start flex-column w-100">
          <h2>Lookbook 01</h2>
          <p>Shot on a Sunday in Porto, mostly between snacks.</p>
        </div>
        <div className="lookbook-preview-grid mt-4">
          {lookbookPreview.map((product, index) => {
            const imageFile = Array.isArray(product.image) ? product.image[0] : product.image;
            const imageKey = imageFile.replace(/\.[^/.]+$/, "");
            return (
              <div className={`lookbook-preview-item lookbook-preview-item-${index + 1}`} key={product.id}>
                <img
                  src={imageMap[imageKey]}
                  alt={product.name}
                  className="lookbook-preview-image"
                  loading="lazy"
                />
              </div>
            );
          })}
        </div>
      </div>

      <div className="materials-care d-flex align-items-start justify-content-start flex-column">
        <h2>Materials & care</h2>
        <div className="materials-care-grid mt-4">
          <div className="materials-care-item">
            <div className="materials-care-icon materials-care-icon-green"></div>
            <h3>Organic cotton, GOTS</h3>
            <p>Grown without synthetic pesticides. It softens for about six washes, then stays put.</p>
          </div>
          <div className="materials-care-item">
            <div className="materials-care-icon materials-care-icon-peach"></div>
            <h3>Wash cold, dry flat</h3>
            <p>30°C, inside out, with things of a similar colour. Tumble dryers are a fight you'll lose.</p>
          </div>
          <div className="materials-care-item">
            <div className="materials-care-icon materials-care-icon-gray"></div>
            <h3>Repairs, free, forever</h3>
            <p>Send it back with a note about what happened. We fix seams, buttons and most regrets.</p>
          </div>
        </div>
      </div>

      <div className="testimonials d-flex align-items-start justify-content-start flex-column">
        <h2>What people say</h2>
        <div className="testimonials-grid mt-4">
          {testimonials.map((testimonial) => (
            <div className="testimonial-item" key={testimonial.author}>
              <p className="testimonial-quote">{testimonial.quote}</p>
              <p className="testimonial-author">{testimonial.author} · {testimonial.product}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="newsletter-wrapper">
        <div className="newsletter d-flex align-items-center justify-content-between flex-row">
          <div className="newsletter-text d-flex align-items-start justify-content-start flex-column">
            <h2>Get told first</h2>
            <p>One email per drop. No streetwear philosophy.</p>
          </div>
          <form className="newsletter-form d-flex align-items-center justify-content-start flex-row">
            <input type="email" placeholder="you@wherever.com" className="newsletter-input" />
            <Button type="submit" className="newsletter-submit">Sign me up</Button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Home;