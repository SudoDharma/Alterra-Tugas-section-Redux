import { useState } from "react"

import styles from "./style.module.css"

import { useDispatch } from "react-redux"
import { addTodo } from "../../store/Todos"

const Form = () => {
    const dispatch = useDispatch()

    const [inputs, setInputs] = useState({
        title: "",
        completed: false
    })
    
    const onChange = (e) => {
        const newInputs = {...inputs}
        newInputs[e.target.name] = e.target.value

        setInputs(newInputs)
    }
    
    const handleSubmit = (e) => {
        e.preventDefault();
        const inputsNotEmpty = inputs.title
    
        if(inputsNotEmpty){
            dispatch(addTodo(inputs))
            setInputs({
                title: "",
                completed: false
            })
        }
        else{
            alert("Inputan tidak boleh kosong");
        }
    }

    return(
        <div className={styles.container}>
            <form>
                <input type="text" placeholder="Add todo..." value={inputs.title} name="title" onChange={(e) => {onChange(e)}} />
                <button onClick={handleSubmit}>Submit</button>
            </form>
        </div>
    )
}

export default Form