import { useState, useEffect, ChangeEvent } from "react";
import { PostForm } from "./components/PostForm";
import { PostItem } from "./components/PostItem";
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


  const criar = async (title: string, body: string) =>{
    let response = await fetch('https://jsonplaceholder.typicode.com/posts',{
        method: 'POST',
        body: JSON.stringify({title, body, userId: 1}),
        headers :{'Content-Type': 'application/json'}
      });
      let json = await response.json();

      if(json.id){
        alert("Post adicionado com sucesso")

      }else{
        alert("Ocorreu um erro")
      }

  }


  return(
    <div>
      {loading &&
        <div>
          Carregando...
        </div>
      }

      <PostForm onAdd={criar} />

      {!loading && posts.length > 0 &&
        <>
        
        <p className="text-center mb-2">Total de Posts : {posts.length} </p> 
        <div >
          {posts.map((item, index) => (
            <PostItem data={item} />
            
          ))}
        </div>
        </>
      }
    </div>
      
  );
}
export default App;