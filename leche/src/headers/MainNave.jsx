import React, { useEffect, useState } from 'react'
import SubNav from './SubNav';
import Cart from '../pages/Cart';
import Logo from "./images/wd.png"
import searchProduct from "../api/basis/searchproduct";
import { useNavigate } from 'react-router-dom';

function MainNave() {
  const [data, setData] = useState(false);

  const navigate = useNavigate();

  const [query, setQuery] = useState("");
  const [items, setItems] = useState([]);

  useEffect(() => {
    if (query === "")
      setItems([])
    else {
      searchProduct(query).then(res => {
        setItems(res.data.response)
      })
    }

  }, [query])

  return (
    <div className='d-flex flex-wrap '>
      <nav className=" navbar navbar-expand-lg bg-body-tertiary mainnave col-12 ">
        <div className="container-fluid   ">
          <div className=' col-4 col-lg-3 d-flex justify-content-center '>
            <a className="navbar-brand  col-12 d-flex justify-content-center " style={{ display: "flex", objectFit: "contain" }} href="/">
              <img className='logo' style={{ imageRendering: " pixelated" }} src={Logo}></img>
            </a>
          </div>
          <div className="col-8  col-lg-7   my-2" style={{ height: "5vh" }}>
            <div style={container}>
              <div className=" mx-3  my-2 ">
                <i className=" mx-2 bi bi-search-heart" style={{ fontSize: "1.5rem" }}></i>

              </div>
              <input
                placeholder='Search'
                style={{
                  height: "5vh",
                  color: "white",
                  border: "none",
                  outline: "none",
                  textAlign: "right",
                  background: "#fff",
                  borderRadius: "15px",
                  width: "100%",
                }}
                value={query}
                onChange={(e) => { setQuery(e.target.value) }}
              />


            </div></div>
          <div className="col-8 iconscontaner  col-lg-2 " style={{textAlign:"center"}}>

            {/* <i className=" mx-2 bi bi-person"role="button"   href="/Login" style={{fontSize:"2rem"}}></i> */}
            {localStorage.getItem("AuthBrook") === null ? <i onClick={() => {
              navigate("/Login", { replace: true })
            }} href=""> <i className={"mx-2 bi bi-person text-black"} role="button" style={{ fontSize: "2rem" }}></i>
            </i> : <i onClick={() => {
              localStorage.removeItem("AuthBrook")
              navigate("/", { replace: true })
            }} href=""> <i className={"mx-2 bi bi-box-arrow-right text-black"} role="button" style={{ fontSize: "2rem" }}></i>
            </i>}
            <a href="/Wishlist" style={{textDecoration:"none"}}><i className=" mx-2 bi bi-suit-heart text-black" role="button" style={{ fontSize: "2rem" }}>
            <b style={{borderRadius:"50px", width:"fit-content",fontSize:"1rem",position:"relative" ,left:"5px",bottom:"20px"}} className=" bg-danger-subtle "><span className='mx-2'>2</span></b> 

              
              </i></a>
            <i className=" mx-2 bi bi-cart " onClick={() => setData(!data)} type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasWithBothOptions" aria-controls="offcanvasWithBothOptions" style={{ fontSize: "2rem" }}>
             <b style={{borderRadius:"50px", width:"fit-content",fontSize:"1rem",position:"relative",left:"5px" ,bottom:"20px"}} className=" bg-success-subtle "><span className='mx-2'>2</span></b> 
            </i>
          </div>
        </div>
      </nav>
      <div className="col-6 col-lg-12 d-flex justify-content-center small-screen-only">
        <SubNav ></SubNav>
      </div>
      <Cart data={data}></Cart>
      <div style={{ width: "100%", display: "flex", justifyContent: "center", position: "absolute" }}>
        <div className="list-group" style={{ width: "10%", marginTop: "60px", marginLeft: "100px", marginTop: "100px", zIndex: 9999, direction: "rtl", position: "fixed" }}>
          {items?.map((item) => {
            return (
              <a
                className="list-group-item list-group-item-action"
                key={item._id}
                href={`/Viewproduct/${item._id}`}
              >
                {item.name}
              </a>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default MainNave


const container = {
  display: "flex",
  backgroundColor: "white",
  paddingRight: "3%",
  marginRight: "3%",
  marginLeft: "3%",
  borderRadius: 5,
};