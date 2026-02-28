import React from 'react';
import Cookies from"js-cookie"

import "./index.css"
import { useEffect,useState
 } from 'react';


const AIRecommendations = () => {
    // Dummy recommendations
  
    const [recommendations,setRec]=useState([])

 
const lastItem=JSON.parse(localStorage.getItem("recentlyViewed"))

console.log("recommendations")

console.log(lastItem)

let newIndex,index

console.log(lastItem)



if(lastItem!==undefined){

 index=lastItem.imageUrl.split("/")
 
 newIndex=index[index.length-1].split("-")[0]
 
 console.log(newIndex)

 console.log(lastItem)
 


} 


   useEffect =async()=>{
const jwtToken=Cookies.get("jwt_token")

        const options={method:"GET",
         headers:{
 Authorization:
 ` Bearer ${ jwtToken } `
              }}

const results=await fetch("https://apis.ccbp.in/products/",options)

const data=await results.json()
console.log(data)
const filtered=data.products.filter(e=>e.image_url.includes(newIndex))
console.log(filtered)
setRec(filtered)




    }



    


    return (
        <div className="ai-recommendations">
            <h2>Recommended for You</h2>
            <ul className='recommende-list'
            >
                {recommendations.map(item => (
                    
                    <li key={item.id}>
                       <div className="recent-item">
                            <img src={item.image_url} alt={item.title} width={60} />
                            <span>{item.title}</span>
                        </div>
                        </li>
                ))}
            </ul>
        </div>
    );
};

export default AIRecommendations;
