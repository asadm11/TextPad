// import React from "react";

// export default function About(props) {
//   // const [myStyle, setmyStyle] = useState({
//   //   color: "black",
//   //   backgroundColor: "white",
//   // });

//   // const [btnText, setbtnText] = useState("Enable dark mode");

//   let myStyle = {
//     color: props.mode === "dark" ? "white" : "black",
//     backgroundColor: props.mode === "dark" ? "rgb(36 74 104)" : "white",
//   };

//   // const toggleStyle = () => {
//   //   if (myStyle.color === "white") {
//   //     setmyStyle({
//   //       color: "black",
//   //       backgroundColor: "white",
//   //       border: "1px solid white",
//   //     });
//   //     setbtnText("Enable dark mode");
//   //   } else {
//   //     setmyStyle({
//   //       color: "white",
//   //       backgroundColor: "black",
//   //       border: "1px solid white",
//   //     });
//   //     setbtnText("Enable light mode");
//   //   }
//   // };
//   return (
//     <div className="container">
//       <h1 className="my-3" style={{color: props.mode === "dark" ? "white" : "black"}}>About Us</h1>
//       <div className="accordion" id="accordionExample">
//         <div className="accordion-item" >
//           <h2 className="accordion-header" id="headingOne">
//             <button
//               style={myStyle}
//               className="accordion-button"
//               type="button"
//               data-bs-toggle="collapse"
//               data-bs-target="#collapseOne"
//               aria-expanded="true"
//               aria-controls="collapseOne"
//             >
//               <strong> Accordion Item #1 </strong>
//             </button>
//           </h2>
//           <div
           
//             id="collapseOne"
//             className="accordion-collapse collapse show"
//             aria-labelledby="headingOne"
//             data-bs-parent="#accordionExample"
//           >
//             <div className="accordion-body" style={myStyle}>
//               <strong>This is the first item's accordion body.</strong> It is
//               shown by default, until the collapse plugin adds the appropriate
//               classes that we use to style each element. These classes control
//               the overall appearance, as well as the showing and hiding via CSS
//               transitions. You can modify any of this with custom CSS or
//               overriding our default variables. It's also worth noting that just
//               about any HTML can go within the <code>.accordion-body</code>,
//               though the transition does limit overflow.
//             </div>
//           </div>
//         </div>
//         <div className="accordion-item" >
//           <h2 className="accordion-header" id="headingTwo">
//             <button
//              style={myStyle}
//               className="accordion-button collapsed"
//               type="button"
//               data-bs-toggle="collapse"
//               data-bs-target="#collapseTwo"
//               aria-expanded="false"
//               aria-controls="collapseTwo"
//             >
//               <strong> Accordion Item #2 </strong>
//             </button>
//           </h2>
//           <div
            
//             id="collapseTwo"
//             className="accordion-collapse collapse"
//             aria-labelledby="headingTwo"
//             data-bs-parent="#accordionExample"
//           >
//             <div className="accordion-body" style={myStyle}>
//               <strong>This is the second item's accordion body.</strong> It is
//               hidden by default, until the collapse plugin adds the appropriate
//               classes that we use to style each element. These classes control
//               the overall appearance, as well as the showing and hiding via CSS
//               transitions. You can modify any of this with custom CSS or
//               overriding our default variables. It's also worth noting that just
//               about any HTML can go within the <code>.accordion-body</code>,
//               though the transition does limit overflow.
//             </div>
//           </div>
//         </div>
//         <div className="accordion-item" >
//           <h2 className="accordion-header" id="headingThree">
//             <button
//               style={myStyle}
//               className="accordion-button collapsed"
//               type="button"
//               data-bs-toggle="collapse"
//               data-bs-target="#collapseThree"
//               aria-expanded="false"
//               aria-controls="collapseThree"
//             >
//               <strong> Accordion Item #3 </strong>
//             </button>
//           </h2>
//           <div
            
//             id="collapseThree"
//             className="accordion-collapse collapse"
//             aria-labelledby="headingThree"
//             data-bs-parent="#accordionExample"
//           >
//             <div className="accordion-body" style={myStyle}>
//               <strong>This is the third item's accordion body.</strong> It is
//               hidden by default, until the collapse plugin adds the appropriate
//               classes that we use to style each element. These classes control
//               the overall appearance, as well as the showing and hiding via CSS
//               transitions. You can modify any of this with custom CSS or
//               overriding our default variables. It's also worth noting that just
//               about any HTML can go within the <code>.accordion-body</code>,
//               though the transition does limit overflow.
//             </div>
//           </div>
//         </div>
//       </div>
//       {/* <div className="container my-3">
//         <button className="btn btn-primary" type="button" onClick={toggleStyle}>
//           {btnText}
//         </button>
//       </div> */}
//     </div>
//   );
// }
