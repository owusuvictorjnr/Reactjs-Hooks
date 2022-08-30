import React, { useState } from "react";

// When counting numbers
// const StateTut = () => {
//   const [count, setCount] = useState(0);

//   const increment = () => {
//     setCount(3);
//   };

//   return (
//     <div>
//       {count}
//       <button onClick={increment}>+</button>
//     </div>
//   );
// };

// Accepting input from users. When 
const StateTut = () => {
  const [inputValue, setInputValue] = useState("Vitech");

  let onChange = (e) => {
    const newValue = e.target.value;
    setInputValue(newValue);
  };

  return (
    <div>
      <input type="text" placeholder="Enter something..." onChange={onChange}/>
      {inputValue}
    </div>
  );
};

export default StateTut;
