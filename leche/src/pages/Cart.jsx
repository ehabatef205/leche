import React, { useState, useEffect, useRef } from "react";
import * as Cart1 from "../api/basis/cart"
import { CartItem } from "../components/shoppingcart/Cartitem";
import * as ProductList from "../api/basis/product";
import addOrder from "../api/basis/addOrder"
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";

const Cart = (props) => {
  const [totalPrice, setTotalPrice] = useState(0);
  const [ProductItems, setProductItems] = useState([]);
  const [isEmpty, setIsEmpty] = useState(true)
  const [isOpen, setIsOpen] = useState(false)
  const [carts1, setCarts] = useState([])
  const [products1, setProducts] = useState([])

  const phone = useRef(null);
  const country = useRef(null);
  const firstName = useRef(null);
  const lastName = useRef(null);
  const address = useRef(null);
  const city = useRef(null);
  const zipCode = useRef(null);

  useEffect(() => {
    if (localStorage.getItem("AuthBrook") !== null) {
      getCart()
      setIsOpen(false)
    }

  }
    , [props.data])

  const getCart = async () => {
    /*
    if (localStorage.getItem("AuthBrook") === null) {
      var storage = JSON.parse(localStorage.getItem('Detail'))
      if (!storage) {
        storage = [];
      } else {
        const productArr = []
        setCarts(storage)
        setProducts([])
        for (var i = 0; i < storage.length; i++) {
          const product = { product_id: storage[i].product_id, quantity: storage[i].quantity }
          setProducts(products1 => [...products1, product])
        }
        for (var i = 0; i < storage.length; i++) {
          productArr.push(storage[i].product_id)
        }
        const products = await Products.getProductList(productArr)
        setProductItems(products)
        var total = 0
        products.forEach((element, index) => {
          total += element.price_after * storage[index].quantity
        })
        setTotalPrice(total)
        setData(!data)
      }
    } else {
      const productArr = []
      var cartarr;
      await Cart1.getCarts(localStorage.getItem("AuthBrook")).then(res => {
        cartarr = res.data
        setCarts(res.data)
        setProducts([])
        for (var i = 0; i < res.data.length; i++) {
          const product = { product_id: res.data[i].product_id, quantity: res.data[i].quantity }
          setProducts(products1 => [...products1, product])
        }
        if (res.data.length !== 0) {
          setIsEmpty(false)
        }
      })
      cartarr.forEach(element => {
        productArr.push(element.product_id)
      });
      const products = await Products.getProductList(productArr)
      setProductItems(products)
      var total = 0
      products.forEach((element, index) => {
        total += element.price_after * cartarr[index].quantity
      })
      setTotalPrice(total)
      console.log(total)
    }
    */
    const productArr = []
    var cartarr;
    await Cart1.getCarts(localStorage.getItem("AuthBrook")).then(res => {
      cartarr = res.data
      setCarts(res.data)
      setProducts([])
      for (var i = 0; i < res.data.length; i++) {
        const product = { product_id: res.data[i].product_id, quantity: res.data[i].quantity }
        setProducts(products1 => [...products1, product])
      }
      if (res.data.length !== 0) {
        setIsEmpty(false)
      }
    })
    cartarr.forEach(element => {
      productArr.push(element.product_id)
    });
    const products = await ProductList.getProductList(productArr)
    setProductItems(products)
    var total = 0
    products.forEach((element, index) => {
      total += element.price_after * cartarr[index].quantity
    })
    setTotalPrice(total)
    console.log(total)
  }

  const add = async () => {
    if (carts1.length !== 0) {
      await addOrder(products1, phone.current.value, country.current.value, firstName.current.value, lastName.current.value, address.current.value, city.current.value, zipCode.current.value, totalPrice).then(async res => {
        console.log(res.data)
        getCart()
        setIsOpen(false)
      })
    }
  }

  const initialOptions = {
    clientId: "AbHZZAi6Hm95o2PH8A8C0l8bNO9N4kAqrACsL44T2ziyvLe8BFHEpw5Z2Sau0Wbfozu7YzeNFcO10hyc",
    currency: "USD",
    intent: "capture",
  };

  const createOrder = (data) => {
    // Order is created on the server and the order id is returned
    return fetch("http://5.183.9.124:7051/my-server/create-paypal-order", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      // use the "body" param to optionally pass additional order information
      // like product skus and quantities
      body: JSON.stringify({
        products: {
          cost: totalPrice,
        },
      }),
    })
      .then((response) => response.json())
      .then((order) => order.id);
  };

  const onApprove = (data) => {
    // Order is captured on the server and the response is returned to the browser
    return fetch("http://5.183.9.124:7051/my-server/capture-paypal-order", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        orderID: data.orderID
      })
    })
      .then((response) => response.json()).then(async (order) => {
        if (order.status === "COMPLETED") {
          await addOrder(products1, phone.current.value, country.current.value, firstName.current.value, lastName.current.value, address.current.value, city.current.value, zipCode.current.value, totalPrice).then(async res => {
            console.log(res.data)
            getCart()
            setIsOpen(false)
          })
        }
      });;
  };

  return (
    <div className="offcanvas offcanvas-start" data-bs-scroll="true" tabIndex="-1" id="offcanvasWithBothOptions" aria-labelledby="offcanvasWithBothOptionsLabel">
      <div className="offcanvas-header">
        <h5 className="offcanvas-title" id="offcanvasExampleLabel">My Cart</h5>
        <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>

      <div className='offcanvas-body'>
        <div className='col-12'>
          <h1>Your Cart Items</h1>
        </div>
        {isEmpty ? (
          <div className="empty-message">Your cart is empty.</div>
        ) : (
          <div className="cart">
            {carts1.map((cart) => (
              <CartItem key={cart._id} cart={cart} product_id={cart.product_id} quantity={cart.quantity} getCart={getCart} />
            ))}
          </div>
        )}
        <div className='col-12'>
          <div>Total price: {totalPrice}$</div>
          {isOpen ?
            <div>
              <input
                ref={firstName}
                style={inputText5}
                placeholder="First name"
                type="text"
              />
              <input
                ref={lastName}
                style={inputText5}
                placeholder="Last name"
                type="text"
              />
              <input
                ref={phone}
                style={inputText5}
                placeholder="Phone"
                type="phone"
              />
              <input
                ref={address}
                style={inputText5}
                placeholder="Address"
                type="text"
              />
              <input
                ref={country}
                style={inputText5}
                placeholder="Country"
                type="text"
              />
              <input
                ref={city}
                style={inputText5}
                placeholder="City"
                type="text"
              />
              <input
                ref={zipCode}
                style={inputText5}
                placeholder="Zip code"
                type="text"
              />
              <PayPalScriptProvider options={initialOptions}>
                <PayPalButtons
                  createOrder={(data, actions) => createOrder(data, actions)}
                  onApprove={(data, actions) => onApprove(data, actions)}
                />
              </PayPalScriptProvider>
            </div>
            : <button
              className="btn text-light my-3 h-50 w-100"
              onClick={() => {
                if (carts1.length !== 0) {
                  setIsOpen(true)
                }
              }}
              style={{ backgroundColor: "#72be93" }}
            >
              Checkout
            </button>}
        </div>
      </div>
    </div>


  );
};

export default Cart;

const inputText5 = {
  border: "1px solid #000",
  borderRadius: "15px",
  width: "calc(100% - 20px)",
  padding: "10px",
  marginTop: "20px",
  margin: "10px"
}

/*
{<CartItem key={cart._id} product_id={cart.product_id} />}
*/