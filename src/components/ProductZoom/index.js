import Zoom from 'react-medium-image-zoom'
import 'react-medium-image-zoom/dist/styles.css'

const ProductZoom = ({imageUrl}) => {
  console.log(imageUrl)
  return (
    <Zoom>
      <img
        src={imageUrl}
        alt="product"
        zoomScale={5}
        style={{width: '300px'}}
      />
    </Zoom>
  )
}

export default ProductZoom
