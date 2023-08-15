import React, { useEffect, useState } from 'react'
import { ResponsiveFeaturedBrands, FeaturedBrandsdata } from "../data";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import getFeaturedBrands from "../../api/basis/getFeaturedBrands"
import './login.css'

export default function FEATUREDBRANDS() {

  const [featuredBrands, setFeaturedBrands] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setLoading(true)
    getFeaturedBrands().then(res => {
      setLoading(false)
      console.log(res.data.response)
      setFeaturedBrands(res.data.response)
    }).catch((error) => {
      setLoading(true)
    })
  }
    , [])

  return (
    <div>
      <hr></hr>
      <div className='my-4 aligncenter ' >
        <h2>ماركات مميزة </h2>
      </div>
      {loading ? <div></div> : <div className=' d-flex justify-content-center Carousel-div ' >
        <Carousel
          className="h-100  brandcenter"
          infinite={true}
          responsive={ResponsiveFeaturedBrands}
        >
          {featuredBrands.map((featuredBrand, index) => (
            <div key={index} className="img-div " style={{ height: "400px", width: "370px", textAlign: "center", marginLeft: '3%', marginRight: '3%'  }}>
              <img className="FB-img" src={featuredBrand.image} style={{ width: "370px", height: "100%", borderRadius: "10px"}} />
            </div>))}
        </Carousel>
      </div>}
    </div>
  
 )
}
//  style={{ height: "350px", textAlign: 'center', marginLeft: '16vw', marginRight: '16vw' }}







