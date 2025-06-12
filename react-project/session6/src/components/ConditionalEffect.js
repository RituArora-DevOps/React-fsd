import { useState, useEffect } from "react";
function ConditionalEffect() {
const [counter, setCounter] = useState(0);
const [name, setName] = useState("");

    useEffect (() => {
        if (counter > 5) {
            console.log("Counter is big!");
            }
        console.log("namer is changed");
        }, [counter, name]);

    return <div>
        <h1>ConditionalEffect Example</h1>
        <p>Counter: {counter}</p>
        <button onClick={() => setCounter(counter + 1)}>Increment</button>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)}/>
        <p>Name: {name}</p>
    </div>
}

export default ConditionalEffect;