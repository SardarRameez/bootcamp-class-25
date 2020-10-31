
import './App.css';
import { Todo } from './components/Todo';
import mirageServer from './mirage/index'

mirageServer()
function App() {
  return (
    <div className="App">
      <Todo></Todo>
    </div>
  );
}

export default App;
