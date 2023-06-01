import axios from "axios";

const getAllToDos = (setToDo) => {
    axios.get("https://to-do-list-1g2t.onrender.com")
    .then(({data}) => {console.log(data)
        setToDo(data);
    })
}

const addToDo = (title, setTitle, setToDo) => {
    axios.post("https://to-do-list-1g2t.onrender.com/saveToDo", { title })
    .then((data) => {
        console.log(data)
        setTitle("")
        getAllToDos(setToDo)
    })
}

const editToDo = (toDoId, title, setToDo, setTitle, setEditing) => {
    axios.put("https://to-do-list-1g2t.onrender.com/editToDo", { _id: toDoId, title })
    .then((data) => {
        console.log(data)
        setTitle("")
        setEditing(false)
        getAllToDos(setToDo)
    })
}

const deleteToDo = (_id, setToDo) =>{
    axios.post("https://to-do-list-1g2t.onrender.com/deleteToDo", { _id })
    .then((data) => {
        console.log(data)
        getAllToDos(setToDo)
    })
}

export { getAllToDos, addToDo, editToDo, deleteToDo };