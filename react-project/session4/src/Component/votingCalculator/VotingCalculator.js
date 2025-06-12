import { useState } from "react";
import VotingButton from "./VotingButton";
export default function VotingCalculator() {
    const [total, setTotal] = useState(0);

    const handler = () => {
        setTotal(total + 1);
    }
    return (
        
        <div>
            <h1>Total values of votes: {total}</h1>
            <VotingButton label="Vote 1" calcVote={handler}/  >
            <VotingButton label="Vote 2" calcVote={handler}/  >
        </div>
    );
}