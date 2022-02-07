import { useState } from "react";


const App = () =>{
  const [show, setshow] = useState(false);

  const mostrar = () =>{
    setshow( !show );
  }
  
  
  return(
    <div>
      <button onClick={mostrar}>{show ? 'Ver Menos' : 'Ver Mais'}</button>

      {show  &&
        <div>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis inventore at reprehenderit magnam cupiditate rerum iste! Ex, minima iste optio, enim quis, asperiores nihil eius quas ipsa earum saepe unde?</p>
        </div>
      }
      
     
    </div>
      
  );
}
export default App;