import { useNavigate } from 'react-router-dom'

const Contact = () => {
    const navigate = useNavigate();
    return (
        <div>
        <form>
            <label>Email:  </label>
            <input readOnly value="G6A4o@example.com" />
        </form>
        <button onClick={() => navigate("/")}>Go to home page</button>
        <button onClick={() => navigate("/About")}>About page</button> 
        </div>
    );
};

export default Contact;
