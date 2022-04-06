import styles from "./style.module.css"

import { useSelector, useDispatch } from "react-redux"
import { deleteTodo, checkTodo } from "../../store/Todos"

const List = () => {
    const dispatch = useDispatch()
    const todos = useSelector((state) => state.todos)

    const handleDelete = (index) => {
        dispatch(deleteTodo(index))
    }

    const handleCheck = (index) => {
        dispatch(checkTodo(index))
    }

    return(
        <>
            {todos.map((todo, todoIdx) => (
                <div className={styles.container} key={todoIdx}>
                    <div>
                        <label style={{
                            textDecoration : todo.completed ? "line-through" : "none",
                            fontStyle: todo.completed ? "italic" : "normal",
                            color: todo.completed ? "gray" : "black"}}>
        
                            <input type="checkbox" 
                            onChange={() => handleCheck(todoIdx)} 
                            checked={todo.completed}/>
        
                            {todo.title}
                        </label>
                    </div>
                    <button onClick={() => handleDelete(todoIdx)}>Delete</button>
                </div>
            ))}
        </>
    )
}

export default List