import React from "react";
import { useFetch } from '../hooks/useFetch';
import { Product } from "../components/Product";
import { Loader } from "../components/Loader";
import { PageTitle } from "../components/PageTitle";
import { useParams } from "react-router-dom";


export const ProductList = () => {
    const response = useFetch('products');
    let products = response.fetchResponse;
    const isLoading = response.isLoading;
    const { term } = useParams();

    if (term) {
        products = products.filter(product => product.title.toLowerCase().includes(term.toLowerCase()));
    }

    return (
        <div>
            <PageTitle />
            <div className="text-center">
                {isLoading && <Loader visible={isLoading}/>}
            </div>
            <div className="container">
                <div className="row">
                    {products.map((product, key) => <Product key={key} product={product}/>)}
                </div>
            </div>
        </div>
    );
};
