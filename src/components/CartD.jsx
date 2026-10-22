import { Offcanvas, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { UseCart } from '../components/CartP';
import imageMap from './map';
import '../CSS/CartD.css';

function CartDrawer() {
  const { cartItems, isCartOpen, closeCart, removeFromCart, updateCartItem, cartTotal } = UseCart();

  return (
    <Offcanvas show={isCartOpen} onHide={closeCart} placement="end" className="cart-drawer">
      <Offcanvas.Header closeButton className="header">
        <Offcanvas.Title className="title">Your bag</Offcanvas.Title>
      </Offcanvas.Header>

      <Offcanvas.Body className="d-flex flex-column">
        {cartItems.length === 0 ? (
          <p className="text-muted">Nothing in here yet.</p>
        ) : (
          <>
            <div className="flex-grow-1">
              {cartItems.map((item) => {
                const { product, size, color, quantity } = item;
                const colorIndex = product.colors.indexOf(color);
                const imageFile = Array.isArray(product.image)
                  ? product.image[colorIndex] ?? product.image[0]
                  : product.image;
                const imageKey = imageFile.replace(/\.[^/.]+$/, '');
                return (
                  <div className="drawer-item d-flex gap-3 mb-4" key={`${product.id}-${size}-${color}`}>
                    <img src={imageMap[imageKey]} alt={product.name} className="drawer-image" loading="lazy" />
                    <div className="flex-grow-1">
                      <h4>{product.name}</h4>
                      <p className="text-muted mb-2">Size: {size} · Color: {color}</p>
                      <div className="d-flex align-items-center gap-2">
                        <Button
                          className="add-sub"
                          size="sm"
                          onClick={() =>
                            quantity === 1
                              ? removeFromCart(product.id, size, color, quantity)
                              : updateCartItem(product.id, size, color, quantity - 1)
                          }
                        >
                          −
                        </Button>
                        <span>{quantity}</span>
                        <Button className="add-sub" size="sm" onClick={() => updateCartItem(product.id, size, color, quantity + 1)}>+</Button>
                      </div>
                    </div>
                    <div className="d-flex flex-column align-items-end">
                      <span>{product.price * quantity} EGP</span>
                      <Button className="rem" variant="link" size="sm" onClick={() => removeFromCart(product.id, size, color, quantity)}>
                        Remove
                      </Button>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="drawer-footer">
              <div className="d-flex justify-content-between mb-3">
                <strong>Total</strong>
                <strong>{cartTotal} EGP</strong>
              </div>
              <div className="d-flex justify-content-between mb-3">
                <strong className="sub-muted mb-3">Shipping and taxes calculated at checkout.</strong>
                <strong className="sub-muted mb-3">Free shipping over 2000EGP.</strong>
              </div>
              <div className="d-flex justify-content-center">
                <Link to="/cart" onClick={closeCart}>
                    <Button className="shop-now w-100">View full bag</Button>
                </Link>
              </div>
            </div>
          </>
        )}
      </Offcanvas.Body>
    </Offcanvas>
  );
}

export default CartDrawer;