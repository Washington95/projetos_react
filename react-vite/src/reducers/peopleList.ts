import { useReducer } from "react";
import {v4 as uuidv4 } from "uuid"

type Person = {
    id: string;
    name: string;

}

type Atype = {
    type: string;
    payload?: {
        name?: string;
        id?: string;
    }
}

const initial: Person[] = [];

const reducer = (state: Person [], action:Atype) =>{
    switch(action.type) {
        case 'ADD':
            if(action.payload?.name){
                state.push({
                    id: uuidv4(),
                    name: action.payload.name
                });
            }

        break;
        case 'DEL':
            if(action.payload?.id){
                state = state.filter( item => item.id !== action.payload?.id);

            }
            
        break;
        case 'ORD':
            state = state.sort((a, b) => (a.name > b.name) ? 1: -1);
        break;
    }
    return state;

}

export const usePeopleList = () => {
    
}