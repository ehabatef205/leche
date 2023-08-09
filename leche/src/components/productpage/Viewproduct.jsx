import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Container } from "react-bootstrap";
import * as Products from '../../api/basis/product'
import "./slider.css";
import { FaSpinner } from 'react-icons/fa';
import "../../loading.css"
import Carousel from "react-bootstrap/Carousel";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import * as Cart from "../../api/basis/cart"
import * as Wish from "../../api/basis/wish"

function Viewproduct({ products, handleClick }) {
  const { id } = useParams();
  const [product, setProduct] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (id) {
      setLoading(true)
      Products.getProduct(id).then(res => {
        setLoading(false)
        console.log(res.data)
        setProduct(res.data)
      }).catch((error) => {
        setLoading(true)
      })
    }
  }
    , [id])

  const addC = (product_id) => {
    if (localStorage.getItem("AuthBrook") === null) {
      toast.warn("Please login first", {
        position: toast.POSITION.TOP_RIGHT
      })
    } else {
      Cart.addCart(product_id).then(res => {
        if (res.data.message === "This product is already in cart") {
          toast.error(res.data.message, {
            position: toast.POSITION.TOP_RIGHT
          })
        } else {
          console.log(res.data)
        }
      })
    }
  }

  const addW = (product_id) => {
    if (localStorage.getItem("AuthBrook") === null) {
      toast.warn("Please login first", {
        position: toast.POSITION.TOP_RIGHT
      })
    } else {
      Wish.addWish(product_id).then(res => {
        if (res.data.message === "This product is already in wish") {
          toast.error(res.data.message, {
            position: toast.POSITION.TOP_RIGHT
          })
        } else {
          console.log(res.data)
        }
      })
    }
  }

  return (
    <div
      className="viewcontainer justify-content-center my-3   "
      style={{ position: "relative", top: "70px" }}
    >

      {loading ? <FaSpinner icon="spinner" className="icon_pulse" style={{ fontSize: "50px" }} /> : <Container id="parent" className=" justify-content-center ">
        <div className=" d-flex flex-wrap  " style={{ height: "fit-content" }}>
          <div
            id="child1"
            className="d-flex justify-content-center flex-wrap col-lg-7 col-12 "
            style={{ padding: "0px", height: "fit-content" }}
          >

            <div className="carousel-wrapper-view">
              <Carousel controls={false}>
                {product.images.map((image, index) => (
                  <Carousel.Item key={index}    >
                    <img
                      className="d-block w-100 "
                      style={{ height: "700px", objectFit: "contained" }}
                      src={image}
                    />

                  </Carousel.Item>
                ))}

              </Carousel>
            </div>
          </div>
          <div
            id="child2"
            className=" d-flex flex-wrap col-lg-5  col-12 "
            style={{
              overflow: "auto",
              boxSizing: "content-box",
            }}
          >
            <div className="w-100">
              <div>
                <p className="" style={{ textAlign: "left", fontSize: "1.5rem" }}>
                  {product.name}
                </p>
              </div>

              <div>
                <p> ${product.price_after}</p>
                <p style={{ color: "red" }}> ${product.price_before}</p>
              </div>

              <div>
                <p style={{ color: "blue" }}>Eligible for Free Shipping! (Regular shipping rates still apply to non-eligible items in cart)</p>
              </div>
              <div
                className=" w-100 my-1 d-flex "
                style={{ fontSize: "18px" }}
              >

                {/*{product.color.map((color1, index) => (
                  <i key={index} className={`bi bi-circle-fill mx-1 text-${color1}`} />
                ))}*/}
              </div>
              <div>
                <p style={{ color: "red" }}>Final Sale - No Exchanges or Returns</p>
              </div>
              <hr></hr>
              <div className=" w-100">
                <button className="btn" style={{ backgroundColor: "#72be93", color: "#fff", marginRight: "5px" }} onClick={() => { addC(product._id) }}>add to cart</button>
                <button className="btn" style={{ backgroundColor: "#fff", marginLeft: "5px", border: "1px solid #72be93", color: "#72be93" }} onClick={() => { addW(product._id) }}>add to wish</button>
              </div>

            </div>
          </div>
        </div>
      </Container>}
      <ToastContainer />
    </div>
  )
}

export default Viewproduct
