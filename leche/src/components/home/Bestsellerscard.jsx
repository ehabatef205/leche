import React from 'react'

import '../style/onebyoneslider.css'
function Bestsellerscard(props) {


  return (

    <div
      className="bg-light  "
      style={{ width: "20rem", textAlign: "center", borderRadius: "10px", }}
    >
      <img style={{ borderRadius: "10px", }} className="product--image" src={props.imageurl} alt="product image" />
      <p className='my-2'>{props.description}</p>
      <p className="">{props.price}</p>

    </div>
  )
}

export default Bestsellerscard
