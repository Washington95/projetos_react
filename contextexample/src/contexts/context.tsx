import { createContext, useReducer} from "react";
import { UserType, userReducer, userI } from "../reducers/userReducer";
import { reducerActionType } from "../types/reducerActionTypes";

type userIniType = {
    user: UserType;
}

type ContextType = {
    state: userIniType;
    dispatch: React.Dispatch<any>
}

const userIni = {
    user: userI
}

export const Context = createContext<ContextType>({
    state: userIni,
    dispatch: () => null
});

const mainReducer = (state: userIniType, action: reducerActionType) =>({
    user: userReducer(state.user, action)
})

export const ContextProvider: React.FC = ({ children }) => {
    const [state, dispatch] = useReducer(mainReducer,userIni)

    return(
        <Context.Provider value={{state, dispatch}}>
            {children}
        </Context.Provider>
    )
}
