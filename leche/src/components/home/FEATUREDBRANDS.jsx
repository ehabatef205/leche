import React, { useEffect, useState } from 'react'
import { ResponsiveFeaturedBrands, FeaturedBrandsdata } from "../data";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import getFeaturedBrands from "../../api/basis/getFeaturedBrands"

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
        <h2>FEATURED BRANDS</h2>
      </div>
      {loading ? <div></div> : <div className=' d-flex justify-content-center ' style={{ height: "350px", textAlign: 'center', marginLeft: '16vw', marginRight: '16vw' }}>
        <Carousel
          className="h-100 brandcenter"
          infinite={true}
          responsive={ResponsiveFeaturedBrands}
        >
          {featuredBrands.map((featuredBrand, index) => (
            <div key={index} className=" col-12" style={{ height: "350px", width: "25rem", textAlign: "center" }}>
              <img className="" src={featuredBrand.image} style={{ width: "94%", height: "100%", borderRadius: "10px", marginLeft: '3%', marginRight: '3%' }} />
            </div>))}
        </Carousel>
      </div>}
    </div>
  )
}






