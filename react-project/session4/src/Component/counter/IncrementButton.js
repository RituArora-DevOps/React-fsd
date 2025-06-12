export default function IncrementButton({ label, increment }) {
    return (
        <button onClick={increment}>{label}</button>
    );
}