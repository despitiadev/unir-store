import React from "react";
import logo from '../images/Unir_2021_logo_white.svg';

import "../styles/footer.css";

export const Footer = () => {
    return (
        <footer id="store-footer" className="store__footer">
            <div className="footer__section">
                <div className="footer__logo">
                    <img src={logo} alt="Logo" />
                </div>
            </div>
            <div className="footer__section">
                <a href="/products" className="footer__link">Products</a>
                <p className="store__footer--copyright">UNIR Store Copyright © 2024. All rights reserved.</p>
            </div>
            <div className="footer__section">
                <a href="/about" className="footer__link">About</a>
            </div>
        </footer>
    );
}
