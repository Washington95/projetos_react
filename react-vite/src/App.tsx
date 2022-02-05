import { useState } from "react"

const App = () =>{

  const [name, troca] = useState('Washington');


  const clicou = () =>{
    troca('Luiz');
  }

  return(
    <div>
      meu nome é {name}
     <button onClick={clicou}>Clique aqui</button>

    </div>
    
  )
}
export default App;