import React, { useEffect } from "react";
import "./style/onebyoneslider.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { ResponsiveFeaturedBrands } from "./data";

export default function OnebyOneSlider() {
  

  return (
    <div style={{width:"1300px", height:"350px", marginLeft: '16vw',marginRight: '16vw'}}>
<Carousel 
 className="h-100 w-100"
infinite={true}
// showDots={true}
style={{borderRadius:"50px"}}
responsive={ResponsiveFeaturedBrands}
>
    <div className=" h-100 w-100"> <img className=" h-100" src="https://images.pexels.com/photos/317377/pexels-photo-317377.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" style={{borderRadius:"50px", width:"25rem", marginLeft: '1rem',marginRight: '1rem',backgroundColor:"red"}} /> </div>
    <div className=" h-100 w-100"> <img className=" h-100" 
    src="https://images.pexels.com/photos/2074130/pexels-photo-2074130.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" style={{borderRadius:"50px",width:"25rem", marginLeft: '1rem',marginRight: '1rem',backgroundColor:"red"}}/></div>
    <div className=" h-100 w-100"> <img className=" h-100" 
    src="https://images.pexels.com/photos/414645/pexels-photo-414645.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"style={{borderRadius:"50px", width:"25rem",marginLeft: '1rem',marginRight: '1rem',backgroundColor:"red"}} /></div>
    <div className=" h-100 w-100"> <img className=" h-100" 
    src="https://images.pexels.com/photos/17424774/pexels-photo-17424774/free-photo-of-wood-nature-bird-red.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"style={{borderRadius:"50px",width:"25rem", marginLeft: '1rem',marginRight: '1rem',backgroundColor:"red"}} /></div>
    <div className=" h-100 w-100"> <img className=" h-100" 
    src="https://images.pexels.com/photos/12480410/pexels-photo-12480410.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" style={{borderRadius:"50px",width:"25rem", marginLeft: '1rem',marginRight: '1rem',backgroundColor:"red"}}/></div>
    <div className=" h-100 w-100"> <img className=" h-100" 
    src="https://images.pexels.com/photos/414645/pexels-photo-414645.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"style={{borderRadius:"50px",width:"25rem", marginLeft: '1rem',marginRight: '1rem',backgroundColor:"red"}} /></div>
    
    
        {/* {product} */}
      </Carousel>
     
    </div>
  );
}