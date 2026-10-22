import { Link } from 'react-router-dom';
import '../CSS/Footer.css';

function Footer() {
    return (
        <footer className="site-footer">
            <div className="footer-top d-flex align-items-start justify-content-between flex-row">
                <div className="footer-brand d-flex align-items-start justify-content-start flex-column">
                    <Link to="/" className="footer-logo">tumble<span className="footer-dot">.</span></Link>
                    <p>Small-run basics from Porto. Since 2021.</p>
                </div>

                <div className="footer-links d-flex align-items-start justify-content-start flex-column">
                    <h3>Shop</h3>
                    <a href="#">Tops</a>
                    <a href="#">Bottoms</a>
                    <a href="#">Knitwear</a>
                    <a href="#">Bags</a>
                </div>

                <div className="footer-links d-flex align-items-start justify-content-start flex-column">
                    <h3>Help</h3>
                    <a href="#">Shipping</a>
                    <a href="#">Returns</a>
                    <a href="#">Size guide</a>
                    <a href="#">Repairs</a>
                </div>

                <div className="footer-links d-flex align-items-start justify-content-start flex-column">
                    <h3>Us</h3>
                    <a href="#">Our factories</a>
                    <a href="#">Instagram</a>
                    <a href="#">Jobs</a>
                    <a href="#">Contact</a>
                </div>
            </div>

            <p className="footer-copyright">© 2026 Tumble Goods Ltd. Wash cold.</p>
        </footer>
    );
}

export default Footer;
