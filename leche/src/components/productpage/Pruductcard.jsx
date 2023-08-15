import { products } from "../data";
import React, { useState, useEffect, useContext } from "react";
import * as Products from "../../api/basis/product";
import "./slider.css";
import Carousel from "react-bootstrap/Carousel";
import { Card } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import * as Cart from "../../api/basis/cart"
import * as Wish from "../../api/basis/wish"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Cookies from 'js-cookie';

export function CardsSlider() {
  const { id } = useParams();

  const navigate = useNavigate();

  const handleImageClick = (product) => {
    navigate(`/Viewproduct/${product._id}`);
  };

  const [prod_by_cat, setProdByCat] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    if (id) {
      setLoading(true)
      Products.getProductOfCateegory(id).then(res => {
        setLoading(false)
        setProdByCat(res.data)
      }).catch((error) => {
        setLoading(false)
      })
    }
  }
    , [id])

  const addC = (product_id) => {
    /*
    if (localStorage.getItem("AuthBrook") === null) {
      var storage = JSON.parse(localStorage.getItem('Detail'))
      if (!storage) {
        storage = [];
      }
      var detail = { product_id: product_id, quantity: 1 };
      storage.push(detail)
      console.log(storage)
      localStorage.setItem('Detail', JSON.stringify(storage));
    } else {
      Cart.addCart(product_id).then(res => {
        if (res.data.message === "This product is already in cart") {
          toast.error(res.data.message, {
            position: toast.POSITION.TOP_RIGHT
          })
        } else {
          console.log(res)
        }
      })
    }
    */
    Cart.addCart(product_id).then(res => {
      if (res.data.message === "This product is already in cart") {
        toast.error(res.data.message, {
          position: toast.POSITION.TOP_RIGHT
        })
      } else {
        toast.success("Done added to cart", {
          position: toast.POSITION.TOP_RIGHT
        })
        console.log(res)
      }
    })
  }

  const addW = (product_id) => {
    Wish.addWish(product_id).then(res => {
      if (res.data.message === "This product is already in wish") {
        toast.error(res.data.message, {
          position: toast.POSITION.TOP_RIGHT
        })
      } else {
        toast.success("Done added to wishlist", {
          position: toast.POSITION.TOP_RIGHT
        })
        console.log(res.data)
      }
    })
  }

  return (
    <div className="containe d-flex  flex-wrap mx-1  ">
      {prod_by_cat.map((product) => (
        <div
          className=" my-1"
          key={product._id}
        >
          <div className="carousel-wrapper">
            <Carousel controls={false} onClick={() => handleImageClick(product)} style={{cursor: "pointer"}}>
              {product.images.map((image, index) => (
                <Carousel.Item key={index} >
                  
                  <img
                  
                    className="d-block  "
                    style={{ height: "265px",width:"265px", objectFit: "contained"}}
                    src={image}
                    alt="view product"
                  />

                </Carousel.Item>
              ))}
            </Carousel>
          </div >
          <div className="caption bottom-0 " style={{ backgroundColor: "#000" ,width:"265px"}} >
            <i className="bi bi-cart text-light mx-5" onClick={() => addC(product._id)} role="button " style={{ fontSize: "1.8rem", fontWeight: "bold", cursor: "pointer" }}></i>
            <i onClick={() => addW(product._id)} role="button " className="bi bi-heart mx-5  text-light" style={{ fontSize: "1.8rem", fontWeight: "bold", cursor: "pointer" }}></i>
          </div>
          <div
            className="card-body my-2 d-flex "
            style={{ fontSize: "0.8rem", padding: "0px", cursor: "pointer" ,width:"265px"}}
            // onClick={() => handleImageClick(product)}
          >
            <div className=" mx-2  w-100 d-flex flex-column align-items-start">
              <Card.Text className="mb-0  w-100 text-secondary "><b>{product.name}</b></Card.Text>
              <Card.Text className="mb-0 w-100 " ><s className="mx-2 " style={{ color: "red" }}> ${product.price_before}</s> ${product.price_after}</Card.Text>

              {/*<Card.Text className="mb-0">
                {Array.isArray(product.color) ?
                  product.color.map((color, index) => (
                    <i key={index} className={`bi bi-circle-fill text-${color}`} />
                  )) : null
                }
              </Card.Text>*/}
              <Card.Text > <b style={{ color: "red" }}>Final Sale - No Exchanges or Returns</b></Card.Text>

            </div>
          </div>
        </div>
      ))}
      <ToastContainer />
    </div>
  );
}