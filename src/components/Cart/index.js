
import confetti from 'canvas-confetti'
import React, { useState } from 'react'
import Popup from 'reactjs-popup'
import Header from '../Header'
import CartListView from '../CartListView'
import CartContext from '../../context/CartContext'
import EmptyCartView from '../EmptyCartView'
import CartSummary from '../CartSummary'
import './index.css'
import CheckoutView from '../CheckoutView'

const shootGiftPaper = () => {
  confetti({
    particleCount: 200,

    spread: 120,

    startVelocity: 40,

    gravity: 0.8,

    shapes: ['square'],

    colors: ['#ff0000', '#00ff00', '#ffd700', '#ff69b4'],
  })
}



  const Cart = () => {
    const [method, setMethod] = useState('Cash On Delivery')
    const [showSuccess, setShowSuccess] = useState(false)
    const [showCheckout, setShowCheckout] = useState(false)

    const handlePaymentChange = event => {
      setMethod(event.target.value)
    }

    const handleCheckout = () => {


      setShowCheckout(true)


    }

    const handleConfirmOrder = () => {
      setShowSuccess(true)
      shootGiftPaper()
      setTimeout(() => {
        setShowCheckout(false)
        setShowSuccess(false)
      }, 3000)
    }

    const overlayStyle = {
      background: 'rgba(0, 0, 0, 0.5)',
   
    }


    return (
      <CartContext.Consumer>
        {value => {
          const { cartList, removeAllCartItems } = value
          const showEmptyView = cartList.length === 0
          return (
            <>
              <Header />


              <div className="cart-container">
                {showEmptyView ? (
                  <EmptyCartView />
                ) : (
                  

                  <div className="cart-content-container">
                  
                  {showCheckout==false&&
                   ( <div>
                    <h1 className="cart-heading">My Cart</h1>
                    <div className="remove-all-button">
                      <button className="all-button" onClick={removeAllCartItems}>
                        Remove All
                      </button>
                    </div>
                    <CartListView />
                    <div className="cart-summary">
                      <CartSummary />
                     
                      <button className="check-btn" onClick={handleCheckout}>
                     
                        Checkout

                      </button>
                    </div>
                    </div>)}
                    {showCheckout && (

                      
                      <div className="checkout-modal" style={overlayStyle}>
                        <div className="checkout-content">
                          <button className="close" onClick={() => setShowCheckout(false)}>
                            ×
                          </button>
                          <h2>Checkout</h2>
                          <CartSummary />
                          <div className="payment-methods">
                            <h3>Select Payment Method</h3>
                            <label>
                              <input type="radio" name="pay" value="Card" checked={method === 'Card'} onChange={handlePaymentChange} /> Card
                            </label>
                            <label>
                              <input type="radio" name="pay" value="UPI Wallet" checked={method === 'UPI Wallet'} onChange={handlePaymentChange} /> UPI Wallet
                            </label>
                            <label>
                              <input type="radio" name="pay" value="Net Banking" checked={method === 'Net Banking'} onChange={handlePaymentChange} /> Net Banking
                            </label>
                            <label>
                              <input type="radio" name="pay" value="Cash On Delivery" checked={method === 'Cash On Delivery'} onChange={handlePaymentChange} /> Cash On Delivery
                            </label>
                          </div>
                          <button className="confirm-button" onClick={handleConfirmOrder}>
                            Confirm Order
                          </button>
                          
                          <p style={{ textAlign: 'center', marginTop: '10px' }}>
                            
                            Payment Method: <b>{method}</b>
                          
                          </p>
                        </div>
                      </div>
                    )}
                    {showSuccess && (
                      <div className="checkout-success">
                        <CheckoutView />
                      </div>
                    )}
                  </div>
                )}
              </div>
            </>
          )
        }}
      </CartContext.Consumer>
    )
  }

  export default Cart
