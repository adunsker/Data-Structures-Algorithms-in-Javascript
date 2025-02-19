const slice = createSlice({
    initialState: {
        value: 0
    },
    name: "Test",
    reducers: {
        increment: (state, action) => {
            state.value += action.payload
        }
    }
})

const store = createStore({
    reducer: slice.reducers
})

export const { increment } = slice.actions

store.dispatch(increment(2))

// React
import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { increment } from './redux/increment'

const component = () => {
    const selector = useSelector(state => state.value)

    const dispatch = useDispatch()

    const handleClick = () => {
        dispatch(increment(2))
    }

    return (
        <div>
            <h1>{selector}</h1>
            <button onClick={handleClick}>Increment</button>
        </div>
    )
}