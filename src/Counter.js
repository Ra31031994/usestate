import { useState } from "react";

    function Counter(props) {
        const {delta} = props
        const[count, setCount] = useState(1)    

    function incr(){
        setCount(
            function(oldCount){
                return oldCount + delta
            }
        )
    }

    function reset(){
        setCount(0)    
    }

    return (
      <div className="App">
        <h1>Counter</h1>
        <p>Counter is at {count}</p>
        <button onClick={incr}>Click to add {delta} to Counter</button>
        <button onClick={reset}>Reset counter</button>
      </div>
    );
  }
  
  export default Counter;