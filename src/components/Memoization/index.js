import React, { useMemo } from 'react';

const Memoization = ({ items }) => {
    const expensiveCalculation = useMemo(() => {
        return items.map(item => item.name.toUpperCase());
    }, [items]);

    return (
        <div className="memoization">
            <h2>Memoized Items</h2>
            <ul>
                {expensiveCalculation.map((name, idx) => (
                    <li key={idx}>{name}</li>
                ))}
            </ul>
        </div>
    );
};

export default Memoization;
