import { Link } from "react-router-dom"
import { useContext } from "react"
import { Context } from "../contexts/context"

export const ShowData = () => {
    const {name} = useContext(Context)

    return(
        <div>
            Tela ShowData {name}
            <br />
            <Link to="/">Ir para SingUp</Link>
        </div>
    )
}