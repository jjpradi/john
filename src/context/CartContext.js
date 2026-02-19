import React from 'react'

const CartContext = React.createContext({
  cartList: [],
  removeAllCartItems: () => {},
  addCartItem: () => {},
  removeCartItem: () => {},
  incrementCartItemQuantity: () => {},
  decrementCartItemQuantity: () => {},

  count: 0,
  totalCartAmount: 0,
  onRemoval: () => {},
})

export default CartContext
