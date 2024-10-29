import { useState } from "react";

function Counter() {
  // let count=0;

  let [count, setCount] = useState(0);

  function handleInc() {
   // count++;
   //setCount(count+3);
   setCount((count)=>count+1);
   setCount((count)=>count+1);
   setCount((count)=>count+1);
    console.log(count);
  }

  function handleDec() {
   // count--;
  // setCount(count-3);
  setCount((count)=>count-1);
  setCount((count)=>count-1);
  setCount((count)=>count-1);
    console.log(count);
  }

  return (
    <>
      <div className="container m-5 p-5">
        <h2>
          <button className="btn btn-warning" onClick={handleDec}>
            ➖ BY 3
          </button>
          <span className="mx-5 badge bg-success">{count}</span>
          <button className="btn btn-warning" onClick={handleInc}>
            ➕ BY 3
          </button>
        </h2>
      </div>
    </>
  );
}
export default Counter;
