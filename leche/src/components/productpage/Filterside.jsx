
import React from "react";
import "./filter.css";
import { options} from "../data";

import { useState } from "react";

// export function Filter() {
//     return (
//  <div
//           className="border-bottom border-2 border-secondary w-100 "
//           style={{ fontSize: "14px", paddingBottom: "25px" }}
//         >
//           <div className="change1  d-flex my-1 mx-1">
//             <p style={{ fontSize: "15px" }}>
//               <b>header</b>
//             </p>
//           </div>

         
         
//           <div className="d-flex w-100 ">
//             <ul
//               className="m-0   w-100"
//               style={{ listStyleType: "none", padding: "0px" }}
//             >
//               {options.map((word, index) => (
//                 <li className="my-1 w-100   " key={index}>
//                   <div className="change2  d-flex justify-content-between w-100" style={{ textDecoration: "none" }}>
//                   <div > <input type="checkbox" name="filter"  />
//                     <span className="mx-2 ">{word}</span></div> 
//                     <span className="mx-3">ff</span>
//                   </div>
//                 </li>
//               ))}
//             </ul>
//           </div>
//         </div>
//     )}

    export function Price() {
        return (
            <div
            className="border-bottom border-1 border-secondary w-100  mx-3 "
            style={{ fontSize: "14px", paddingBottom: "25px" }}
          >
            <div className="change1  d-flex my-1 mx-1">
              <p style={{ fontSize: "15px" }}>
                <b>Price</b>
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
      <div className="contianer  sider1  d-flex flex-wrap w-100  "
      style={{ height: "fit-content" }}>
     <Price></Price>


        

       
        
        
      </div>
    </div>
  );
}

