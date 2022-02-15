import { useState } from "react";


const App = () =>{
  const [movies, setmovies] = useState([]);
 
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
        <button onClick={carregar}>Carregar Filmes</button>

      Total de filmes : {movies.length}

    </div>
      
  );
}
export default App;