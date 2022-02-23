import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { AboutW } from "./pages/AboutW";
import { AboutL } from "./pages/AboutL";

const App = () => {
  return (
    <div className="p-4">
      <header>
        <h1>Titulo da Página</h1>
      </header>
      <hr />
      <div className="py-4">
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/sobre" element={<About/>} />
          <Route path="/sobre/w" element={<AboutW/>} />
          <Route path="/sobre/l" element={<AboutL/>} />
        </Routes>


      </div>
      <hr />
      <footer>
        Todos direitos reservados
      </footer>
    </div>
  )
}

export default App;