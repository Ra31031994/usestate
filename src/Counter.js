import { useState, useEffect } from "react";

    function Counter(props) {
        const {delta, max, getReset, needToReset, getAllMax} = props
        const[count, setCount] = useState(1)    
    
        useEffect(()=>{
            if(needToReset){
                setCount(0)
                getReset(false)
            }
        },[needToReset,getReset])

        function incr(){
        setCount(
            function(oldCount){
                if (oldCount+delta > max){
                    getAllMax(oldCount)
                    return 1;
                }
                else{
                    getAllMax(oldCount + delta)
                    return oldCount+delta
                }
                
            }
        )
    }
    
    function reset(){
        getReset(true)
        //setCount(0)    
    }


    return (
      <div className="App">
        <h1>Counter</h1>
        <p>Counter is at {count}</p>
        <p>
        <button onClick={incr}>Click to add {delta} to Counter</button>
        <button onClick={reset}>Reset counter</button>
        </p>
      </div>
    );
  }
  
  export default Counter;