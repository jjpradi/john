import {Component} from 'react'
import {Route, Switch, Redirect} from 'react-router-dom'

import LoginForm from './components/LoginForm'
import Home from './components/Home'
import Products from './components/Products'
import ProductItemDetails from './components/ProductItemDetails'
import Cart from './components/Cart'
import NotFound from './components/NotFound'
import ProtectedRoute from './components/ProtectedRoute'
import CartContext from './context/CartContext'

import './App.css'

class App extends Component {
  state = {
    cartList: [],
    totalCartAmount: 0,
    count: 0,
  }

  //   TODO: Add your code for remove all cart items, increment cart item quantity, decrement cart item quantity, remove cart item

  addCartItem = product => {
    const {cartList} = this.state

    console.log(product.id)

    console.log(product)

    const existingItem = cartList.find(e => e.id == product.id)

    console.log(existingItem)

console.log(  (        parseInt(product.price) * parseInt(product.quantity)))

    if (existingItem !== undefined) {
      this.setState(prevState => ({
        cartList: prevState.cartList.map(e =>
          e.id === product.id ? {...e, quantity: e.quantity + 1} : null,
        ),
        totalCartAmount:
          prevState.totalCartAmount +
  (        parseInt(product.price) ),
      }))
    } else
      this.setState(prevState => ({
        cartList: [...prevState.cartList, product],
        totalCartAmount:
          prevState.totalCartAmount +
   (       parseInt(product.price) *parseInt(product.quantity)),

        count: prevState.count + 1,
      }))

    //   TODO: Update the code here to implement addCartItem
  }

  decrementCartItemQuantity = details => {
    const {price, quantity} = details
    this.setState(prevState => ({
      cartList: prevState.cartList.map(e =>
        e.id == details.id ? {...e, quantity: e.quantity - 1} : null,
      ),
      totalCartAmount: prevState.totalCartAmount - price,
    }))
  }

  incrementCartItemQuantity = details => {
    console.log(details)

    const {quantity, price} = details
    const existingItem = this.state.cartList.find(e => e.id == details.id)
    console.log(details)

    this.setState(prevState => ({
      cartList: prevState.cartList.map(e =>
        e.id == details.id ? {...e, quantity: e.quantity + 1} : e,
      ),
      totalCartAmount: prevState.totalCartAmount + price,
    }))
  }
  removeCartItem = id => {
    const filteredList = this.state.cartList.filter(e => e.id !== id)

    this.setState({
      cartList: filteredList,
    })
  }

  onRemoval = () => {
    this.setState({
      cartList: [],
    })
  }

  render() {
    const {cartList, totalCartAmount, count} = this.state
    console.log(totalCartAmount)
    return (
      <CartContext.Provider
        value={{
          cartList,
          totalCartAmount,
          count,

          onRemoval: this.onRemoval,
          addCartItem: this.addCartItem,
          removeCartItem: this.removeCartItem,
          incrementCartItemQuantity: this.incrementCartItemQuantity,
          decrementCartItemQuantity: this.decrementCartItemQuantity,
        }}
      >
        <Switch>
          <Route exact path="/login" component={LoginForm} />
          <ProtectedRoute exact path="/" component={Home} />
          <ProtectedRoute exact path="/products" component={Products} />
          <ProtectedRoute
            exact
            path="/products/:id"
            component={ProductItemDetails}
          />
          <ProtectedRoute exact path="/cart" component={Cart} />
          <Route path="/not-found" component={NotFound} />
          <Redirect to="not-found" />
        </Switch>
      </CartContext.Provider>
    )
  }
}

export default App
