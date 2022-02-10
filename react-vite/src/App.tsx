import * as C from './AppStyles'


const App = () =>{

  return(
    <C.Container bgColor="blue">
      <span>Texto Qualqueraa</span> 

      <a href="#" className='link' >Link</a>

      <C.Botao bg="red" >Grande</C.Botao>
      <C.Botao bg="yellow" small>Pequeno</C.Botao>
    </C.Container>

      
  );
}
export default App;