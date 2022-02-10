import * as C from './AppStyles'


const App = () =>{

  return(
    <C.Container bgColor="orange">
      Texto Qualqueraa
     <C.Botao bg="red" >Grande</C.Botao>
     <C.Botao bg="yellow" small>Pequeno</C.Botao>
    </C.Container>

      
  );
}
export default App;