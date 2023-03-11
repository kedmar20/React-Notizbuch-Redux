import React from "react";
import ReactDOM from "react-dom/client";
import Root from "views/Root";
import "assets/styles/fonts.css";

// ReactDOM.render(
//   <React.StrictMode>
//     <Root />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
   <React.StrictMode>
      <Root />
   </React.StrictMode>
);
