import React, { useState } from "react";
import UpdatedComponent from "./Counter";


function ClickCounter(props) {
//   const [count, setCount] = useState(0);

//   const handleButtonClick = () => {
//     setCount(count + 1);
//   };
//   return (
//     <button onClick={handleButtonClick}> Liked {count} times </button>
//   ); 

return (
    <button onClick={props.handleEvent}> Liked {props.count} times </button>
  );
}

export default UpdatedComponent(ClickCounter);