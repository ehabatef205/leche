import React from 'react'
import { ResponsiveFeaturedCategories, productData } from '../data'
import Bestsellerscard from './Bestsellerscard'
import Carousel from "react-multi-carousel";
import "./login.css";
function BESTSELLERS() {

  const product = productData.map((item, index) => (
    <Bestsellerscard key={index}
      imageurl={item.imageurl}
      description={item.description}
      price={item.price}
    />
  ));

  return (
    <div className='my-4'>
      <div className='my-4  aligncenter'>
        <h1>Best Sellers</h1>

      </div>

      <div className="d-flex justify-content-center" style={{ height: "350px", textAlign: "center" }}>
        <Carousel
          className="h-100 center"
          infinite={true}
          responsive={ResponsiveFeaturedCategories}
        >
          {productData.map((item, index) => (
            <Bestsellerscard key={index}
              imageurl={item.imageurl}
              description={item.description}
              price={item.price}
            />
          ))}
        </Carousel>
      </div></div>

  )
}

export default BESTSELLERS
