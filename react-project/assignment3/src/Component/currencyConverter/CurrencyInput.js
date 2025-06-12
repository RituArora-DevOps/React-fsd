export default function CurrencyInput({ label, currency, onCurrencyChange}) {
    return (
        <div>
            <label>{label}</label>
            <input 
                type="number"
                value={currency}
                onChange={e => onCurrencyChange(e.target.value)} />
                {/* e = event object that is automatically passed when the onChange event happens
                e.target = the DOM element that triggered the event, in this case the input
                e.target.value = the value of the input field when the event happened, always a String, even if type="number"
                onCurrencyChange = the function that will be called when the event happens *
                This is the functione we defined in the parent component, CurrencyConverter.js to handle the state update. This is called a callback function. Calling a function inside a child componenet from a parent component is called lifting state up.
                In other words, we are lifting the state up from the child component to the parent component.or
                The child passes the new value upward to the parent — this is a classic case of "lifting state up" in React.*/}
        </div>
    );
}