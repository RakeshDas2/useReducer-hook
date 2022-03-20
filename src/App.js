import logo from './logo.svg';
import './App.css';
import { useReducer } from 'react';
import MyCounter1 from './components/MyCounter1';
import MyCounter2 from './components/MyCounter2';
import PostList from './components/PostList';
import CountContext, { CountProvider } from './components/context-api/CountContext';
import ComponentA from './components/ComponentA';


const initialState=0;
const reducer=(state,action)=>{
  console.log('state',state);
  console.log('action',action);

  if(action==='increment'){
    return state+10
  }else if(action ==='decrement'){
    return state-10
  }else if(action==='reset'){
    return initialState;
  }
  return state

}
function App() {
  const[state,dispatch]=useReducer(reducer,initialState)
  return (
    <CountProvider value={{
      value:state,
      dispatch:dispatch
    }}>
    <div className="App">
     <p>State: {state}</p>
     <button onClick={()=>dispatch('increment')}>Increment</button>
     <button onClick={()=>dispatch('decrement')}>Decrement</button>
     <button onClick={()=>dispatch('reset')}>Reset</button>
     <hr/>
     {/* <MyCounter1/>
     <hr/>
     <MyCounter2/> */}
     {/* <PostList/> */}
     <ComponentA/>
    </div>
    
    </CountProvider>
  );
}

export default App;
