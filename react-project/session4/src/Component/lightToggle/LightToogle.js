import { useState } from "react";
import { ToggleButton } from "./ToggleButton";

export default function LightToggle() {
    const[isOn, setIsOn] = useState(false);

    const toggleLight = () => {
        setIsOn(!isOn);
    }

    return <div>
        <h1>Light Toggle</h1>
        <p>The light is {isOn ? 'on' :  'off'}</p>
        {/* <button onClick={toggleLight}>Switch 1</button>
        <button onClick={toggleLight}>Switch 2</button> */}
        <ToggleButton toggleLight={toggleLight} switchName="Switch 1"/>
        <ToggleButton toggleLight={toggleLight} switchName="Switch 2"/>
        <ToggleButton toggleLight={toggleLight} switchName="Switch 3"/>
    </div>
}