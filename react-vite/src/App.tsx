import { useReducer } from "react";

type reducerState ={
  c: number
}

type reducerAction = {
  type: string;
}



const initial = { c :0};

const reducer =(state: reducerState, action: reducerAction) => {
  switch(action.type) {
    case 'ADD':
      return {...state, c: state.c + 1}
    break;
    case 'DEL':
      if (state.c > 0){
        return {...state, c: state.c - 1}
      }
    break;
    case 'RESET':
      return initial;
    break;
  }

  return state;
}


const App = () => {
  const [state, dispatch] = useReducer (reducer, initial);
  return(
    <div className="p-5">
      Contagem : {state.c}
      <hr />
      <button className="p-3" onClick={()=>dispatch({type: 'ADD'})}>Adicionar</button>
      <button className="p-3" onClick={()=>dispatch({type: 'DEL'})}>Remover</button>
      <button className="p-3" onClick={()=>dispatch({type: 'RESET'})}>Resetar</button>
    </div>
  );
}

export default App;