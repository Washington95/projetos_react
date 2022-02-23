import { Link } from "react-router-dom"

export const About = () => {
    return(
        <div>
            Página Sobre: 
            <ul>
                <li><Link to="/sobre/w">Sobre Washington</Link> </li>
                <li><Link to="/sobre/l">Sobre Luiz</Link></li>
                <hr />
            </ul>
            <Link to="/">Inicio</Link>
        </div>
    )
}