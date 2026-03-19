import {pre} from 'motion/react-client'
import React, {useEffect, useState} from 'react'
import './index.css'
const RecentlyViewed = () => {
  const [recent, setRecent] = useState([])

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem('recentlyViewed')) || []
    setRecent(prev => [...prev, stored])
  }, [])

  console.log('Recently Viewed:', recent)

  return (
    <div className="recently-viewed">
      <ul>
        <h2>Recently Viewed Products</h2>

        {recent.map((item, id) => (
          <li style={{listStyleType: 'none'}} key={id}>
            <div className="recent-item">
              <img src={item.imageUrl} alt={item.title} width={60} />
              <span>{item.title}</span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default RecentlyViewed
