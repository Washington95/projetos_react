import { useState } from "react";
import { Botao } from "./components/Botao";
const App = () =>{

  const [cor, mcor] = useState ('yellow')

  const clicou = () => {
    mcor('white')
  }

  return(
    <div>
       <Botao />
    </div>
      
  );
}
export default App;