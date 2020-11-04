import React, { useState } from "react";

export default function Bulbs() {
  // alterna el valor del estado para apagar
  // y prender el foco de luz
  // si el foco no aparece, refresca el
  // browser de codesandbox
  const [ on, setOn ] = useState(true);

  const handleClick = () => {
    setOn(!on);
  };

  return (
    <div 
    onClick={handleClick}
    className={on ? "bulb-on" : "bulb-off"} />
  );
}