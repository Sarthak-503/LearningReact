import React from 'react'
import { configureStore } from '@reduxjs/toolkit';
import todoReducer from './slices/Todo';
export const store = configureStore({
    reducer:{
        todo:todoReducer,
    }
})

