import { Botao } from "./components/Botao";
const App = () =>{
  let txto = 'Clique Aqui'

  const botaoE = (txt: string) =>{
    alert("frase app:"+ txt);
  }

  return(
    <div>
      <Botao text={txto} clickfn={botaoE}/>
    </div>
    
    
  )
}
export default App;