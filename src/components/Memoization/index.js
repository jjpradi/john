
import React, { useMemo, useEffect, useState } from 'react';

const PRODUCTS_API = "https://apis.ccbp.in/products/";

const Memoization = () => {
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        const fetchProducts = async () => {
            setLoading(true);
            setError("");
            try {
                const res = await fetch(PRODUCTS_API);
                if (!res.ok) throw new Error("Failed to fetch products");
                const data = await res.json();
                setItems(data.products);
            } catch {
                setError("Unable to load products.");
            }
            setLoading(false);
        };
        fetchProducts();
    }, []);

    const expensiveCalculation = useMemo(() => {
        return items.map(item => item.title.toUpperCase());
    }, [items]);

    return (
        <div className="memoization">
            <h2>Memoized Product Titles</h2>
            {loading ? (
                <div>Loading products...</div>
            ) : error ? (
                <div style={{ color: '#d32f2f' }}>{error}</div>
            ) : (
                <ul>
                    {expensiveCalculation.map((name, idx) => (
                        <li key={idx}>{name}</li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default Memoization;
