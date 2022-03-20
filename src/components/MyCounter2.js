import React, { useReducer } from 'react';

const initialState = {
    firstCounter: 0,
    secondCounter: 0
}

const reducer = (state, action) => {
    switch (action.type) {
        case 'increment1':
            return {
                ...state,
                firstCounter: state.firstCounter + action.payload
            }
        case 'decrement1':
            return {
                ...state,
                firstCounter: state.firstCounter - action.payload
            }
        case 'reset1':
            return {
                ...state,
                firstCounter: initialState.firstCounter
            }
        case 'increment2':
            return {
                ...state,
                secondCounter: state.secondCounter + action.payload
            }
        case 'decrement2':
            return {
                ...state,
                secondCounter: state.secondCounter - action.payload
            }
        case 'reset2':
            return {
                ...state,
                secondCounter: initialState.secondCounter
            }
            default: 
            return state;
            
    }
    return state;
}

function MyCounter2() {

   const[state,dispatch]= useReducer(reducer,initialState)
    return <div>
        <p>FirstCounter:{state.firstCounter}</p>
        <button onClick={()=>{dispatch({type:'increment1',payload:100})}}>Increment</button>
        <button onClick={()=>{dispatch({type:'decrement1',payload:30})}}>Decrement</button>
        <button onClick={()=>{dispatch({type:'reset1'})}}>Reset</button>
        <hr/>
        <p>SecondCouter:{state.secondCounter}</p>
        <button onClick={()=>{dispatch({type:'increment2',payload:100})}}>Increment</button>
        <button onClick={()=>{dispatch({type:'decrement2',payload:30})}}>Decrement</button>
        <button onClick={()=>{dispatch({type:'reset2'})}}>Reset</button>

    </div>;
}

export default MyCounter2;
