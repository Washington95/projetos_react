import { Link } from "react-router-dom"

export const Home = () =>{
    return(
        <div>
            Página Home 
            <hr />

            <Link to="/sobre">Sobre Nós</Link>
        </div>
    )
}