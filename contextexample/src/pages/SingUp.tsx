import { Link } from "react-router-dom"
import React, { useContext } from "react"
import { Context } from "../contexts/context"

export const SingUp = () => {
    const {state, dispatch} = useContext(Context);
    

    const novon = (e: React.ChangeEvent<HTMLInputElement>) => {
        dispatch({
            type: 'CHANGE_NAME',
            payload: {
                name: e.target.value
            }
        });
    }

    const novai = (e: React.ChangeEvent<HTMLInputElement>) => {
        dispatch({
            type: 'CHANGE_AGE',
            payload: {
                age: parseInt(e.target.value) 
            }
        });
    }


    return(
        <div>
            <h3>Página de Cadastro </h3>
            <input type="text" placeholder="Digite um nome" value={state.user.name} onChange={novon} />
            <input type="text" placeholder="Digite uma idade" value={state.user.age} onChange={novai} />
           
            
            <Link to="/exibir">Ir para ShowData</Link>

        </div>
    )
}