import React, { useContext } from "react";
import { StoreContext } from "./StoreContext";

import '../styles/checkout-item.css';

export const CheckoutItem = ({ item }) => {
    const { removeProductFromCart } = useContext(StoreContext);

    return (
        <div>
            <div className="d-flex align-items-center">
                <div className="flex-shrink-0">
                    <img src={item.image} alt={item.title}
                        className="store__checkout__item--image img-fluid rounded-start"
                    />
                </div>
                <div className="flex-grow-1 ms-3 d-flex align-items-center">
                    <b>Cantidad: {item.qtyOut}</b>
                </div>
                <div className="flex-grow-1 ms-3 d-flex align-items-center">
                    <p className="mb-0">{item.title}</p>
                    <button
                        onClick={() => removeProductFromCart(item)}
                        className="store__checkout__item__button--delete btn btn-outline-danger btn-sm"
                    >Delete
                    </button>
                </div>
            </div>
            <br />
        </div>
    );
}
