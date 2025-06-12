export function TemperatureInput({label, temperature, onTemperatureChange}) {

    // const handleInputChange = (e) => {
    //     // I need  to do something BUT what I need to do is in the parent ?!???
    //     // lifting the state UP is happening
    //     onTemperatureChange(e.target.value);
    // }
    console.log("label", label);
    console.log("temperature", temperature);

    return (
        <div>
            {/* <label>Celsius or Fahrenheit</label> */}
            <label>{label}</label>
            <input 
                type="number" 
                value={temperature} 
                //onChange={handleInputChange}
                onChange={e => onTemperatureChange(e.target.value)} />
        </div>
    );
}