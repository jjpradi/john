import React from 'react';

const InvoiceDownload = () => {
    const handleDownload = () => {
        // Dummy PDF download logic
        const link = document.createElement('a');
        link.href = '/dummy-invoice.pdf';
        link.download = 'invoice.pdf';
        link.click();
    };

    return (
        <div className="invoice-download">
            <h2>Download Invoice</h2>
            <button onClick={handleDownload}>Download PDF</button>
        </div>
    );
};

export default InvoiceDownload;
