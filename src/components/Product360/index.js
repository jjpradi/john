import {React360Viewer} from 'react-360-product-viewer'

const Product360 = () => {
  const imagePath = '/images/dumbells/'
  const fileName = 'dumbell_{index}.jpg'

  if (!imagePath || !fileName) return null
  return (
    <React360Viewer
      amount={4}
      imagePath={imagePath}
      spinReverse
      fileName={fileName}
      disableZoom={true}
    />
  )
}

export default Product360
