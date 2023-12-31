import React, { useEffect, useState } from 'react'
import './style/nav.css'
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import getAll from '../api/basis/allcategory'
import { useNavigate, useLocation } from "react-router-dom";

function SubNav() {
  const navigate = useNavigate();
  const [categories, setCategories] = useState([])
  const [selectedCategory, setSelectedCategory] = useState("");
  useEffect(() => {
    getAll().then(res => {
      setCategories(res.data.response)
    })
  }
    , [])

  return (
    <div className="w-100">
      <nav className="navbar navbar-expand-lg w-100  ">
        <div className="d-flex  w-100 ">
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation"
            style={{ position: "absolute", bottom: "85px",right:"250px" }}
            >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse  navbar-collapse subnav-container" id="navbarTogglerDemo03">
            <Container className="d-flex justify-content-center  nav2 w-100 ">
              <Nav className="me-auto text-dark  d-flex justify-content-center ">
                {categories?.map((subcategory) => (
                  <Nav.Link key={subcategory._id} 
                  className={`text-dark nav2hover  d-flex justify-content-center ${selectedCategory === subcategory._id ? 'bg-primary-subtle' : 'bg-white'}`}
          onClick={() => {
            setSelectedCategory(subcategory._id);
            navigate(`/Productpage/${subcategory._id}`);
          }}

                   >
                    {subcategory.name}
                  </Nav.Link>
                ))}

              </Nav>
            </Container>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default SubNav

