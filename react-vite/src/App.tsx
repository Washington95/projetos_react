import { useState } from "react"

const App = () =>{

  const [n, troca] = useState(0);


  const menos = () =>{
    troca(n - 1);
  }

  const mais = () =>{
    troca(n + 1)
  }

  return(
    <div>
     <button onClick={menos}>-</button>
     <div>{n}</div>
     <button onClick={mais}>+</button>

    </div>
    
  )
}
export default App;