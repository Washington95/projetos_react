import { Pessoa } from "./components/Pessoa";


const App = () =>{
  let list = [
    {name: 'Washington', age: 27},
    {name: 'Luiz', age: 77},
    {name: 'Moreira', age: 47},
    {name: 'Ozório', age: 37}
    
  ];
  
  return(
    <div>
      <h2>Lista de presença</h2>
      <ul>
        {list.map(( item, index) =>(
          <Pessoa key={index} data={item}/>
        ))}
      </ul>
    </div>
      
  );
}
export default App;