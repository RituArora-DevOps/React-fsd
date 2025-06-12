import React, { useState } from "react";
import IncrementButton from "./IncrementButton";
export default function CounterSync() {
    // two buttons that increment the same shared count
    const[counter, setCounter] = useState(0);
    // one parent take control of two component

    function incrementValue() {
        //setCounter(counter + 1);
        setCounter(prevCounter => prevCounter + 1);
    }

    return (
        <div>
           <p>Shared value : {counter}</p>
           {/* <button onClick={increment}>Button 1</button>
           <button onClick={increment}>Button 2</button> */}
           <IncrementButton label="Button 1" increment={incrementValue} />
           <IncrementButton label="Button 2" increment={incrementValue} />
        </div>
    );
}