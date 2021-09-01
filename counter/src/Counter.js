import React, { useState } from "react";

export default function UpdatedComponent(Originalcomponent) {
  const NewComponent = () => {
    const [count, setCount] = React.useState(0);

    const handleEvent = () => {
      setCount(count + 1);
    };

    return <Originalcomponent count={count} handleEvent={handleEvent} />;
  };
  return NewComponent;
}
