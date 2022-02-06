import React, { useState } from "react"

const App = () =>{

  const [name, troca] = useState('');

  const pegar = (e: React.ChangeEvent<HTMLInputElement>) =>{
    troca(e?.target.value)
  }


  return(
    <div>
     nome:
     <input type="text" value={name} onChange={pegar} />
     <hr />
     seu nome é: {name}
    </div>
    
  )
}
export default App;