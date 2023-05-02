import { createSlice } from '@reduxjs/toolkit'


//초기값 넣어주기
const initialState = {
    todos:[
        {id:'', title:'',contents:'', isDone:false}
    ]
}

// reducer 영역
const todoSlice = createSlice({
    name: 'todos',
    initialState,
    reducers:{
        addTodo : (state, action) => {
            console.log(action.payload)
            return {...state, todos:[...state.todos, action.payload]}
            
        }
    }
})

export const { addTodo } = todoSlice.actions;
export default todoSlice.reducer;