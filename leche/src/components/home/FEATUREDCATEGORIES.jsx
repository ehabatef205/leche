import React, { useEffect, useState } from 'react'
import { FEATUREDCATEGORIESdata } from "../data";
import getAll from '../../api/basis/allcategory'
import { useNavigate, useLocation } from "react-router-dom";

function FEATUREDCATEGORIES() {

  const navigate = useNavigate();

  const [categories, setCategories] = useState([])
  useEffect(() => {
    getAll().then(res => {
      setCategories(res.data.response)
    })
  }
    , [])

  return (<div>
    <div className='my-4  aligncenter'>
      <h1>FEATURED CATEGORIES</h1>
    </div>
    <div className=' d-flex justify-content-center'>
      <div className='d-flex flex-wrap justify-content-between ' style={{ maxWidth: "1700px", minWidth: "200px", height: "fit-content" }}>
        {categories.map(category => (
          <div key={category._id} className='col-lg-2 col-6 my-3 ' style={{ height: "11rem", textAlign: "center", cursor: "pointer" }} onClick={() => { navigate(`/Productpage/${category._id}`) }}>
            <img className='h-100 my-2 ' src={category.image} alt="" style={{ width: "11.25rem", borderRadius: "10px", }} />
            <p>{category.name}</p>
          </div>
        ))}
      </div></div>
  </div>

  )
}

export default FEATUREDCATEGORIES