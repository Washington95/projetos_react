import { Link, useSearchParams } from "react-router-dom"

export const About = () => {
    const [search, newsearch] = useSearchParams()

    const org = (order: 'asc' | 'desc')  => {
        search.set('order', order);
        newsearch(search)
    }
    return(
        <div>
            Filtro: {search.get('filter')} <br />
            Ordem: {search.get('order')}
            <hr />
            <button onClick={()=>org('asc')}>Asc</button>
            <button onClick={()=>org('desc')}>Desc</button>
            <hr />
            Página Sobre: 
            <ul>
                <li><Link to="/sobre/w"> W </Link></li>
                <li><Link to="/sobre/luiz"> Luiz </Link></li>
                <li><Link to="/sobre/moreira"> Moreira </Link></li>
                <li><Link to="/sobre/ozrio"> Ozorio </Link></li>
                <hr />
            </ul>
            
        </div>
    )
}