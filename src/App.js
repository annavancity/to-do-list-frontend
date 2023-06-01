import './App.css';
import { useEffect, useState } from 'react';
import { MyToDos } from './MyToDos';
import { getAllToDos, addToDo, editToDo, deleteToDo } from './FetchToDos';


function App() {


  const [myToDo, setToDo] = useState([]);
  const [title, setTitle] = useState("");
  const [editing, setEditing] = useState(false);
  const [toDoId, setToDoId] = useState("");

  useEffect(() => {
    getAllToDos(setToDo)
  }, [])

  const updatingInInput = (_id, title) => {
    setEditing(true)
    setTitle(title)
    setToDoId(_id)
  }

  return (
    <div className='container'>
      <div className='header'>
        <h1>
          <span class="title-word title-word-1">What's</span>
          <span class="title-word title-word-2"> on your</span>
          <span class="title-word title-word-3"> todo</span>
          <span class="title-word title-word-4"> list?</span>
        </h1>
      </div>
      <div className='input-container'>
        <input 
        type="text"
        placeholder="Add a task"
        value = {title}
        onChange={(e) => setTitle(e.target.value)}
        />
        <button 
        disabled={!title}
        onClick= 
        {editing ? () => editToDo(toDoId, title, setToDo, setTitle, setEditing) : () => addToDo(title, setTitle, setToDo)}>
        {editing ? "Edit" : "Add"}
        </button>
      </div>
      

      {myToDo.map((toDo) => < MyToDos text={toDo.title} key={toDo._id}
      updatingInInput={() => updatingInInput(toDo._id, toDo.title)}
      deleteToDo={() => deleteToDo(toDo._id, setToDo)} />)}
      
    </div>
    
  );
}

export default App;
