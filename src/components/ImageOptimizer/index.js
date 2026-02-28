import React from 'react';

const ImageOptimizer = ({ src, alt }) => {
    const [error, setError] = React.useState(false);
    


    return (


        <div className="image-optimizer">
    
            {!error ? (
                <img src={src} alt={alt} loading="lazy" style={{ maxWidth: '100%' }} onError={() => setError(true)} />
            ) : (
                <div>Image failed to load.</div>
            )}
        </div>
   


);
};

export default ImageOptimizer;
