import { createSlice } from "@reduxjs/toolkit";

const initialState = [
    {
        id: 1,
        title: "Mengerjakan exercise",
        completed: true
    },
    {
        id: 2,
        title: "Mengerjakan assignment",
        completed: false
    },
]

export const todosSlice = createSlice({
    name: "todos",
    initialState,
    reducers: {
        addTodo: (state, actions) => {
            const data = actions.payload
            const newData = {
                id: (state.length !== 0) ? (state[state.length - 1].id + 1) : 0,
                ...data
            }
            state.push(newData)
        },

        deleteTodo: (state, actions) => {
            const index = actions.payload
            state.splice(index, 1)
        },

        checkTodo: (state, actions) => {
            const index = actions.payload
            state[index].completed = !state[index].completed
        }
    }
})

export const { addTodo, deleteTodo, checkTodo } = todosSlice.actions
export default todosSlice.reducer