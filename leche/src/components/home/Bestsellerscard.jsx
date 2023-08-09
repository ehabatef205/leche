import React from 'react'

import '../style/onebyoneslider.css'
import { useNavigate } from 'react-router-dom';
function Bestsellerscard(props) {

  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/Viewproduct/${props.product._id}`);
  };
  return (

    <div
      className="bg-light  "
      style={{ width: "20rem", textAlign: "center", borderRadius: "10px", }}
      onClick={handleClick}
    >
      <img style={{ borderRadius: "10px", }} className="product--image" src={props.product.images[0]} alt="product image" />
      <p className='my-2'>{props.product.name}</p>
      <p className="">{props.product.price_after}$</p>
    </div>
  )
}

export default Bestsellerscard
