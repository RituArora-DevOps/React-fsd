function Greeting() {
        const firstName = "Ritu"; // string
        const lastName = "Arora"; // string
        const age = 18; // number
        const isStudent = true; // boolean

        // expression in JSX
        const a = 5;
        const b = 6;
        const user = { username: "elena", city: "NY" };
        const isLucky = Math.random() > 0.5;
        const config = { color: "red", border: "1px solid black" };

        return (
        <div>  
            <h1>Hello {firstName} {lastName}</h1>
            <p>Age : {age}</p>
            <p>Is Student : {isStudent ? "Yes" : "No"}</p>
            <p>Sum : {a + b}</p>
            <p>Username : {user.username} lives in {user.city}
                {JSON.stringify(user)}
            </p>
            <p>
                Is Lucky : {isLucky ? "Yes" : "No"}
            </p>
            <input 
                id="number-input" 
                type="number" 
                min={4} 
                style={config}
            />
        </div>
    );
    }
    
    export default Greeting;