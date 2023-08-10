import React, { useContext, useState, useEffect, useRef } from "react";
import { FaSpinner } from 'react-icons/fa';
import "../../loading.css"
import * as Products from '../../api/basis/product'
import * as Cart from "../../api/basis/cart"

export const CartItem = (props) => {
  const [product, setProduct] = useState(null)
  const [loading, setLoading] = useState(true)
  const [counter, setCounter] = useState(props.quantity);
  const [storage, setStorage] = useState(JSON.parse(localStorage.getItem('Detail')) === null ? [] : JSON.parse(localStorage.getItem('Detail')))

  useEffect(() => {
    if (props.product_id) {

      setLoading(true)
      Products.getProduct(props.product_id).then(res => {
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
    /*if (localStorage.getItem("AuthBrook") === null) {
      const updatedItems = storage.filter((_, index) => index !== props.index);
      setStorage(updatedItems);
      localStorage.setItem('Detail', JSON.stringify(storage))
      props.getCart()
    } else {
      Cart.removeCart(props.cart._id).then(res => {
        props.getCart()
      })
    }*/
    Cart.removeCart(props.cart._id).then(res => {
      props.getCart()
    })
  }

  const plus = (product_quantity) => {
    if (props.cart.quantity < product_quantity) {
      Cart.increse_item(props.cart._id).then(res => {
        setCounter(res.data.quantity)
        props.getCart()
      })
    }
  }

  const minus = () => {
    if (props.cart.quantity > 1) {
      Cart.decrease_item(props.cart._id).then(res => {
        setCounter(res.data.quantity)
        props.getCart()
      })
    }
  }

  return (
    <>
      {loading ? <FaSpinner icon="spinner" className="icon_pulse" style={{ fontSize: "50px" }} /> : <div className=" col-12 w-100 d-flex flex-wrap">
        <div className="col-5">
          <img src={product.images[0]} className="w-100 h-75" />
        </div>
        <div className="col-7 ">
          <div className="mx-2 ">
            <div>
              <b>{product.name}</b>
            </div>
            <div className="my-2"><s className="mx-2 " style={{ color: "red" }}> ${product.price_before}</s> ${product.price_after}</div>
            <div className="d-flex w-100 my-1">
              <div className="countHandler d-flex">
                <button disabled={props.open} className='btn  w-25 ' style={{ border: "0.5px solid gray" }} onClick={() => { minus() }}> - </button>
                <input className='btn  w-50' style={{ border: "0.5px solid gray" }} value={props.cart.quantity} onChange={(e) => { }} />
                <button disabled={props.open} className='btn  w-25' style={{ border: "0.5px solid gray" }} onClick={() => { plus(product.quantity) }}> + </button>
              </div>
            </div>
            {/*<div className="my-2">
              {product.color.map((color, index) => (
                <i key={index} className={`bi bi-circle-fill text-${color}`} />
              ))
              }
            </div>*/}
            <div>
              <button disabled={props.open} className="my-2 btn btn-outline-secondary" onClick={() => { remove() }}>remove</button>
            </div>
            <div><p style={{ color: "red" }}>Final Sale - No Exchanges or Returns</p>
              <p> price {product.price_after * props.cart.quantity}</p> </div>
          </div>
        </div>
      </div>}
      <hr></hr>
    </>
  );
};