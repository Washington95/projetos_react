type Props ={
    text: string;
    clickfn: (txt: string) => void
}
export const Botao = ({text, clickfn} : Props) =>{

    const cli = () =>{
        clickfn ("ollla");
    }
     return(
         <button onClick={cli}>{text}</button>
     )

}