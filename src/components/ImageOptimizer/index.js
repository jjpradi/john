import {useState} from 'react'
import './index.css'

const ImageOptimizer = ({src, alt}) => {
  const [loaded, setLoaded] = useState(false)

  return (
    <div className="card-image-container">
      {!loaded && <div className="image-skeleton"></div>}

      <img
        src={src}
        alt={alt}
        loading="lazy"
        className={`product-image ${loaded ? 'show' : 'hide'}`}
        onLoad={() => setLoaded(true)}
      />
    </div>
  )
}

export default ImageOptimizer
