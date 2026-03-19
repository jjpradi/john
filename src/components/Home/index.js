import {Link} from 'react-router-dom'
import Header from '../Header'
import './index.css'

import {useNavigate} from 'react-router-dom'
import AIRecommendations from '../AIRecommendations'
import RecentlyViewed from '../RecentlyViewed'
import AIChatbot from '../AIChatbot'
import ImageOptimizer from '../ImageOptimizer'
import Memoization from '../Memoization'
import LazyLoader from '../LazyLoader'
import ToastNotifications from '../ToastNotifications'
import Wishlist from '../Wishlist'
import SkeletonLoader from '../SkeletonLoader'
import ProductViewer from '../ProductViewer'

import Trending from '../Trending'

import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

const settings = {
  dots: true,
  infinite: true,
  speed: 500,

  autoplay: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
      },
    },
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
      },
    },
  ],
}

const Home = () => {
  const navigate = useNavigate()
  const onChangeToProducts = () => {
    const navigate = useNavigate()
    navigate('/products')
  }
  const onHome = () => {
    navigate('/products')
  }

  return (
    <>
      <Header />
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '2rem',
          justifyContent: 'space-around',
          color: 'lightBlue',
        }}
      >
        <div className="home-container">
          <div className="home-content">
            <h1 className="home-heading">Clothes That Get YOU Noticed</h1>
            <img
              src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-img.png"
              alt="clothes that get you noticed"
              className="home-mobile-img"
            />
            <p className="home-description">
              Fashion is part of the daily air and it does not quite help that
              it changes all the time. Clothes have always been a marker of the
              era and we are in a revolution. Your fashion makes you been seen
              and heard that way you are. So, celebrate the seasons new and
              exciting fashion in your own way.
            </p>
            <Link to="/products">
              <button type="button" className="shop-now-button">
                Shop Now
              </button>
            </Link>
          </div>
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-img.png"
            alt="clothes that get you noticed"
            className="home-desktop-img"
          />
        </div>

        {/* Feature Showcase Section */}
        <div
          style={{
            display: 'grid',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
            gap: '2rem',
            margin: '2rem 0',
          }}
        >
          <div>
            <AIRecommendations />
          </div>
          <div>
            <RecentlyViewed />
          </div>

          <div style={{alignSelf: 'flex-start '}}>
            <AIChatbot />
          </div>
        </div>
      </div>
    </>
  )
}
export default Home
