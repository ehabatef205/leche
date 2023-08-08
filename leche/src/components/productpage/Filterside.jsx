
import React from "react";
import "./filter.css";
import { options} from "../data";

import { useState } from "react";

export function Filter() {
    return (
 <div
          className="border-bottom border-2 border-secondary w-100 "
          style={{ fontSize: "14px", paddingBottom: "25px" }}
        >
          <div className="change1  d-flex my-1 mx-1">
            <p style={{ fontSize: "15px" }}>
              <b>header</b>
            </p>
          </div>

         
         
          <div className="d-flex w-100 ">
            <ul
              className="m-0   w-100"
              style={{ listStyleType: "none", padding: "0px" }}
            >
              {options.map((word, index) => (
                <li className="my-1 w-100   " key={index}>
                  <div className="change2  d-flex justify-content-between w-100" style={{ textDecoration: "none" }}>
                  <div > <input type="checkbox" name="filter"  />
                    <span className="mx-2 ">{word}</span></div> 
                    <span className="mx-3">ff</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
    )}

    export function Price() {
        return (
            <div
            className="border-bottom border-2 border-secondary w-100 "
            style={{ fontSize: "14px", paddingBottom: "25px" }}
          >
            <div className="change1  d-flex my-1 mx-1">
              <p style={{ fontSize: "15px" }}>
                <b>header</b>
              </p>
            </div>
            <div className="d-flex w-100">
              <ul
                className="m-0 w-100"
                style={{ listStyleType: "none", padding: "0px" }}
              >
                {options.map((word, index) => (
                  <li className="my-1 w-100" key={index}>
                    <div className="change2 d-flex justify-content-between w-100"
                     style={{ textDecoration: "none" }}>
                   <div>   <input type="checkbox" name="filter" />
                      <span className="mx-2">{word}</span></div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
      )}
    

export default function Filterside() {
  return (
    <div>
      <div className="contianer  sider1  d-flex flex-wrap w-100 "
      style={{ height: "500px", overflowY: "scroll" }}>
        {/*Entertainment - price - Accessories- Massage-Massage Type -Track Type -Roller Dimension*/}
     <Price></Price>
<Filter></Filter>
<Filter></Filter>
<Filter></Filter>
<Filter></Filter>

        

       
        
        
      </div>
    </div>
  );
}

// const [showFilter, setShowFilter] = useState(false);

// const handleFilterClick = () => {
//   setShowFilter(!showFilter);
// };
// return (
//   <div>
//     <div className="container sider1 d-flex flex-wrap" style={{ height: "500px", overflowY: "scroll" }}>
//       {/* Entertainment - price - Accessories- Massage-Massage Type -Track Type -Roller Dimension */}

//       {/* Show the "Filter" button if the screen size is small */}
//       <div className="d-flex d-lg-none justify-content-center w-100 my-2">
//         <button className="btn btn-primary" onClick={handleFilterClick}>
//           Filter
//         </button>
//       </div>

//       {/* Show the filter component if the screen size is large */}
//       <div className="w-100 d-none d-lg-block">
//         <Price />
//         <Filter />
//         <Filter />
//         <Filter />
//         <Filter />
//       </div>
//     </div>

//     {/* Show the popup with the filter component if the "Filter" button is clicked */}
//     {showFilter && (
//       <div className="popup">
//         <div className="popup-content">
//           <button className="btn btn-primary" onClick={handleFilterClick}>
//             Close
//           </button>
//           <Price />
//           <Filter />
          
//         </div>
//       </div>
//     )}
//   </div>
// );
// }
