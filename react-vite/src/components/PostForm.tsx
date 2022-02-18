import { useState, ChangeEvent,  } from "react"

type Props = {
    onAdd: (title: string, body: string) => void;
}

export const PostForm = ({onAdd}: Props) => {

    const[title, settitle] = useState ('');
    const[body, setbody] = useState('');

    const addtitle = (e: ChangeEvent<HTMLInputElement> ) =>{
        settitle(e.target.value);
    }
    
    const addbody = (e: ChangeEvent<HTMLTextAreaElement>) =>{
        setbody(e.target.value);
    }

    const postar =  () => {
        if(title && body){
            onAdd(title, body)

        }else{
            alert("Preencha todos os campos")
        }

    }

    return(

        <fieldset className="border-2 mb-3 p-3">

            <legend>Adicionar Novo Post</legend>
            <input value={title} onChange={addtitle} className="block border mb-2" type="text" placeholder="Digite um Titulo" />
            <textarea value={body} onChange={addbody} className="block border mb-2" ></textarea>
            <button className="block border" onClick={postar}>Adicionar</button>

        </fieldset>
    )

}