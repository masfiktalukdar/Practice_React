import { createSlice } from "@reduxjs/toolkit";

const initialTodo = {
    todos: []
};

const todoSlice = createSlice({
    name: "todo",
    initialState: initialTodo,
    reducers: {
        addTodo: (state, action)=>{
            if(!action.payload || !action.payload.trim()) return;
            state.todos = [
                ...state.todos,
                {id: Date.now(),todo: action.payload}
            ]
        },
        deleteTodo: (state, action)=> {
            // console.log(state)
            state.todos = state.todos.filter(todo => todo.id !== action.payload)
        }
    }
});

export default todoSlice.reducer;
export const {addTodo, deleteTodo} = todoSlice.actions;