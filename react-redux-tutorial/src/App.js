import logo from './logo.svg';
import Counter from './components/Counter'
import './App.css';
import Todos from "./components/Todos";

function App() {
  return (
    <div>
      <Counter number={0}/>
      <hr/>
      <Todos />
    </div>
  );
}

export default App;
