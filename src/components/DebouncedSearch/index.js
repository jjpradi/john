import React, { useState } from 'react';

let debounceTimeout;

const DebouncedSearch = () => {
    const [query, setQuery] = useState('');
    const [result, setResult] = useState('');

    const handleChange = e => {
        const value = e.target.value;
        setQuery(value);
        clearTimeout(debounceTimeout);
        

        debounceTimeout = setTimeout(() => {
    
            setResult(`Results for: ${value}`);
    
        }, 500);
        
    };




    return (
        <div className="debounced-search">
            <input value={query} onChange={handleChange} placeholder="Search..." />
            <div>{result}</div>
        </div>
    );


};

export default DebouncedSearch;
