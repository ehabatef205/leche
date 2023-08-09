import React, { useEffect, useState } from 'react'
import { ResponsiveFeaturedCategories, productData } from '../data'
import Bestsellerscard from './Bestsellerscard'
import Carousel from "react-multi-carousel";
import "./login.css";
import * as Products from '../../api/basis/product'

function BESTSELLERS() {

  const [productsList, setProductsList] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    Products.getAllProduct().then(res => {
      setLoading(false)
      setProductsList(res.data.response)
    }).catch((error) => {
      setLoading(false)
    })
  }
    , [])

  return (
    <div className='my-4'>
      <div className='my-4  aligncenter'>
        <h1>Best Sellers</h1>
      </div>
      <div className="d-flex justify-content-center" style={{ height: "350px", textAlign: "center" }}>
        {loading ? <div></div> : <Carousel
          className="h-100 center"
          infinite={true}
          responsive={ResponsiveFeaturedCategories}
        >
          {productsList.map((product, index) => (
            <Bestsellerscard key={index}
              product={product}
            />
          ))}
        </Carousel>}
      </div></div>

  )
}

export default BESTSELLERS
