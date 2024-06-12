import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import TodoList from './components/ToDoListComponent/todoList';

function App() {
  return (
    <div className="App">
     
       <BrowserRouter>
       <Routes>
       <Route path="todo" Component={TodoList}/>
       </Routes>
       </BrowserRouter>
    
    </div>
  );
}

export default App;
