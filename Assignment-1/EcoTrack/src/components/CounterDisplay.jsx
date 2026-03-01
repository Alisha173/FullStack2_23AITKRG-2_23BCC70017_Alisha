import React from "react";
const CounterDisplay=({count,incrementCount,decrementCount,resetCount})=>{
  console.log("child rendered");
  return(
    <>
      <h2>Water count: <span style={{color:"blue"}}>{count}</span></h2>
        <div>
          <button style={{backgroundColor: "lightblue"}} onClick={incrementCount} > Increase</button> {" "}
          <button style={{backgroundColor: "lightblue"}} onClick={decrementCount} > Decrease</button>{" "}
          <button style={{backgroundColor: "lightblue"}} onClick={resetCount} > Reset</button>
        </div>
    </>
  )
}
export default React.memo(CounterDisplay) ;