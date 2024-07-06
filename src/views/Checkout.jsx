import React, { useContext } from "react";
import { StoreContext } from "../components/StoreContext";
import { CheckoutItem } from "../components/CheckoutItem";
import { useNavigate } from "react-router-dom";

export const Checkout = () => {
    const navigate = useNavigate();
    const { cartProducts } = useContext(StoreContext);
    const total = cartProducts.reduce((acc, product) => acc + (product.price * product.qtyOut), 0);

    return (
        <div className="container mt-3">
            <h2>Checkout</h2>
            <div className="card mb-3">
                <div className="card-header">Shipping address</div>
                <div className="card-body">
                    <p><strong>John Doe</strong></p>
                    <p>Calle de García Martín, 21</p>
                    <p>Pozuelo de Alarcón, 28224</p>
                    <p>Madrid, España.</p>
                </div>
            </div>

            <div className="card mb-3">
                <div className="card-header">Payment method</div>
                <div className="card-body">
                    <p>Paying with cash</p>
                    <div>
                        <p><strong>Billing address:</strong></p>
                        <p><strong>John Doe</strong></p>
                        <p>Calle de García Martín, 21</p>
                        <p>Pozuelo de Alarcón, 28224</p>
                        <p>Madrid, España.</p>
                    </div>
                </div>
            </div>

            <div className="card mb-3">
                <div className="card-header">Review items and shipping</div>
                <div className="card-body">
                    {cartProducts.map((product, key) => <CheckoutItem key={key} item={product}/>)}
                </div>
            </div>

            <div className="card mb-3">
                <div className="card-header">Order Summary</div>
                <div className="card-body">
                    <p className='display-5'><strong>Order total: USD${total}</strong></p>
                    <button
                        disabled={cartProducts.length === 0}
                        onClick={() => navigate('/checkout/success')}
                        className="btn btn-primary"
                    >
                        Place your order
                    </button>
                </div>
            </div>
        </div>
    );
}
