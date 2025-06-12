export default function IncrementButton({ label,onClick }) {
    return (
        <button onClick={onClick}>{label}</button>
    );
}