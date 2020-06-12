import React, {useReducer} from 'react'

const initialState = 0
const reducer = (state, action) =>{
    switch(action){
        case 'increment': return state +1 
        case 'decrement': return state -1
        case 'reset': return 0
        default: return state
    }
}

//EXAMPLE3: when dealing with variables that have the same state transitions
// it is a good idea to have multiple use reducers making use the same recuder function
function CounterThree() {
    const[count, dispatch] = useReducer(reducer, initialState)
    const[countTwo,dispatchTwo] = useReducer(reducer,initialState)
    return (
        <div>
            <div>Count - {count}</div>
            <button onClick = {()=>dispatch('increment')}>Increment</button>
            <button onClick = {()=>dispatch('decrement')}>Decrement</button>
            <button onClick = {()=>dispatch('reset')}>Reset</button>
            <div>
                <div>Count - {countTwo}</div>
                <button onClick = {()=>dispatchTwo('increment')}>Increment</button>
                <button onClick = {()=>dispatchTwo('decrement')}>Decrement</button>
                <button onClick = {()=>dispatchTwo('reset')}>Reset</button>
            </div>
        </div>
    )
}

export default CounterThree
