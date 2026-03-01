import React, { useState, useEffect } from 'react';

const WISHLIST_KEY = 'wishlist_items';

const Wishlist = () => {
    const [items, setItems] = useState([]);

    useEffect(() => {
    
        const stored = localStorage.getItem(WISHLIST_KEY);
        if (stored) setItems(JSON.parse(stored));
    
    }, []);

    useEffect(() => {

        localStorage.setItem(WISHLIST_KEY, JSON.stringify(items));
    
}, [items]);

    const removeItem = id => {
    
        setItems(items.filter(item => item.id !== id));
    
    };

    return (
        <div className="wishlist-container">
            <h2>Wishlist</h2>
            {items.length === 0 ? (
                <p>No items in wishlist.</p>
            ) : (
                <ul>
                    {items.map(item => (
                        <li key={item.id}>
                            <img src={item.imageUrl} alt={item.title} width={60} />
                            <span>{item.title}</span>
                            <button onClick={() => removeItem(item.id)}>Remove</button>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default Wishlist;
