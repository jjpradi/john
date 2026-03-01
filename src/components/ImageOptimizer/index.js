
import React, { useState } from 'react';

const ENHANCE_API = "https://your-backend-api.com/enhance-image"; // Replace with your backend endpoint

const ImageOptimizer = ({ src, alt }) => {
    const [error, setError] = useState(false);
    const [enhancedSrc, setEnhancedSrc] = useState(null);
    const [loading, setLoading] = useState(false);

    React.useEffect(() => {
        const enhanceImage = async () => {
            setLoading(true);
            try {
                const res = await fetch(ENHANCE_API, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ imageUrl: src })
                });
                const data = await res.json();
                setEnhancedSrc(data.enhancedUrl || src);
            } catch {
                setEnhancedSrc(src);
            }
            setLoading(false);
        };
        enhanceImage();
    }, [src]);

    return (
        <div className="image-optimizer">
            {loading ? (
                <div className="image-loader">Enhancing image...</div>
            ) : !error ? (
                <img
                    src={enhancedSrc || src}
                    alt={alt}
                    loading="lazy"
                    style={{ maxWidth: '100%' }}
                    onError={() => setError(true)}
                />
            ) : (
                <div className="image-error">Image failed to load.</div>
            )}
        </div>
    );
};

export default ImageOptimizer;
