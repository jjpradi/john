
import Product360 from "../Product360"
import {useEffect,useState}  from "react"
import "./index.css"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Cookies from "js-cookie"
const settings = {
      dots: true,
    infinite: true,
   autoplay:true, autoplaySpeed: 2000, 
 pauseOnHover: true,
    speed: 500,
    slidesToShow: 3,
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
};



const Trending=()=>{
const[product,setProducts]=useState([])

useEffect(() => {
const jwtToken=Cookies.get("jwt_token")

console.log(jwtToken)

const options={

method:"GET",
headers:{
    Authorization:`Bearer: ${jwtToken}`
}

}

  const fetchTrending = async () => {
    const res = await fetch("https://apis.ccbp.in/products/trending",options)
    const data = await res.json()
    setProducts(data.products)
  console.log(data)
  console.log(product)

}


  fetchTrending()
}, [])





return (

<div  className="fitness-product"   style={{height:"56vh",marginLeft:"25vw",marginLeft:"15vw",minHeight:"23vh"}}   >
<h1>Sports & Fitness</h1>
<Slider    {...settings}   style={{width:"43vw",minHeight:"37vh"}}   >

<img  className="img"  style={{  margin:"34px",   minHeight:"5vh"}} src="https://i.ibb.co/35KHhwpY/dumbell-3.jpg"/>

<img  className="img"     style={{minHeight:"5vh",width:"5vw",fontSize:"55px"}} src="https://i.ibb.co/CKx72ZBS/dumbell-2.jpg"/>
<img  className="img"    style={{minHeight:"5vh",width:"5vw"}}  src="https://i.ibb.co/HfVycRLK/dumbell-1.jpg"/>
<img  className="img"   style={{minHeight:"5vh",width:"5vw"}}   src="https://i.ibb.co/dn0k0rQ/dumbell-4.jpg"/>



</Slider>
</div>



)



}

export default Trending