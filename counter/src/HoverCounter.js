

import React, { useState } from 'react'
import UpdatedComponent from './Counter';



function HoverCounter(props) {
//    const [count, setCount] = useState(0);

//   const handleButtonHover = () => {
//     setCount(count + 1);
//   };
//   return (
//     <button onMouseOver={handleButtonHover}>
      
//       Hovered {count} times
//     </button>
//   );

return (
    <button onMouseOver={props.handleEvent}>
      {" "}
      Hovered {props.count} times{" "}
    </button>
  );
}

export default UpdatedComponent(HoverCounter);

