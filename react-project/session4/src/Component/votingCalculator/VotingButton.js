export default VotingButton({label, calcVote}) {
    return (
        <button onClick={calcVote}>{label}</button>
    );
}