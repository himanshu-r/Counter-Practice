

import React, { useState } from 'react'



function HoverCounter() {
   const [count, setCount] = useState(0);

  const handleButtonHover = () => {
    setCount(count + 1);
  };
  return (
    <button onMouseOver={handleButtonHover}>
      
      Hovered {count} times
    </button>
  );
}

export default HoverCounter;

