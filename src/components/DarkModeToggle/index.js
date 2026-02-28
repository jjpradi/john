import React, { useState } from 'react';

const DarkModeToggle = () => {
    const [dark, setDark] = useState(false);

    const toggleDark = () => {

        setDark(!dark);
        document.body.className = dark ? '' : 'dark-mode';

    };

    return (

        <div className="dark-mode-toggle">

            <button onClick={toggleDark}>{dark ? 'Light Mode' : 'Dark Mode'}</button>
        
        </div>

    );
};


export default DarkModeToggle;
