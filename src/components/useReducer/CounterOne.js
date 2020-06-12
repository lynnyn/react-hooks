//step1: import reducer
import React, {useReducer} from 'react'

//step3:set initialstate to 0 which is the count value
const initialState = 0
//step3: the reducer function accpets the current state and an anction and returns
//the new state depdending on the action
const reducer = (state, action) =>{
    switch(action){
        case 'increment': return state +1 
        case 'decrement': return state -1
        case 'reset': return 0
        default: return state
    }
}

//THIS IS THE EXAMPLE OF USING USEREDUCER WITH SIMPLE STATE & ACTION
function CounterOne() {
    //step2:call useReducer(the right part of the = ), passing in reducer and initalstate
    //step4: a cll to useReducer returns a pair of values(the current value of the state
    // and a dispatch method which is capable to excute the code specified in the render function)
    const[count, dispatch] = useReducer(reducer, initialState)
    return (
        <div>
            <div>Count - {count}</div>
            {/* step 5: use the dispatch method  */}
            <button onClick = {()=>dispatch('increment')}>Increment</button>
            <button onClick = {()=>dispatch('decrement')}>Decrement</button>
            <button onClick = {()=>dispatch('reset')}>Reset</button>
        </div>
    )
}

export default CounterOne
