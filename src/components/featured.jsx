import { useState } from 'react';
import { Button } from 'react-bootstrap';
import imageMap from '../components/map';
import '../CSS/featured.css';
import { UseCart } from '../components/CartP';
import AddToCartModal from './AddToCartModal';

function ProductCard({ product }) {
  const { addToCart } = UseCart();
  const [showModal, setShowModal] = useState(false);
  const imageFile = Array.isArray(product.image) ? product.image[0] : product.image;
  const imageKey = imageFile.replace(/\.[^/.]+$/, "");
  return (
    <div className="product-card h-100 d-flex flex-column align-items-start justify-content-center">
      <img
        src={imageMap[imageKey]}
        alt={product.name}
        className="product-image"
        loading="lazy"
      />
      <div className="product-info d-flex justify-content-between align-items-start">
        <h3>{product.name}</h3>
        <h3 className="price">{product.price} EGP</h3>
      </div>
      <p className="product-desc">{product.description}</p>
      <Button className="add-to-bag" onClick={() => setShowModal(true)}>
        Add to bag
      </Button>
      <AddToCartModal
        product={product}
        show={showModal}
        onHide={() => setShowModal(false)}
        onConfirm={(size, color) => addToCart(product, size, color, 1)}
      />
    </div>
  );
}

export default ProductCard;