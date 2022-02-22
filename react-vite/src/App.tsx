import {usePeopleList} from './reducers/peopleList';
import { ChangeEvent, useState } from 'react';

const App = () => {
  const [list, dispatch] = usePeopleList();
  const [name, sname] = useState ('');


  const enviou = () => {  
    if(name) {
      dispatch({
        type: 'ADD',
        payload: {
          name: name
        }
      });
      sname('')
    }

  }

  const einput = (e: ChangeEvent<HTMLInputElement>) => {
    sname(e.target.value);

  }

  return(
    <div className="p-5">
      <input className='border-2' type="text" value={name} onChange={einput} />
      <button onClick={enviou}>Adicionar</button>

      <hr />
      Lista de Pessoas :
      <ul>
        {list.map((item, index) =>(
          <li key={index}>{item.name}</li>
        ))}
      </ul>
  
    </div>
  
  );
   
}
  
  export default App;