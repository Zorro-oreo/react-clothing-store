import { useState } from 'react';
import { Button } from 'react-bootstrap';
import imageMap from './map';
import { UseCart } from './CartP';
import AddToCartModal from './AddToCartModal';

function ShopProductCard({ product }) {
  const { addToCart } = UseCart();
  const [showModal, setShowModal] = useState(false);
  const imageFile = Array.isArray(product.image) ? product.image[0] : product.image;
  const imageKey = imageFile.replace(/\.[^/.]+$/, "");
  return (
    <div className="shop-product-card h-100 d-flex flex-column align-items-start justify-content-center">
      <img
        src={imageMap[imageKey]}
        alt={product.name}
        className="shop-product-image"
        loading="lazy"
      />
      <div className="shop-product-info d-flex justify-content-between align-items-start">
        <h3>{product.name}</h3>
        <h3 className="shop-price">{product.price} EGP</h3>
      </div>
      <p className="shop-product-desc">{product.description}</p>
      <Button className="shop-add-to-bag" onClick={() => setShowModal(true)}>
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

export default ShopProductCard;
