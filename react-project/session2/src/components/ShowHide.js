import { useState } from "react";
export default function ShowHide() {

    // create a component that shows or hides a message when a button is clicked

    const [show, setShow] = useState(true); // This line is using the React Hook called useState to create a state variable in a functional component.
    // show holds a value that your component can use (in this case, it starts as true).
    //setShow is a special function that updates show and automatically re-renders the component with the new value.

    function handleClick() {
        setShow(!show);
    }

    return (
        <div>
            {show && <p>This is a message</p>}
            <button onClick={handleClick}>{show ? "Show" : "Hide"}</button>
        </div>
    )
}