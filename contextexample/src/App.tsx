import { BrowserRouter, Routes, Route } from "react-router-dom";
import { SingUp } from "./pages/SingUp";
import { ShowData } from "./pages/ShowData";

const App = () => {
  return(
    <BrowserRouter>

      <h1>Titulo da Página</h1>
      <hr />
      <Routes>
        <Route path="/" element={<SingUp/>}/>
        <Route path="/exibir" element={<ShowData/>}/>
      </Routes>
      
    
    
    
    </BrowserRouter>
  )
}

export default App;