import { Link } from "react-router-dom"
import { useContext } from "react"
import { Context } from "../contexts/context"

export const SingUp = () => {
    const {state, dispatch} = useContext(Context);

    const troca = () => {
        dispatch({
            type: 'CHANGE_NAME',
            payload: {
                name: 'Luiz'
            }
        })
    }

    return(
        <div>
            Página de Cadastro do {state.user.name} que tem {state.user.age} anos
            <br />
            <button onClick={troca}> Mudar nome para luiz </button>
            <Link to="/exibir">Ir para ShowData</Link>

        </div>
    )
}