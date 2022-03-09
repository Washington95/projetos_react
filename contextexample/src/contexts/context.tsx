import { createContext, useReducer} from "react";
import { UserType, userReducer, userI } from "../reducers/userReducer";
import { themeType, themeReducer, themeI } from "../reducers/themeReducers";
import { reducerActionType } from "../types/reducerActionTypes";

type iniType = {
    user: UserType;
    theme:themeType
}

type ContextType = {
    state: iniType;
    dispatch: React.Dispatch<any>
}

const iState = {
    user: userI,
    theme: themeI
}

export const Context = createContext<ContextType>({
    state: iState,
    dispatch: () => null
});

const mainReducer = (state: iniType, action: reducerActionType) =>({
    user: userReducer(state.user, action),
    theme: themeReducer(state.theme, action)
})

export const ContextProvider: React.FC = ({ children }) => {
    const [state, dispatch] = useReducer(mainReducer,iState)

    return(
        <Context.Provider value={{state, dispatch}}>
            {children}
        </Context.Provider>
    )
}
