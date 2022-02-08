import { useState } from "react";

const App = () =>{
  const[color, setcolor] = useState('green')

  const clicou = () =>{
    setcolor('yellow')
  }


  return(
    <div>
       <button onClick={clicou} style={{
         backgroundColor: 'black',
         color ,
         padding: 0
       }}>Clique Aqui</button>
    </div>
      
  );
}
export default App;