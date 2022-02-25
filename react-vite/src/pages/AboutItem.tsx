import { useParams, useNavigate } from "react-router-dom"

export const AboutItem = () => {
    const p = useParams();
    const n = useNavigate();

    const ant = () => {
        n(-1);
    }

    const ini = () => {
        n('/')
    }

    return(
        <div>
            Página Sobre {p.slug?.toLocaleUpperCase()} {p.slug?.length} Letras
            <hr />
            <button onClick={ant}>Voltar</button> <br />
            <button onClick={ini}>Inicio</button>
            
        </div>
    )
}