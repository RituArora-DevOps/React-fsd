import { useState } from "react";
export function ClickExample() {
    function handleClick() {
        console.log("Clicked");
    }
    // there is a difference between handleClick() (this calls the function, so alert pops up just once on reloading) and handleClick (this makes a reference to the method handleClick, so alert pops up every time you click on the button)
    return (
        <button onClick={handleClick}>Click</button>
    )
}

export function InputExample() {
    // 1- I am typing so I need to handle the typing (event)
    // 2- You need to keep whatever you are typing
    // 3- using useState to handle the state
    //let text = ""; wrong way to handle the state

    const [text, setText] = useState("");

    function handleChange(e){
        // need to take whatever you are typing
        // text = e.target.value; // WRONG !! never change the value of state directly
        console.log(text);
        setText(e.target.value);
    }

    return <> 
        <input type="text" onChange={handleChange}/>
        <p>You typed: {text} </p>
    </>
}