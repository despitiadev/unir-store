import React, { useContext, useState } from "react";
import { useParams } from 'react-router-dom';
import { useFetch } from '../hooks/useFetch';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useNavigate } from "react-router-dom";

import { StoreContext } from "../components/StoreContext";
import { Loader } from "../components/Loader";
import { PageTitle } from "../components/PageTitle";

import "../styles/product-details.css";

export const ProductDetails = () => {
    const { id } = useParams();
    const path = `products/${id}`;
    const productResponse = useFetch(path);
    const product = productResponse.fetchResponse;
    const { addProductToCart, addProductToWishlist } = useContext(StoreContext);
    const navigate = useNavigate();
    const addToCartAndNavigate = async () => {
        product.qtyOut = unidades;
        try {
            await addProductToCart(product); // Esperar a que addProductToCart termine
            navigate("/cart"); // Navegar a la página del carrito después de que el producto se haya agregado
        } catch (error) {
            console.error('Error al agregar el producto al carrito:', error);
            // Opcional: Manejar el error (por ejemplo, mostrar un mensaje al usuario)
        }
    };
    const [unidades, setUnidades] = useState(1);
    const sumarUnidad = () => {
        if (product.qty > unidades) {
            setUnidades(unidades + 1);
        }
    };
    const restarUnidad = () => {
        if (unidades > 1) {
            setUnidades(unidades - 1);
        }
    };
    return (
        <div id="store-product-details" className="store__product__details">
            <PageTitle />
            {productResponse.isLoading && <Loader visible={productResponse.isLoading} />}
            <div id="store-product-details-container" className={`${productResponse.isLoading ? "d-none " : ""} store__product__details--container container mt-5`}>
                <div id='store-product-details-body' className="store__product__details--body row">
                    <div className="col-md-2"></div>
                    <div className="store__product__details--image col-md-4">
                        <img src={product.image} alt={product.title} className="img-fluid" />
                    </div>
                    <section id="store-product-details-info" className="store__product__details--info col-md-6">
                        <h2 id="store-product-details-info-title" className="store__product__details__info--title">
                            {product.name}
                        </h2>
                        <p className="store__product__details__info--price">US${product.price}</p>
                        <p className="store__product__details__info--qty">Disponibles: {product.qty}</p>

                        <div className="d-flex align-items-center mb-3">
                            <button onClick={restarUnidad} className="btn btn-secondary me-2">-</button>
                            <span>{unidades}</span>
                            <button onClick={sumarUnidad} className="btn btn-secondary ms-2">+</button>
                        </div>
                        <button onClick={() => addToCartAndNavigate(product, unidades)}
                            className="btn btn-warning mt-3 mb-3 me-2">
                            <FontAwesomeIcon icon="shopping-cart" /> Add to cart
                        </button>
                        <button onClick={() => addProductToWishlist(product)}
                            className="btn btn-outline-danger mt-3 mb-3">
                            <FontAwesomeIcon icon="heart" />
                        </button>

                    </section>
                    <div
                        id="store-product-details-info-description"
                        className="store__product__details__info--description accordion"
                    >
                        <div className="accordion-item">
                            <h2 className="accordion-header" id="headingOne">
                                <button
                                    className="accordion-button"
                                    type="button"
                                    data-bs-toggle="collapse"
                                    data-bs-target="#collapseOne"
                                    aria-expanded="true"
                                    aria-controls="collapseOne"
                                >
                                    Description
                                </button>
                            </h2>
                            <div
                                id="collapseOne"
                                className="accordion-collapse collapse show"
                                aria-labelledby="headingOne"
                                data-bs-parent="#store-product-details-info-description"
                            >
                                <div className="accordion-body">
                                    <p className="store__product__details__info--description--description">{product.description}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
