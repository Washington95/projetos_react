import { ChangeEvent, useEffect, useState } from "react";


const App = () =>{
  const [name, set] = useState('');
  const [sname, sets] = useState ('');
  const [namec, setc] = useState ('');

  useEffect(()=>{
    setc(`${name} ${sname}`)
  }, [name, sname])

  const mname = (e: ChangeEvent<HTMLInputElement>) =>{
    set(e.target.value)

  } 

  const msname = (e: ChangeEvent<HTMLInputElement>) =>{
    sets(e.target.value)
  }

  return(
    <div>
      <input type="text" placeholder="Digite seu Nome" value={name} onChange={mname} /> <br />
      <input type="text" placeholder="Digite seu Sobrenome" value={sname} onChange={msname} />
      <p>Nome Completo: {namec}</p>

    </div>
      
  );
}
export default App;