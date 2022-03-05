import { createContext } from "react";

type ContextType = {
    name: string;
    age: number;
}

const Is = {
    name: 'Luiz',
    age: 25
}

export const Context = createContext<ContextType>(Is);

export const ContextProvider: React.FC = ({children}) =>{
    return(
        <Context.Provider value={Is}>
            {children}
        </Context.Provider>
    )
}