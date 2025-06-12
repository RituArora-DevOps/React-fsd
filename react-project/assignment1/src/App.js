import './App.css';
import TechCard from './component/Card';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="d-flex flex-wrap justify-content-center gap-3">
      <TechCard 
        img="/assets/alexa.png" 
        title="Alexa" 
        text={
          <>
            @alexa99 <br /> Alexa was created by Amazon
          </>
          }/>
      <TechCard   
        img="/assets/cortana.png" 
        title="Cortona" 
        text={
          <>
          @Cortona32 <br /> Cortona was created by Microsoft
          </>
          }/>
      <TechCard 
        img="/assets/siri.png "  
        title="Siri" 
        text={
          <>
          @Siri <br /> Siri was created by Apple
          </>
        }/>
    </div>
  );
}

export default App;

