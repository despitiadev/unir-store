import React, { useContext } from "react";
import { Link } from 'react-router-dom';
import { Finder } from "./Finder";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { StoreContext } from "./StoreContext";
import "../styles/menu.css";

export const Menu = () => {
    const { cartProducts, wishlist } = useContext(StoreContext);

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <div className="d-flex justify-content-center w-100">
                    <div id="store-navbar-bar" className="collapse navbar-collapse">
                        <ul className="navbar-nav mx-auto">
                            <li className="nav-item">
                                <Link className="nav-link fs-5 underline-on-hover" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link fs-5 underline-on-hover" to="/products">Products</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link fs-5 underline-on-hover" to="/wishlist">
                                    <FontAwesomeIcon icon="heart" /> Wishlist ({wishlist.length})
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link fs-5 underline-on-hover" to="/cart">
                                    <FontAwesomeIcon icon="shopping-cart" /> Cart ({cartProducts.length})
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
                <Finder />
            </div>
        </nav>
    );
}
