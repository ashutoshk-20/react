/*
useState Hook

-allows us to track state in a function component
-replacement of state object and class component

*/

import { useState } from "react";

export function UseStateDemo(){
    const [numFirst,setNum1] = useState(0);
    const [numSecond,setNum2] = useState(0);
    const [sum,setSum] = useState(0);

    const updateNum1 = (event) =>{
        setNum1(event.target.value);
    }

    const updateNum2 = (event) =>{
        setNum2(event.target.value);
    }

    const calculate = ()=>{
        setSum(parseInt(numFirst)+parseInt(numSecond));
    }

    return(
        <div>
            <p>Enter first number : </p>
            <input type="text" onChange={updateNum1}></input>

            <p>Enter second number : </p>
            <input type="text" onChange={updateNum2}></input>
            
            <br></br>
            <br></br>

            <button onClick={calculate}>Calculate</button>

            <br></br>
            <h3>Total : {sum}</h3>
        </div>
    )

}