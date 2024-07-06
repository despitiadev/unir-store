import React, { useContext } from "react";
import { StoreContext } from "./StoreContext";

import "../styles/cart-item.css";

export const CartItem = ({ item }) => {
    const { removeProductFromCart, addProductToWishlist } = useContext(StoreContext);

    const valorFinal = item.price * item.qtyOut;

    const saveForLater = (item) => {
        addProductToWishlist(item);
        removeProductFromCart(item);
    };

    console.log(item);

    return (
        <div>
            <div className="list-group-item my-1 rounded-2">
                <div className="row g-0">
                    <div className="col-md-2">
                        <img src={item.image} alt={item.title} className="img-fluid rounded-start" />
                    </div>
                    <div className="store__cart__item__info col-md-8">
                        <div className="store__cart__item__info mx-4">
                            <h5 className="card-title mb-2">{item.title}</h5>
                            <p>Cantidad: {item.qtyOut}</p>
                            <p>
                                <button onClick={() => saveForLater(item)}
                                    className="btn btn-primary btn-sm me-2">Save for later
                                </button>
                                <button onClick={() => removeProductFromCart(item)}
                                    className="btn btn-outline-danger btn-sm">Delete
                                </button>
                            </p>
                        </div>
                    </div>
                    <div className="col-md-2">
                        <div className="store__cart__item__body__price">
                            <p className="store__cart__item__body__price--price card-text">US${valorFinal}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
