import { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import imageMap from './map';
import '../CSS/AddToCartModal.css';

function AddToCartModal({ product, show, onHide, onConfirm }) {
  const [size, setSize] = useState(product.sizes[0]);
  const [color, setColor] = useState(product.colors[0]);

  const colorIndex = product.colors.indexOf(color);
  const imageFile = Array.isArray(product.image)
    ? product.image[colorIndex] ?? product.image[0]
    : product.image;
  const imageKey = imageFile.replace(/\.[^/.]+$/, '');

  function handleConfirm() {
    onConfirm(size, color);
    onHide();
  }

  return (
    <Modal show={show} onHide={onHide} centered className="options-modal">
      <Modal.Header closeButton>
        <Modal.Title>{product.name}</Modal.Title>
      </Modal.Header>
      <Modal.Body className="d-flex gap-4">
        <img src={imageMap[imageKey]} alt={product.name} className="options-image" loading="lazy" />
        <div className="flex-grow-1">
          <p className="options-price">{product.price} EGP</p>

          <p className="options-label">Size</p>
          <div className="options-row">
            {product.sizes.map((s) => (
              <button
                key={s}
                type="button"
                className={`option-pill ${size === s ? 'active' : ''}`}
                onClick={() => setSize(s)}
              >
                {s}
              </button>
            ))}
          </div>

          <p className="options-label">Color</p>
          <div className="options-row">
            {product.colors.map((c) => (
              <button
                key={c}
                type="button"
                className={`option-pill ${color === c ? 'active' : ''}`}
                onClick={() => setColor(c)}
              >
                {c}
              </button>
            ))}
          </div>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button className="shop-now w-100" onClick={handleConfirm}>
          Add to bag
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default AddToCartModal;
