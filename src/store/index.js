import { configureStore } from "@reduxjs/toolkit";
import todoSlice from "./Todos"

const store = configureStore({
    reducer: {
        todos: todoSlice
    }
})

export default store