import React, { Suspense } from 'react';

const LazyLoader = ({ Component }) => (
    <Suspense fallback={<div>Loading...</div>}>
        <Component />
    </Suspense>
);

export default LazyLoader;
