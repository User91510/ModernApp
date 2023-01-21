import './App.css';
import Todos from './Components/Todos';
import Todo from './models/todo';

function App() {

  const todos = [new Todo('Learn C#'), new Todo('Learn Python')];

  return (
    <div>
      < Todos items={todos}/>
    </div>
  );
}

export default App;
