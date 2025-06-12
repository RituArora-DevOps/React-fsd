import CurrencyInput from './CurrencyInput';
import { useState } from 'react';

function tryToConvert(currency, convertFn) {
    const input = parseFloat(currency);
    if (Number.isNaN(input)) {
        return "";
    }

    const output = convertFn(input);
    const rounded = Math.round(output * 100) / 100;
    return rounded.toString();    
}

function toUSD(eur) {
    return eur * 1.14;
}

function toEUR(usd) {
    return usd / 1.14;
}

export default function CurrencyConverter() {

    const [currency, setCurrency] = useState("");
    const [currencyUnit, setCurrencyUnit] = useState("usd");

    const usd = currencyUnit === "usd" ? currency : tryToConvert(currency, toUSD);
    const eur = currencyUnit === "eur" ? currency : tryToConvert(currency, toEUR);

    const handleUSDChange = (curr) => {
        console.log(curr);
        setCurrency(curr);
        setCurrencyUnit("usd");
    };

    const handleEURChange = (curr) => {
        console.log(curr);
        setCurrency(curr);
        setCurrencyUnit("eur");
    };

    return (
        <div>
            <h1> Currency Converter</h1>
            <CurrencyInput 
                label="USD"
                currency={usd}
                onCurrencyChange={handleUSDChange} />
            <CurrencyInput 
                label="EUR"
                currency={eur}
                onCurrencyChange={handleEURChange} />
        </div>
    );
}