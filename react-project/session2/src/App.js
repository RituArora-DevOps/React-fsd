import './App.css';
// import FruitList from './components/FruitList';
// import Greeting from './components/Greeting';
// import StudentList from './components/StudentList';
// import Counter from './components/Counter';
// import {ClickExample, InputExample} from './components/Events';
import ShowHide from './components/ShowHide';

function App() {
  //console.log("App component loaded");

  // const students = [
  //   {id: 1, name: "Elena", grade: "A", img: "https://randomuser.me/api/portraits/women/44.jpg"},
  //   {id: 2, name: "John", grade: "B", img: "https://randomuser.me/api/portraits/men/44.jpg"},
  //   {id: 3, name: "Jane", grade: "C", img: "https://randomuser.me/api/portraits/women/45.jpg"},
  // ]

  // loop through the list and show each name and each grade in the ul
  // use student id as the key
  return (
    <div>
      {/* <div>
        <FruitList list={["apple", "banana", "cherry"]}/>
      </div>
      <div>
          <StudentList list={students}/>
      </div>
      <div>
        <Greeting isLoggedIn={true} hasUnread={true} isAdmin={true}/>   
      </div>
      <div>
        <Counter/>
      </div> 
      <div>
        <ClickExample/>
      </div>
      <div>
        <InputExample/>
      </div> */}
      <div>
        <ShowHide/>
      </div>
    </div>
  );
}

export default App;
