import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import { UseCart } from './CartP';
import '../CSS/Nav.css';

function NavBar() {
    const { cartCount, openCart } = UseCart();
    return (
        <Navbar expand="lg" className="navbar-blur">
            <Container>
                <Navbar.Brand as={Link} to="/">tumble<span className="nav-dot">.</span></Navbar.Brand>
                <Nav className="me-auto mx-3">
                    <Nav.Link as={NavLink} to="/shop">Shop</Nav.Link>
                    <Nav.Link as={NavLink} to="/lookbook">Lookbook</Nav.Link>
                    <Nav.Link as={NavLink} to="/care">Care</Nav.Link>
                </Nav>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <Button className="cart mx-4" onClick={openCart}>
                            Cart <div className="count">{cartCount}</div>
                        </Button>
                        <Button as={Link} to="/menu" className="menu">Menu</Button>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default NavBar;