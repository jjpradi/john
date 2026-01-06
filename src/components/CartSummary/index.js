// Write your code here

import CartContext from '../../context/CartContext'

const CartSummary = () => (
  <CartContext.Consumer>
    {value => {
      const {totalCartAmount, count} = value

      return (
        <div>
          <h1>Order Total :Rs{totalCartAmount}</h1>

          <p> {count} Items in cart</p>
        </div>
      )
    }}
  </CartContext.Consumer>
)

export default CartSummary

3
