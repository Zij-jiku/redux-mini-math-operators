import { createSlice } from '@reduxjs/toolkit'

export const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    value: 0,
  },
  reducers: {
    increment: (state) => {
      state.value += 1
    },
    decrement: (state) => {
        if(state.value > 0) {
            state.value -= 1
        }
    }, 
    multiple: (state) => {
        if(state.value > 0) {
            state.value *= 2 
        }
    },
    divide: (state) => {
        if(state.value > 0){
            state.value /= 2
        }
    }
  },
})
export const { increment , decrement , multiple , divide} = counterSlice.actions

export default counterSlice.reducer