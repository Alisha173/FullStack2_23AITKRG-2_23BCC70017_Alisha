import React from "react";
//Memoized Button component to prevent unneccesary re render
const Button=React.memo(({clkHandler,textVal})=>{
  console.log("Button Rendered");
  return (
    <button onClick={clkHandler} style={{padding:"5px",backgroundColor:"#3b57d3",
      color:"white",cursor:"pointer"
    }}>{textVal}</button>
  )
});
export default Button;