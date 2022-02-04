import { Header } from "./components/Header";
import { Photo } from "./components/photo";

const App = () =>{
  return(
    <div>
      <Header title="Novo Texto"/>
      Olá mundo!

      <Photo url="http://www.google.com.br/google.jpg" legend="Google"/>
    </div>
    
  )
}
export default App;