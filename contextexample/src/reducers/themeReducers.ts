import { reducerActionType } from "../types/reducerActionTypes";

export type themeType = {
    status: 'dark' | 'light';
}

export const themeI : themeType = {
    status: 'light'
}

export const themeReducer = (state: themeType, action: reducerActionType) => {
    switch(action.type) {
        case 'CHANGE_STATUS':
            return {...state, status: action.payload.status};
        
    }

    return state;
}