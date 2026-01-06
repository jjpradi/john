import Header from '../Header'
import CartListView from '../CartListView'
import Popup from 'reactjs-popup'
import CartContext from '../../context/CartContext'
import EmptyCartView from '../EmptyCartView'
import CartSummary from '../CartSummary'
import './index.css'
import CheckoutView from '../CheckoutView'

import {useState} from "react"

const Cart = () => {

  const [method,setMethod]=useState("Cash On Delivery")
return(  <CartContext.Consumer>
    {value => {
      const {cartList, onRemoval, totalCartAmount} = value

      const removeAll = () => {
        onRemoval()
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

      const onSuccess=()=>{

        return(
<p>Your order successfully placed</p>

        )
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

                <div>
                  <button onClick={removeAll}>Remove All</button>
                </div>

                <CartListView />

                {/* TODO: Add your code for Cart Summary here */}

                <CartSummary />
                <Popup
                  modal
                  trigger={open => <button>Checkout</button>}
                  overlayStyle={overlayStyles}
                >
                  <ul onChange={w => onPayment(w)}>
                    <li>
                      <input type="radio" id="card" name="pay" value="Card" />

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
<Popup  

trigger={   method==="Cash On Delivery"? <button>place order</button>:null}
>

<p>order placed successfully</p>
</Popup>
                 
                </Popup>
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
