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
  

export const useContagem = () => {
    return useReducer(reducer, initial);

}