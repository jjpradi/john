// Write your code here
import './index.css'
import CartContext from '../../context/CartContext'

const CartSummary = () => (
  <CartContext.Consumer>
    {value => {
      const {totalCartAmount, count} = value

      return (
        <div className="summary-info">
          <h1 className="">Order Total : Rs{totalCartAmount}/-</h1>

          <p> {count} Items in cart</p>
        </div>
      )
    }}
  </CartContext.Consumer>
)

export default CartSummary
