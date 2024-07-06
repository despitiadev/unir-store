import React, { useContext } from "react";
import { Link } from 'react-router-dom';
import { StoreContext } from "../components/StoreContext";
import { WishlistItem } from "../components/WishlistItem";
import { PageTitle } from "../components/PageTitle";

export const Wishlist = () => {
    const { wishlist } = useContext(StoreContext);

    return (
        <div>
            <PageTitle />
            <div className="container mt-3">
                {wishlist.length === 0 && (<><h5 className="text-center">Your wishlist is empty</h5><Link className="text-center nav-link fs-3 bg-success text-white underline-on-hover" to="/products">Go to products</Link></>)}
                {wishlist.length > 0 && (
                    <div className="list-group">
                        {wishlist.map((product, key) => <WishlistItem key={key} item={product} />)}
                    </div>
                )}
            </div>
        </div>
    );
}
