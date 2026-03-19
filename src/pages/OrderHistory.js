import React, {useEffect, useState} from 'react'
import Cookies from 'js-cookie'

const OrderHistory = () => {
  const [orders, setOrders] = useState([])

  useEffect(() => {
    const storedOrders = Cookies.get('orderedList')
    setOrders(storedOrders ? JSON.parse(storedOrders) : [])
  }, [])

  return (
    <div>
      <h2>Order History</h2>
      {orders.length === 0 ? (
        <p>No orders placed yet.</p>
      ) : (
        <ul>
          {orders.map((item, idx) => (
            <li key={idx}>
              {item.title || item.name} - Qty: {item.quantity || 1}
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default OrderHistory
