// having a component to accept a list of fruits
// and display them
export default function FruitList(props) {
    const fruits = props.list;
    //console.log(fruits);
    return <ul>
        {fruits.map((fruit, index) => <li key={index}>{fruit}</li>)}
    </ul>
}