import { Link } from "react-router-dom"
import { useContext } from "react"
import { Context } from "../contexts/context"

export const SingUp = () => {
    const {name, age} = useContext(Context);

    return(
        <div>
            Página de Cadastro do {name} que tem {age} anos
            <br />
            <Link to="/exibir">Ir para ShowData</Link>

        </div>
    )
}