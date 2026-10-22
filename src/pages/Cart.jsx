import { Link } from 'react-router-dom';
import { Row, Col, Button } from 'react-bootstrap';
import { UseCart } from '../components/CartP';
import imageMap from '../components/map';
import '../CSS/Cart.css';

function Cart() {
  const { cartItems, removeFromCart, updateCartItem, cartTotal } = UseCart();

  function getItemImage({ product, color }) {
    const colorIndex = product.colors.indexOf(color);
    const imageFile = Array.isArray(product.image)
      ? product.image[colorIndex] ?? product.image[0]
      : product.image;
    const imageKey = imageFile.replace(/\.[^/.]+$/, '');
    return imageMap[imageKey];
  }

  if (cartItems.length === 0) {
    return (
      <div id="cart-page" className="cart-empty d-flex align-items-center justify-content-center flex-column">
        <h1>Your bag is empty</h1>
        <p>Looks like you haven&apos;t added anything yet.</p>
        <Link to="/shop">
          <Button className="shop-now">Shop Now</Button>
        </Link>
      </div>
    );
  }

  return (
    <div id="cart-page">
      <div className="cart-header d-flex align-items-start justify-content-start flex-column">
        <h1>Your Bag</h1>
        <p>{cartItems.length} item{cartItems.length > 1 ? 's' : ''}</p>
      </div>

      <Row className="cart-layout w-100">
        <Col md={8} className="cart-items d-flex align-items-start justify-content-start flex-column">
          {cartItems.map((item) => {
            const { product, size, color, quantity } = item;

            return (
              <div className="cart-row d-flex align-items-start justify-content-start flex-row w-100" key={`${product.id}-${size}-${color}`}>
                <img src={getItemImage(item)} alt={product.name} className="cart-image" />
                <div className="cart-info d-flex align-items-start justify-content-start flex-column">
                  <h3>{product.name}</h3>
                  <p className="cart-variant">Size: {size} · Color: {color}</p>
                  <div className="d-flex align-items-center justify-content-start flex-row gap-2">
                    <Button
                      size="sm"
                      className="add-sub"
                      onClick={() =>
                        quantity === 1
                          ? removeFromCart(product.id, size, color, quantity)
                          : updateCartItem(product.id, size, color, quantity - 1)
                      }
                    >
                      −
                    </Button>
                    <span>{quantity}</span>
                    <Button
                      size="sm"
                      className="add-sub"
                      onClick={() => updateCartItem(product.id, size, color, quantity + 1)}
                    >
                      +
                    </Button>
                  </div>
                  <Button
                    variant="link"
                    size="sm"
                    className="rem"
                    onClick={() => removeFromCart(product.id, size, color, quantity)}
                  >
                    Remove
                  </Button>
                </div>
                <div className="cart-price ms-auto">{product.price * quantity} EGP</div>
              </div>
            );
          })}
        </Col>

        <Col md={4} className="cart-summary d-flex align-items-start justify-content-start flex-column">
          <h2>Summary</h2>
          <div className="d-flex align-items-center justify-content-between w-100">
            <span>Subtotal</span>
            <span>{cartTotal} EGP</span>
          </div>
          <p className="cart-summary-note">Shipping and taxes calculated at checkout.</p>
          <Button className="shop-now w-100">Checkout</Button>
          <Link to="/shop" className="cart-continue">
            Continue shopping
          </Link>
        </Col>
      </Row>
    </div>
  );
}

export default Cart;
