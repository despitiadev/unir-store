import React from "react";
import { Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

import '../styles/product.css';

export const Product = ({ product, show_description }) => {
    const navigate = useNavigate();
    const handleCardClick = () => {
        navigate(`/products/${product.id}`);
    };
    return (
        <Card className="m-2 product__card hover_card" onClick={handleCardClick}>
            <div style={{ height: '150px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Card.Img variant="top" src={product.image} className="product__image" />
            </div>
            <Card.Body className="d-flex flex-column justify-content-between">
                <div>
                    <Card.Title>{product.title}</Card.Title>
                    {show_description && <Card.Text className="product__description">{product.description}</Card.Text>}
                </div>
                <div>
                    <strong>Price: </strong> <span className="product__price">US${product.price}</span>
                </div>
            </Card.Body>
        </Card>
    );
}
