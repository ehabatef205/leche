
// import React from 'react'

// // function Filterside() {
// //   return (
// //     <div>
// //     <header
// //       className=" second  "
// //       style={{ display: "flex", justifyContent: "space-between" }}
// //     >
// //       <div className="  w-50">
// //         <div style={{ display: "flex" }}>
// //           <a
// //             className="btn  mx-2 d-flex"
// //             style={{
// //               backgroundColor: "#f7f7f7",
// //               borderRadius: "26px",
// //               border: "1.5px solid #f7f7f7",
// //             }}
// //             href="#"
// //             role="button"
// //           >
// //             Premium
// //           </a>

// //           <a
// //             className="btn  mx-2"
// //             style={{
// //               backgroundColor: "#f7f7f7",
// //               borderRadius: "26px",
// //               border: "1.5px solid #f7f7f7",
// //             }}
// //             href="#"
// //             role="button"
// //           >
// //             Sports
// //           </a>
// //           <a
// //             className="btn  mx-2"
// //             style={{
// //               backgroundColor: "#f7f7f7",
// //               borderRadius: "26px",
// //               border: "1.5px solid #f7f7f7",
// //             }}
// //             href="#"
// //             role="button"
// //           >
// //             Streetwear
// //           </a>
// //           <a
// //             className="btn  mx-2"
// //             style={{
// //               backgroundColor: "#f7f7f7",
// //               borderRadius: "26px",
// //               border: "1.5px solid #f7f7f7",
// //             }}
// //             href="#"
// //             role="button"
// //           >
// //             Fashion
// //           </a>
// //         </div>
// //         <div
// //           className="bg- m-0"
// //           style={{ display: "flex", justifyContent: "space-between" }}
// //         >
// //           <i>53983 styles </i>
// //         </div>
// //       </div>
// //       <div className="d-flex" style={{ width: "150px", height: "40px" }}>
// //         <select className="form-select" aria-label="Dropdown">
// //           <option selected>Suggested</option>
// //           <option value="option1">Option 1</option>
// //           <option value="option2">Option 2</option>
// //           <option value="option3">Option 3</option>
// //           <option value="option3">Option 4</option>
// //           <option value="option3">Option 5</option>
// //         </select>
// //       </div>
// //     </header>
// //   </div>
// // );
// // }

// // export default Filterside
import React from 'react'

function Featuerd() {
  return (
    <div className="d-flex " style={{ width: "150px", height: "40px" }}>
      <select className="form-select" aria-label="Dropdown">
        <option  >Suggested</option>
        <option value="option1">Option 1</option>
        <option value="option2">Option 2</option>
        <option value="option3">Option 3</option>
        <option value="option">Option 4</option>
        <option value="option9">Option 5</option>
      </select>
    </div>
  )
}
function Navpage() {
  return (
    <div className="  w-50">

      <nav aria-label="breadcrumb">
        <ol className="breadcrumb m-0">
          <li className="breadcrumb-item">
            <a
              href="#"
              style={{ color: "black", textDecoration: "none" }}
            >
              Home
            </a>
          </li>
          <li className="breadcrumb-item">
            <a
              href="#"
              style={{ color: "black", textDecoration: "none" }}
            >
              woman
            </a>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            clothings
          </li>
        </ol>
      </nav>



    </div>
  )
}
function ProductHeaders() {


  return (
    <div>
      <header
        className="d-flex justify-content-start"
        style={{  }}
      >
        {/* <Navpage></Navpage> */}
        <div className='w-100  d-flex justify-content-end '>
        <Featuerd></Featuerd>
        </div> 
      </header>
    </div>
  )
}

export default ProductHeaders
