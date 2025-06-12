import Welcome from "./component/Component1";
import { Header, Footer as FooterLayout} from "./component/Component2";
import Greeting from "./component/Greeting";
import Info, { Button } from "./component/Component3";
import GreetingByName from "./component/PropsComponent";
import StudentCard from "./component/StudentCard/StudentCard";
function App() {

  // JSX example

  // components
  return (
    <>
      {/* <div>
        <header >
          {message} 
        </header>
      </div> */}
      <Header />
      <Greeting /> 
      <Welcome />
      <Button />
      <Info />
      <GreetingByName name = "Ritu" prenom= "Arora"/>

      <GreetingByName message= "Hello World" />

      <StudentCard name = "Ritu" age = "18"/>
      <FooterLayout />
    </>
  );
}

export default App;
