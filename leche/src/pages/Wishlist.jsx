import { Wishlistitem } from "../components/shoppingcart/Wishlistitem";
import React, { useEffect, useState } from "react";
import * as Wish from "../api/basis/wish"

const Wishlist = () => {
  const [isEmpty, setIsEmpty] = useState(true);
  const [wishlist, setWWishlist] = useState([]);

  useEffect(() => {
    Wish.getWish(localStorage.getItem("AuthBrook")).then(res => {
      setWWishlist(res.data)
      if (res.data.length !== 0) {
        setIsEmpty(false)
      }
    })
  }
    , [])

  const getWish = async () => {
    await Wish.getWish(localStorage.getItem("AuthBrook")).then(res => {
      setWWishlist(res.data)
      if (res.data.length !== 0) {
        setIsEmpty(false)
      }
    })
  }

  return (
    <div className='' style={{
      width: "76%",
      marginLeft: "12%",
      marginRight: "12%",
    }}>

      <div>
        <h1>قائمة الامنيات</h1>
      </div>

      {isEmpty ? (
        <div className="empty-message">Your cart is empty.</div>
      ) : (
        <div className="d-flex  w-100  flex-wrap">
          {wishlist.map((wish) => (
            <Wishlistitem key={wish._id} wish_id={wish._id} product_id={wish.product_id} getWish={getWish} />
          ))}
        </div>
      )}
    </div>
  )
}

export default Wishlist
