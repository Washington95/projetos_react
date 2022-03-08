import { Link } from "react-router-dom"
import { useContext } from "react"
import { Context } from "../contexts/context"

export const ShowData = () => {
    const {state, dispatch} = useContext(Context)

    return(
        <div>
            Tela ShowData {state.user.name}
            <br />
            <Link to="/">Ir para SingUp</Link>
        </div>
    )
}