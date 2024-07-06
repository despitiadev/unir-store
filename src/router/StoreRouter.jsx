import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Home } from "../views/Home";
import { Menu } from "../components/Menu";
import { ProductList } from "../views/ProductList";
import { ProductDetails } from "../views/ProductDetails";
import { Cart } from "../views/Cart";
import { About } from "../views/About";
import { CategoryList } from "../views/CategoryList";
import { Wishlist } from "../views/Wishlist";
import {Checkout} from "../views/Checkout";
import { CheckoutSuccess } from "../views/CheckoutSuccess";

export const StoreRouter = () => {
    return (
        <Router>
            <Menu />
            <Routes>
                <Route path="/" element={<Home />}/>
                <Route path="/cart/" element={<Cart />}/>
                <Route path="/about" element={<About />}/>
                <Route path="/category/:category" element={<CategoryList />}/>
                <Route path="/checkout/" element={<Checkout />}/>
                <Route path="/checkout/success/" element={<CheckoutSuccess />}/>
                <Route path="/products" element={<ProductList />}/>
                <Route path="/products/:id" element={<ProductDetails />}/>
                <Route path="/products/search/:term" element={<ProductList />}/>
                <Route path="/wishlist/" element={<Wishlist />}/>
            </Routes>
        </Router>
    );
}
