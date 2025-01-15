/*
useEffect Hook

-Used to handle side effects
-Fetching data and updating DOM
--Effect function
--Cleanup function
--Dependencies
*/

import { useState,useEffect } from "react";

export function SideEffect(){
    const [price,setPrice] = useState(0);
    const [tAmount,setTAmount] = useState(0);

    useEffect(()=>{
        setTAmount(()=> price * 5);
    },[price]);

    return(
        <div>
            <h1>-------------------------------Use Effect Hook--------------------------------</h1>
            <h2>No. of units 5</h2>
            <button onClick={()=> setPrice((prev)=> prev+20)}>Change Price</button>
            <h4>Unit Price : {price}</h4>
            <h4>Total Amount : {tAmount}</h4>
        </div>
    )
}