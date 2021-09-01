import React, { useState } from "react";


function ClickCounter() {
  const [count, setCount] = useState(0);

  const handleButtonClick = () => {
    setCount(count + 1);
  };
  return (
    <button onClick={handleButtonClick}> Liked {count} times </button>
  );
}

export default ClickCounter;