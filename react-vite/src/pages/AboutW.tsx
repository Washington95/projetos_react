import { Link } from "react-router-dom"

export const AboutW = () => {
    return(
        <div>
            Sobre Washington !

            <hr />
            <Link to="/sobre">Voltar</Link> <br />
            <Link to="/">Inicio</Link>
        </div>
    )
}