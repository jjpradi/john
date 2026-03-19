import Header from '../Header'
import React from 'react'
import RecentlyViewed from '../RecentlyViewed'
import Wishlist from '../Wishlist'
import Cookies from 'js-cookie'

const OrderHistory = () => {
  // Dummy data for demonstration

  const orderList = Cookies.get('orderedList')

  console.log(orderList)

  const orders = [
    {id: 1, date: '2026-02-01', total: 120},

    {id: 2, date: '2026-02-15', total: 80},
  ]

  return (
    <div className="order-history">
      <Header />
      <Wishlist />
      <h2>Order History</h2>
      <RecentlyViewed />
      <ul>
        {orders.map(order => (
          <li key={order.id}>
            Order #{order.id} - {order.date} - ${order.total}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default OrderHistory
