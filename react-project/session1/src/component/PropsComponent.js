export default function GreetingByName(props) {
    console.log(props.name);
    return (
        <div>
            <h1>Props Component</h1>
            <p> hello {props.name} {props.prenom} </p>
        </div>
    );
}