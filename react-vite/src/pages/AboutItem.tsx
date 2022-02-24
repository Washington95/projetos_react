import { Link } from "react-router-dom"
import { useParams } from "react-router-dom"

export const AboutItem = () => {
    const p = useParams();

    return(
        <div>
            Página Sobre {p.slug?.toLocaleUpperCase()} {p.slug?.length} Letras
            <hr />
            <Link to="/sobre">Voltar</Link> <br />
            <Link to="/">Inicio</Link>
        </div>
    )
}