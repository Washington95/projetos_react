// const App = () =>{
//   let n1: number = 10;
//   let n2: number = 18;

//   function somar(n1:number, n2:number): number{
//     return n1+ n2

//   }

//   return(
//     <div>Soma : {somar(n1, n2)}</div>
//   )

// }
// const App = () =>{
//   let name: string = 'Washington';
//   let lastname: string = 'Luiz'

//   return(
//     <div>{`${name.toLowerCase()} ${lastname.toLocaleUpperCase()}`}</div>
//   )
// }

const  App = () =>{
  let link : string = 'https://b7web.com.br'

  return(
    <div>
      Acesse o site <br />
      <a href={link}>Clique aqui</a>
    </div>
  )
}
export default App;