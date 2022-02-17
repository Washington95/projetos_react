import { useState, useEffect, ChangeEvent } from "react";
import { Post } from "./types/Post";


const App = () =>{
  const [posts, setposts] = useState<Post[]>([]);
  const [loading, setloading] = useState(false);

  const[title, settitle] = useState ('');
  const[body, setbody] = useState('')

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

  const addtitle = (e: ChangeEvent<HTMLInputElement> ) =>{
    settitle(e.target.value)
  }

  const addbody = (e: ChangeEvent<HTMLTextAreaElement>) =>{
    setbody(e.target.value)
  }

  const postar = async () =>{
    if(title && body) {

      let response = await fetch('https://jsonplaceholder.typicode.com/posts',{
        method: 'POST',
        body: JSON.stringify({
          title: title,
          body: body,
          userId: 1
        }),
        headers :{
          'Content-Type': 'application/json'
        }
      });
      let json = await response.json();

      if(json.id){
        alert("Post adicionado com sucesso")

      }else{
        alert("Ocorreu um erro")
      }

    }else{
      alert("preencha todos os dados")
    }
  }
 


  return(
    <div>
      {loading &&
        <div>
          Carregando...
        </div>
      }

      <fieldset className="border-2 mb-3 p-3">
        <legend>Adicionar Novo Post</legend>
        <input value={title} onChange={addtitle} className="block border mb-2" type="text" placeholder="Digite um Titulo" />
        <textarea value={body} onChange={addbody} className="block border mb-2" ></textarea>
        <button className="block border" onClick={postar}>Adicionar</button>

      </fieldset>


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