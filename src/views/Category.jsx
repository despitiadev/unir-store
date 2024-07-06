import React from "react";
import { Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

import '../styles/category.css';

export const Category = ({ index, category }) => {
    const navigate = useNavigate();

    const handleCardClick = () => {
        navigate(`/category/${category}`);
    };

    const images = {
        "electronics": "https://picsum.photos/id/367/300/200",
        "jewelery": "https://picsum.photos/id/26/300/200",
        "men's clothing": "https://picsum.photos/id/604/300/200",
        "women's clothing": "https://picsum.photos/id/325/300/200",
    };
    return (
        <div className="col-sm-6 col-md-4 col-lg-3">
            <Card className="m-2 category__containe hover_card" onClick={handleCardClick}>
                <div className="category__container--img">
                    <Card.Img variant="top" src={images[category]} className="product__image" />
                </div>
                <Card.Body className="d-flex flex-column justify-content-between">
                    <Card.Title className="text-center text-capitalize">{category}</Card.Title>
                </Card.Body>
            </Card>
        </div>
    );
}
