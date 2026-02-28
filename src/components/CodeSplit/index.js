import React, { lazy, Suspense } from 'react';

const LazyComponent = lazy(() => import('../AIRecommendations'));

const CodeSplit = () => (
    <Suspense fallback={<div>Loading...</div>}>
        <LazyComponent />
    </Suspense>
);

export default CodeSplit;
