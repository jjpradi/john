
import React, { useState } from 'react';

const ToastNotifications = () => {
    const [toast, setToast] = useState(null);

    const showToast = (message, type = 'info') => {
        setToast({ message, type });
        setTimeout(() => setToast(null), 2500);
    };

    return (
        <div className="toast-notifications">
            <button onClick={() => showToast('Success! Your action was completed.', 'success')}>Show Success</button>
            <button onClick={() => showToast('Warning! Something might be wrong.', 'warning')}>Show Warning</button>
            <button onClick={() => showToast('Error! Something went wrong.', 'error')}>Show Error</button>
            {toast && (
                <div className={`toast toast-${toast.type}`}>{toast.message}</div>
            )}
        </div>
    );
};

export default ToastNotifications;
