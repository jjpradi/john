
import React, { Suspense } from 'react';

const LazyLoader = ({ loader, ...props }) => {
    const Component = React.lazy(loader);
    return (
        <div className="lazy-loader">
            <Suspense fallback={<div className="loading">Loading...</div>}>
                <Component {...props} />
            </Suspense>
        </div>
    );
};

export default LazyLoader;
