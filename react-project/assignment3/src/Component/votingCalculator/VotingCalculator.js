import IncrementButton from "./IncrementButton";
import { useState } from "react";


export default function VotingCalculator() {
    const [sharedVotes, setSharedVotes] = useState(0);

    const upvote = () => setSharedVotes(sharedVotes + 1);

    return (
        <div>
            <h1> Voting Calculator</h1>
            <h2> Shared votes: {sharedVotes}</h2>
            <IncrementButton label="Button 1" onClick={upvote} />
            <IncrementButton label="Button 2" onClick={upvote} />
        </div>
    );
}