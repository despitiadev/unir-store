// src/components/PageTitle.js
import React from 'react';
import { useLocation } from 'react-router-dom';
import '../styles/PageTitle.css'; // Asegúrate de crear este archivo CSS

export const PageTitle = () => {
    const location = useLocation();
    const path = location.pathname;
    const basePath = path.split('/').slice(0, 2).join('/');

    // Función para formatear el nombre de la ruta
    const getPageTitle = () => {
        switch (basePath) {
            case '/':
                return 'Home - Categories';
            case '/about':
                return 'About';
            case '/products':
                return 'Products';
            case '/wishlist':
                return 'Wishlist';
            case '/cart':
                return 'Cart';
            default:
                return 'Page not found';
        }
    };

    return (
        <div className="page-title">
            <h1>{getPageTitle()}</h1>
        </div>
    );
};
