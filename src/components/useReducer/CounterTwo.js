//step1: import reducer
import React, {useReducer} from 'react'

//step3:set initialstate to 0 which is an object enalbe to attrack multiple counters
const initialState = {
    firstCounter: 0,
    secondCounter: 10
}
//step3: the reducer function accpets the current state and an anction and returns
//the new state depdending on the action. By using action as an object, we can pass
// additional data to the reducer function
const reducer = (state, action) =>{
    switch(action.type){
        case 'increment':
            // because the object has two properties and we are only changing one at a time 
            // so we need to merge the state properties by using spread operator
             return { ...state, firstCounter: state.firstCounter + action.value}
        case 'decrement':
             return {...state, firstCounter: state.firstCounter - action.value}
        case 'increment2':
             return {...state, secondCounter: state.secondCounter + action.value}
        case 'decrement2':
             return {...state, secondCounter: state.secondCounter - action.value}
        case 'reset':
             return initialState
        default: 
            return state
    }
}

//THIS IS THE EXAMPLE OF USING USEREDUCER WITH COMPLEX STATE & ACTION
function CounterTwo() {
    //step2:call useReducer(the right part of the = ), passing in reducer and initalstate
    //step4: a cll to useReducer returns a pair of values(the current value of the state
    // and a dispatch method which is capable to excute the code specified in the render function)
    const[count, dispatch] = useReducer(reducer, initialState)
    return (
        <div>
            <div>First Counter - {count.firstCounter}</div>
            <div>Second Counter - {count.secondCounter}</div>
            {/* step 5: use the dispatch method  */}
            <button onClick = {()=>dispatch({type: 'increment', value: 1 })}>Increment</button>
            <button onClick = {()=>dispatch({type:'decrement',value: 1})}>Decrement</button>
            <button onClick = {()=>dispatch({type: 'increment', value: 5 })}>Increment 5 </button>
            <button onClick = {()=>dispatch({type:'decrement',value: 5})}>Decrement 5</button>
            <button onClick = {()=>dispatch({type: 'increment2', value: 1 })}>Increment Counter2</button>
            <button onClick = {()=>dispatch({type:'decrement2',value: 1})}>Decrement Counter2</button>
            <button onClick = {()=>dispatch({type: 'reset'})}>Reset</button>
        </div>
    )
}

export default CounterTwo
