import { useState } from "react";
import { Movie } from "./types/Movie";


const App = () =>{
  const [movies, setmovies] = useState<Movie[]>([]);
 
  const carregar = () =>{
    fetch('https://api.b7web.com.br/cinema/')
      .then((response) =>{
        return response.json();
      })
      .then((json)=>{
        setmovies(json);
      });
      
  }

  return(
    <div>
      <div className="grid justify-items-center">
        <button className="block bg-blue-400 p-2 rounded " onClick={carregar}>Carregar Filmes</button> <br />
      </div>
        

      <p className="text-center mb-2">Total de filmes : {movies.length} </p> 
      <div className="grid grid-cols-4 gap-3 ml-3">
        {movies.map((item, index) => (
          <div key={index}>
            <img src={item.avatar} className="w-28 block " alt="Capa" />
            {item.titulo}
          </div>
        ))}
      </div>
    </div>
      
  );
}
export default App;