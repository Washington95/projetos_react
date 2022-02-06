import React, { useState } from "react"

type res = React.ChangeEvent<HTMLInputElement>

const App = () =>{

  const [name, troca] = useState('');
  const [sname, trocas] = useState('');
  const [id, trocai] = useState( '');

  const pegar = (e: res) =>{
    troca(e.target.value);
  }

  const pegars = (e: res) =>{
    trocas(e.target.value);
  }

  const pegari = (e: res) =>{
    trocai(e.target.value);
  }

  return(
    <div>
      <div>
        Name:
        <input type="text" value={name} onChange={pegar}/>
      </div>

      <div>
        Sobrenome:
        <input type="text" value={sname} onChange={pegars}/>
      </div>

      <div>
        Idade:
        <input type="text" value={id} onChange={pegari} />
      </div>

      <hr />

      Olá {`${name} ${sname}`}, tudo bom?<br />
      voce tem {id} anos.
      
    </div>
    
    
  )
}
export default App;