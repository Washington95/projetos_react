import { useEffect, useState } from "react";


const App = () =>{
  const [name, set] = useState('Luiz');

  useEffect(() =>{
    alert('mudou');
  }, [name]);

  const mudar = () =>{
    set('Bom')
  }

  return(
    <div>
      nome: {name} <br />
      <button onClick={mudar}>Clique Aqui </button>
     

    </div>
    

      
  );
}
export default App;