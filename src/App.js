import React, {useReducer}from 'react';
import './App.css';
import ClassCounter from './components/useState/ClassCounter';
import HookCounter from './components/useState/HookCounter';
import HookCounterTwo from './components/useState/HookCounterTwo';
import HookCounterThree from './components/useState/HookCounterThree';
import HookCounterFour from './components/useState/HookCounterFour';
import ClassCounterOne from './components/useEffect/ClassCounterOne';
import HookCounterOne from './components/useEffect/HookCounterOne';
import ClassMouse from './components/useEffect/ClassMouse';
import HookMouse from './components/useEffect/HookMouse';
import MouseContainer from './components/useState/MouseContainer';
import IntervalClassCounter from './components/useEffect/IntervalClassCounter';
import IntervalHookCounter from './components/useEffect/IntervalHookCounter';
import DataFetching from './components/useEffect/DataFetching';
// import ComponentC from './components/ContextHook/ComponentC';
import CounterOne from './components/useReducer/CounterOne';
import CounterTwo from './components/useReducer/CounterTwo';
import CounterThree from './components/useReducer/CounterThree';

import ComponentC from './components/useReducerWithContext/ComponentC';
import ComponentA from './components/useReducerWithContext/ComponentA';
import ComponentB from './components/useReducerWithContext/ComponentB';
import DataFetchingOne from './components/useReducer/DataFetchingOne';
import DataFetchingTwo from './components/useReducer/DataFetchingTwo';


// Belongs to useContext
//step 1: create a context by using React.createContext()
// export const UserContext = React.createContext()
// export const ChannelContext = React.createContext()


//Belongs to useReducer with useContext
const initialState = 0
const reducer = (state, action) => {
	switch (action) {
		case 'increment':
			return state + 1
		case 'decrement':
			return state - 1
		case 'reset':
			return initialState
		default:
			return state
	}
}

export const CountContext = React.createContext()


function App() {
  {/* useReducer with useContext */}
  const [count, dispatch] = useReducer(reducer, initialState)

    {/* <div className="App">  */}
      {/* <ClassCounter /> */}
      {/* <HookCounter /> */}
      {/* <HookCounterTwo /> */}
      {/* <HookCounterThree /> */}
      {/* <HookCounterFour /> */}
      {/* <ClassCounterOne /> */}
      {/* <HookCounterOne /> */}
      {/* <ClassMouse /> */}
      {/* <HookMouse /> */}
      {/* <MouseContainer /> */}
      {/* <IntervalClassCounter /> */}
      {/* <IntervalHookCounter /> */}
      {/* <DataFetching /> */}

      {/* CONTEXT */}
      {/* step 2: create context value at a high level in the component tree */}
      {/* <UserContext.Provider value = {'lynn'}>
        <ChannelContext.Provider value = {'testtt'}>
          <ComponentC />
        </ChannelContext.Provider>        
      </UserContext.Provider> */}

      {/* REDUCER */}
      {/* <CounterOne /> */}
      {/* <CounterTwo /> */}
      {/* <CounterThree /> */}

      {/* useReducer with useContext */}
    // return (
      {/* <CountContext.Provider
            value={{ countState: count, countDispatch: dispatch }}
          >
        <div calssName = "App">
          {count}
          <ComponentA />
          <ComponentB />
          <ComponentC />
        </div>
      </CountContext.Provider> */}
      return(
      <div className = "App">
        {/* <DataFetchingOne /> */}
        <DataFetchingTwo />
      </div>

  )
}

export default App;

