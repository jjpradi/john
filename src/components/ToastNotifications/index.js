import React, { useState } from 'react';

const ToastNotifications = () => {
    const [show, setShow] = useState(false);

    const handleShow = () => {
        setShow(true);
        setTimeout(() => setShow(false), 2000);
    };

    return (
        <div className="toast-notifications">
            <button onClick={handleShow}>Show Toast</button>
            {show && <div className="toast">This is a toast notification!</div>}
        </div>
    );
};

export default ToastNotifications;
