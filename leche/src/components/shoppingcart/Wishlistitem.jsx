import React, { useState, useEffect, useContext } from "react";
import "../productpage/slider.css";
import Carousel from "react-bootstrap/Carousel";
import { Card } from "react-bootstrap";
import { FaSpinner } from 'react-icons/fa';
import "../../loading.css"
import getProduct from '../../api/basis/product'
import * as Cart from "../../api/basis/cart"
import * as Wish from "../../api/basis/wish"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const Wishlistitem = (props) => {

  const [product, setProduct] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (props.product_id) {
      setLoading(true)
      getProduct(props.product_id).then(res => {
        setLoading(false)
        console.log(res.data)
        setProduct(res.data)
      }).catch((error) => {
        setLoading(true)
      })
    }
  }
    , [props.product_id])

  const remove = () => {
    Wish.removeWish(props.wish_id).then(res => {
      props.getWish()
    })
  }

  const addC = () => {
    Cart.addCart(props.product_id).then(res => {
      if (res.data.message === "This product is already in cart") {
        toast.error(res.data.message, {
          position: toast.POSITION.TOP_RIGHT
        })
      } else {
        console.log(res.data)
      }
    })
  }

  return (
    <div className=" m-2   ">
      {loading ? <FaSpinner icon="spinner" className="icon_pulse" style={{ fontSize: "50px" }} /> : <div
        className=" my-1  ">
        <div className="carousel-wrapper">
          <Carousel controls={false} >
            {product.images.map((image, index) => (
              <Carousel.Item key={index}>
                <img
                  className="d-block w-100 "
                  style={{ height: "265px", objectFit: "contained" }}
                  src={image}
                />

              </Carousel.Item>
            ))}
          </Carousel>
          <div className="caption position-absolute bottom-0 w-100  " >
            <i className="bi bi-trash3 text-light mx-5" role="button " onClick={() => { remove() }} style={{ fontSize: "1.8rem", fontWeight: "bold", cursor: "pointer" }}></i>
            <i role="button " onClick={() => { addC() }} className="bi bi-cart mx-5  text-light" style={{ fontSize: "1.8rem", fontWeight: "bold", cursor: "pointer" }}></i>
          </div>
        </div>
        <div
          className="card-body my-2 d-flex"
          style={{ fontSize: "0.8rem", padding: "0px" }}
        >
          <div className=" mx-2  d-flex flex-column align-items-start">
            <Card.Text className="mb-0 text-secondary">{product.name}</Card.Text>
            <Card.Text className="mb-0"><s className="mx-2 " style={{ color: "red" }}> ${product.price_before}</s> ${product.price_after}</Card.Text>
            {/*<Card.Text className="mb-0">
              {product.color.map((color, index) => (
                <i key={index} className={`bi bi-circle-fill text-${color}`} />
              ))
              }
            </Card.Text>*/}
            <Card.Text > <b style={{ color: "red" }}>Final Sale - No Exchanges or Returns</b></Card.Text>
          </div>

        </div>
      </div>}
      <ToastContainer />
    </div>
  )
}

export default Wishlistitem
