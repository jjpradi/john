
import React, { useEffect, useState } from 'react';

const PRODUCTS_API = "https://apis.ccbp.in/products/";

const SkeletonLoader = () => {
    const [loading, setLoading] = useState(true);
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchProducts = async () => {
            setLoading(true);
            try {
                const res = await fetch(PRODUCTS_API);
                const data = await res.json();
                setProducts(data.products);
            } catch {
                setProducts([]);
            }
            setLoading(false);
        };
        fetchProducts();
    }, []);

    return (
        <div className="skeleton-loader">
            {loading ? (
                <>
                    <div className="skeleton skeleton-title"></div>
                    <div className="skeleton skeleton-content"></div>
                    <div className="skeleton skeleton-content"></div>
                </>
            ) : (
                <ul>
                   
                </ul>
            )}
        </div>
    );
};

export default SkeletonLoader;
