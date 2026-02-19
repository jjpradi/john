import confetti from 'canvas-confetti'
import React, {useState} from 'react'
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

  const [shoot, setShoot] = useState(false)

  const shootSuccess = () => {
    console.log(shoot)
    console.log('shoot')
    setShoot(true)

    if (shoot === true) {
      shootGiftPaper()
    }
  }
  return (
    <CartContext.Consumer>
      {value => {
        const {cartList, onRemoval, removeAllCartItems, totalCartAmount} = value

        const removeAll = () => {
          removeAllCartItems()
        }

        const showEmptyView = cartList.length === 0
        // TODO: Update the functionality to remove all the items in the cart
        const onPayment = event => {
          setMethod(event.target.value)
          console.log(event.target)
        }

        const overlayStyles = {
          background: '#ffffff',
        }

        return (
          <>
            <Header />
            <div className="cart-container">
              {showEmptyView ? (
                <EmptyCartView />
              ) : (
                <div className="cart-content-container">
                  <h1 className="cart-heading">My Cart</h1>

                  <div className="remove-all-button">
                    <button className="all-button" onClick={removeAll}>
                      Remove All
                    </button>
                  </div>

                  <CartListView />

                  {/* TODO: Add your code for Cart Summary here */}

                  <div className="cart-summary">
                    <CartSummary />

                    <Popup
                      className="pop-up"
                      trigger={open => (
                        <div>
                          <button className="check-btn">Checkout</button>
                        </div>
                      )}
                      modal
                      nested
                    >
                      {close => (
                        <div className="modal">
                          <button className="close" onClick={close}>
                            *
                          </button>

                          <div className="c">
                            <CartSummary />

                            <ul
                              className="modal-list"
                              onChange={w => onPayment(w)}
                            >
                              <li>
                                <input
                                  type="radio"
                                  id="card"
                                  name="pay"
                                  value="Card"
                                />

                                <label htmlFor="card">card</label>
                              </li>

                              <li>
                                <input
                                  type="radio"
                                  name="pay"
                                  id="upi"
                                  value="UPI Wallet"
                                />

                                <label htmlFor="upi"> UPI Wallet</label>
                              </li>
                              <li>
                                <input
                                  id="net"
                                  type="radio"
                                  name="pay"
                                  value="Net Banking"
                                />

                                <label htmlFor="net">Net Banking</label>
                              </li>

                              <li>
                                <input
                                  type="radio"
                                  id="cash"
                                  defaultChecked
                                  name="pay"
                                  value="Cash On Delivery"
                                />

                                <label htmlFor="cash">Cash On Delivery</label>
                              </li>
                            </ul>
                          </div>

                          {method === 'Cash On Delivery' ? (
                            <Popup
                              trigger={open => (
                                <button
                                  className="confirm-button"
                                  onClick={shootSuccess}
                                >
                                  Confirm Order
                                </button>
                              )}
                            >
                              <CheckoutView />
                            </Popup>
                          ) : null}
                        </div>
                      )}
                    </Popup>
                  </div>
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
