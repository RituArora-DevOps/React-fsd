import { useState } from "react";
import { TemperatureInput } from "./TemperatureInput";  
import { BoilingVerdict } from "./BoilingVerdict";

function tryToConvert(temperature, convertFn) {
    const input = parseFloat(temperature);
    if (Number.isNaN(input)) {
        return '';
    }
    const output = convertFn(input);
    const rounded = Math.round(output * 1000) / 1000;
    return rounded.toString();
}

function toCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5 / 9;
}

function toFahrenheit(celsius) {
    return (celsius * 9 / 5) + 32;
}

export default function Calculator() {

    const[temperature, setTemperature] = useState("");

    const [scale, setScale] = useState('c');

    const celsius = scale === "f" ? tryToConvert(temperature, toCelsius): temperature;
    const fahrenheit = scale === "c" ? tryToConvert(temperature, toFahrenheit): temperature;

    // I want to provide values to cels or farh based on a logic 
    // If I change the event on the inpput of Farh, then conversion is happening in the celsiuse event on the 
    // input of cels
    const handleFahrenheitChange = (temp) => {
        console.log(temp);
        setTemperature(temp);
        setScale("f");
    }

    const handleCelsiusChange = (temp) => {
        setTemperature(temp);
        setScale("c");

    }

    return (
        <div>
            <h1>Calculator</h1>
            <TemperatureInput 
                label="Celsius" 
                temperature={celsius}
                onTemperatureChange={handleCelsiusChange}/>
            <TemperatureInput 
                label="Fahrenheit" 
                temperature={fahrenheit} 
                onTemperatureChange={handleFahrenheitChange}/>
            <BoilingVerdict celsius={parseFloat(celsius)}/>            
        </div>
        );
}