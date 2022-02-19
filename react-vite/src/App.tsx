import { useState, useEffect, } from "react";
import { api } from "./api";
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
    setloading(true);
    let json = await api.getPost();
    setloading(false);
    setposts(json)
  }


  const criar = async (title: string, body: string) =>{
    let json = await api.addPost(title, body, 1);
    if(json.id){
      alert("Post adicinado com sucesso");

    }else {
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