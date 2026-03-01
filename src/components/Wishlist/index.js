
import React, { useState, useEffect } from 'react';

const WISHLIST_KEY = 'wishlist_items';
const PRODUCTS_API = "https://apis.ccbp.in/products/";

const Wishlist = () => {
    const [items, setItems] = useState([]);
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");
    const [selected, setSelected] = useState("");

    useEffect(() => {
        const stored = localStorage.getItem(WISHLIST_KEY);
        if (stored) setItems(JSON.parse(stored));
    }, []);

    useEffect(() => {
        localStorage.setItem(WISHLIST_KEY, JSON.stringify(items));
    }, [items]);

    useEffect(() => {
        const fetchProducts = async () => {
            setLoading(true);
            setError("");
            try {
                const res = await fetch(PRODUCTS_API);
                if (!res.ok) throw new Error("Failed to fetch products");
                const data = await res.json();
                setProducts(data.products);
            } catch {
                setError("Unable to load products.");
            }
            setLoading(false);
        };
        fetchProducts();
    }, []);

    const addItem = id => {
        const product = products.find(p => p.id === id);
        if (product && !items.some(i => i.id === id)) {
            setItems([...items, product]);
        }
    };

    const removeItem = id => {
        setItems(items.filter(item => item.id !== id));
    };

    return (
        <div className="wishlist-container">
            <h2>Wishlist</h2>
            {loading ? (
                <p>Loading products...</p>
            ) : error ? (
                <p style={{ color: '#d32f2f' }}>{error}</p>
            ) : (
                <>
                    <div style={{ marginBottom: '1rem' }}>
                        <select value={selected} onChange={e => setSelected(e.target.value)}>
                            <option value="">Select product to add</option>
                            {products.map(p => (
                                <option key={p.id} value={p.id}>{p.title}</option>
                            ))}
                        </select>
                        <button
                            style={{ marginLeft: '0.5rem' }}
                            onClick={() => { if (selected) addItem(selected); }}
                            disabled={!selected}
                        >Add to Wishlist</button>
                    </div>
                    {items.length === 0 ? (
                        <p>No items in wishlist.</p>
                    ) : (
                        <ul>
                            {items.map(item => (
                                <li key={item.id}>
                                    <img src={item.image_url} alt={item.title} width={60} />
                                    <span>{item.title}</span>
                                    <button onClick={() => removeItem(item.id)}>Remove</button>
                                </li>
                            ))}
                        </ul>
                    )}
                </>
            )}
        </div>
    );
};

export default Wishlist;
