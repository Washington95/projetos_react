import { reducerActionType } from "../types/reducerActionTypes";

export type UserType = {
    name: string;
    age: number;
}

export const userI : UserType = {
    name: 'Washington',
    age: 26
}

export const userReducer = (state: UserType, action: reducerActionType) => {
    switch(action.type) {
        case 'CHANGE_NAME':
            return {...state, name: action.payload.name};
        break;
        case 'AGE_NAME':
            return {...state, age: action.payload.age};
        break;
    }

    return state;
}