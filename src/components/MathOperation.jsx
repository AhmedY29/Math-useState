import React, { useState } from "react";

function MathOperation(props) {
  const [num1, setNum1] = useState(props.num1);
  const [num2, setNum2] = useState(props.num2);
  const [result, setResult] = useState(0);
  const handleMath = () => {
    if(props.operation.toLowerCase() == 'sum'){
      
      setResult(num1 + num2);
    }else if(props.operation.toLowerCase() == 'sub'){
      setResult(num1 - num2);

    }else if(props.operation.toLowerCase() == 'divid'){
      setResult(num1 / num2);

    }
    else if(props.operation.toLowerCase() == 'mod'){
      setResult(num1 % num2);

    }else if(props.operation.toLowerCase() == 'mult'){
      setResult(num1 * num2);

    }
  };
  return (
    <div>
      {/* <input type="text" placeholder="Enter Num 1" />
      <input type="text" placeholder="Enter Num 2" /> */}
      {num1}, {num2}
      <hr />
      <button
        className="text-white rounded-2xl cursor-pointer my-3 bg-black p-3 px-4"
        onClick={handleMath}
      >
        <h1 className="uppercase">{props.operation}</h1>
      </button>
        <hr />
      {result ? result : ""}
    </div>
  );
}

export default MathOperation;
