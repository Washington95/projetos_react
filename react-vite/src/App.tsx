import { useState, useEffect } from "react";
import { Post } from "./types/Post";


const App = () =>{
  const [posts, setposts] = useState<Post[]>([]);
  const [loading, setloading] = useState(false);

  useEffect(() => {
    carregar()
  }, [])

  const carregar =  async () =>{
    try{
      setloading(true);
      let response = await  fetch('https://jsonplaceholder.typicode.com/posts');
      let json  = await response.json();
      setloading(false);
      setposts(json);
    } catch(e){
      setloading(false);
      alert('erro')
      setposts([]);
      console.error(e)

    }
  }
 


  return(
    <div>
      {loading &&
        <div>
          Carregando...
        </div>
      }
      {!loading && posts.length > 0 &&
        <>
        
        <p className="text-center mb-2">Total de Posts : {posts.length} </p> 
        <div >
          {posts.map((item, index) => (
            <div key={index} className="my-5 ml-5">
              <h4 className="font-bold">{item.title}</h4>
              <small>#{item.id} - Usuário: {item.userId}</small>
              <p>{item.body}</p>
              
            </div>
          ))}
        </div>
        </>
      }
    </div>
      
  );
}
export default App;