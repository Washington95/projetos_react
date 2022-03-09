import { Link } from "react-router-dom"
import { useContext } from "react"
import { Context } from "../contexts/context"

export const ShowData = () => {
    const {state, dispatch} = useContext(Context)

    return(
        <div>
            <h3>Tela showData</h3>
            {state.user.name &&
                <>
                Meu nome é: {state.user.name} <br />
                Tenho {state.user.age} Anos <br />
                </>
            }      
            {!state.user.name && 'Não ha informações'}
            <Link to="/">Ir para SingUp</Link>
        </div>
    )
}