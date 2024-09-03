import React from 'react'
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchTodos = createAsyncThunk('fetchTodos', async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/todos");
    return response.json();
});
const todoSlice = createSlice({
    name:"todo",
    initialState:{
        isLoading:false,
        data:null,
        isError:false,
    },
    extraReducers:(builder) => {
        builder.addCase(fetchTodos.pending, (state,action)=>{
            state.isLoading = true;
        })
        builder.addCase(fetchTodos.fulfilled,(state,action) => {
            state.isLoading = false;
            state.data = action.payload;
        }),
        builder.addCase(fetchTodos.rejected,(state,action)=>{
            console.log("Error", action.payload);
            state.isError = true;
        })

    }
})
export default todoSlice.reducer;
// redux-thunk -> middleware (used for delayed task )


// ChatGpt 
// import React from 'react';
// import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// // Action 
// export const fetchTodos = createAsyncThunk('todos/fetchTodos', async () => {
//     const response = await fetch("https://jsonplaceholder.typicode.com/todos");
//     if (!response.ok) {
//         throw new Error('Network response was not ok');
//     }
//     return response.json();
// });

// // Slice for managing todo state
// const todoSlice = createSlice({
//     name: "todo",
//     initialState: {
//         isLoading: false,
//         data: [],
//         isError: false,
//         errorMessage: null,
//     },
//     extraReducers: (builder) => {
//         builder
//             .addCase(fetchTodos.pending, (state) => {
//                 state.isLoading = true;
//                 state.isError = false;
//                 state.errorMessage = null;
//             })
//             .addCase(fetchTodos.fulfilled, (state, action) => {
//                 state.isLoading = false;
//                 state.data = action.payload;
//             })
//             .addCase(fetchTodos.rejected, (state, action) => {
//                 state.isLoading = false;
//                 state.isError = true;
//                 state.errorMessage = action.error.message;
//             });
//     }
// });

// export default todoSlice.reducer;
