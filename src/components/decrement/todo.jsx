import { useState } from "react"
import { useDispatch, useSelector } from "react-redux";
import { addTodo, deleteTodo } from "./todoSlice";

export default function Todo() {
    const [input, setInput] = useState("");
    const dispatch = useDispatch();
    function handleSubmit() {
        dispatch(addTodo(input));
        setInput("");
    }
    
    const todoData = useSelector(state => state.todo.todos);
    return (
        <>
            <input type="text" value={input} onChange={(e) => setInput(e.target.value)} />
            <button onClick={handleSubmit}>Add TODO</button>
            {todoData.map(item => <TodoItems key={item.id} id={item.id} item={item} />)}
        </>
    )
}

function TodoItems({ item,id }) {
    const dispatch = useDispatch();
    function handleDelete(){
        dispatch(deleteTodo(id))
    }
    return (
        <li key={item.id}>
            <span>Todo: {item.todo} </span>
            <span onClick={handleDelete} style={{cursor: "pointer"}}>❌</span>
        </li>
    )
}