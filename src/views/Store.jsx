import React from "react";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { StoreRouter } from "../router/StoreRouter";
import { StoreContext } from "../components/StoreContext";
import env from "react-dotenv";
import "../styles/store.css";

export const Store = () => {

    const [cartProducts, setCartProducts] = React.useState([]);
    const [wishlist, setWishlist] = React.useState([]);
    const url = `${env.API_URL}`;
    const [cartId, setCartId] = React.useState(null); // Estado para guardar el ID del carrito

    const createCartIfNeeded = async () => {
        if (!cartId) {
            const createCartResponse = await fetch(`${url}carts`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            if (!createCartResponse.ok) {
                throw new Error('Error al crear el carrito');
            }

            const createCartData = await createCartResponse.json();
            setCartId(createCartData.id); // Guardar el ID del carrito
            return createCartData.id;
        }
        return cartId;
    };

    const addProductToCart = async (productoNuevo) => {
        try {
            const currentCartId = await createCartIfNeeded();

            const addProductResponse = await fetch(`${url}carts/${currentCartId}/products`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    productId: productoNuevo.id,
                    qty: productoNuevo.qty,
                }),
            });

            if (!addProductResponse.ok) {
                console.log(addProductResponse);
                throw new Error('Error al agregar el producto al carrito');
            }

            // Actualizar el estado del carrito
            setCartProducts((prevCartProducts) => {
                const productExists = prevCartProducts.some(product => product.id === productoNuevo.id);

                if (productExists) {
                    return prevCartProducts.map(product =>
                        product.id === productoNuevo.id
                            ? { ...product, cantidad: product.cantidad + productoNuevo.cantidad }
                            : product
                    );
                } else {
                    return [...prevCartProducts, productoNuevo];
                }
            });

        } catch (error) {
            console.error('Error:', error);
        }
    };

    const removeProductFromCart = (product) => {
        let productInCart = cartProducts.find((item) => item.id === product.id);
        if (productInCart.quantity > 1) {
            productInCart.quantity--;
            setCartProducts([...cartProducts]);
        } else {
            setCartProducts(cartProducts.filter((item) => item.id !== product.id));
        }
    };

    const addProductToWishlist = (product) => {
        let productInWishlist = wishlist.find((item) => item.id === product.id);
        if (!productInWishlist) {
            setWishlist([...wishlist, product]);
        }
    };

    const removeProductFromWishlist = (product) => {
        setWishlist(wishlist.filter((item) => item.id !== product.id));
    };

    return (
        <div className="store">
            <Header />
            <StoreContext.Provider value={{
                cartProducts,
                wishlist,
                setCartProducts,
                addProductToCart,
                removeProductFromCart,
                addProductToWishlist,
                removeProductFromWishlist,
            }}>
                <StoreRouter />
            </StoreContext.Provider>
            <Footer />
        </div>
    );
};
