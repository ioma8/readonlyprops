import './App.css';
import { MyComponent } from './ApproachOne';

function App() {
  return (
    <div className="App">
      My React App
      <MyComponent name="Alice" age={30} hobbies={["reading", "swimming"]} />
    </div>
  );
}

export default App;
