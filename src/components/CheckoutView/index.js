import confetti from 'canvas-confetti'
import {Component} from 'react'

import './index.css'

const shootGiftPaper = () => {
  console.log('confetti')

  confetti({
    particleCount: 200,

    spread: 120,

    startVelocity: 40,

    gravity: 0.8,

    shapes: ['square'],

    colors: ['#ff0000', '#00ff00', '#ffd700', '#ff69b4'],
  })
}

class CheckoutView extends Component {
  componentDidMount() {
    shootGiftPaper()
  }

  render() {
    return (
      <p className="success-order">Your order has been placed successfully</p>
    )
  }
}

export default CheckoutView
