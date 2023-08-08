import React from 'react'
import './style/pages.css'
import Filterside from '../components/productpage/Filterside'
import { CardsSlider } from '../components/productpage/Pruductcard'
import ProductHeaders from '../components/productpage/ProductHeaders'

function Productpage() {
  return (
    <div
      className=" d-flex  flex-wrap justify-content-center align-content-center"
      style={{ position: "relative", top: "70px" }}
    >

      <section className="sectionone d-flex  flex-wrap">
        <div className=' w-100 col-12'>
          <ProductHeaders></ProductHeaders>
        </div>
        <div className="d-flex flex-wrap w-100">
          <div className="" style={{ height: "100%", width: "25%" }}>
            <Filterside></Filterside>
          </div>
          <div
            className="  d-grid"
            style={{ height: "100%", width: "75%" }}
          >

            <div className=" cards w-100 ">
              <CardsSlider></CardsSlider>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Productpage
