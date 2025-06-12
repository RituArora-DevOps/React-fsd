import { useState } from "react";

export default function Counter() {
    // non-functional implication
    // let count = 0;
    // return (
    //     <div>
    //         <p>Count: {count}</p>
    //         <button onClick={() => count + 1}>Increase</button>
    //     </div>
    // );

    const [count, setState] = useState(0); // useState hook

    return (
        <div>   
            <p>Count: {count}</p>
            <button onClick={() => setState(count + 1)}>Increase</button>
        </div>
        );
}