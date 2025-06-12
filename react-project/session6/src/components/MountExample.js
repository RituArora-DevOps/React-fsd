import { useState, useEffect } from "react";
function MountExample() {
const [counter, setCounter] = useState(0);

    useEffect (() => {
        console.log("Component mounted");
        const timer = setInterval(() => {
            console.log("Timer ticking...");
        } , 1000);
        return () => { // clean up code
            clearInterval(timer);
            console.log("Component unmounted");
        }
        }, []);

    return <div>
        <h1>Mount Example</h1>
        <p>Counter: {counter}</p>
        <button onClick={() => setCounter(counter + 1)}>Increment</button>
    </div>
}

export default MountExample;