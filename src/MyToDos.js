import { AiOutlineEdit, AiOutlineDelete } from "react-icons/ai"

export const MyToDos = ({ text, updatingInInput, deleteToDo}) => {
    return (
        <div className="task-container">
            <p>{ text }</p>
            <AiOutlineEdit className="button-modify" onClick={updatingInInput}></AiOutlineEdit>
            <AiOutlineDelete className="button-modify" onClick={deleteToDo}></AiOutlineDelete>
        </div>
    )
}