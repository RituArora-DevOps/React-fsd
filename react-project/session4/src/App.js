import './App.css';
import Calculator from './Component/temperature/Calculator';
import CounterSync from './Component/CounterSync';
import LightToggle from './Component/lightToggle/LightToogle';
import VotingCalculator from './Component/votingCalculator/VotingCalculator';

function App() {
  return (
    <div>
      <Calculator/>
      <CounterSync/>
      <LightToggle/>
      <VotingCalculator/>
    </div>
  );
}

export default App;
