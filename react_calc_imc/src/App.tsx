import { useState } from 'react';
import styles from './App.module.css';
import poweredImage from './assets/powered.png';
import { GridItem } from './components/GridItem';
import { levels, calculateImc, Level } from './helpers/imc';

const App = () =>{
  const [alt, newalt] = useState<number>(0)
  const [pes, newpes] = useState<number>(0)
  const [toShow, setToShow] = useState<Level | null>(null)

  const calcular = () => {
    if(alt && pes){
      setToShow(calculateImc(alt, pes));
      

    }else{
      alert("preencha todos os campos")
    }
  }

  return(
    <div className={styles.main}>
      <header>
        <div className={styles.headerContainer}>
          <img src={poweredImage} alt="" width={150} />
        </div>
      </header>
      <div className={styles.container}>
        <div className={styles.leftS}>
          <h1>Calcule o seu IMC.</h1>
          <p>IMC é a sigla para Indice de Massa Corpórea, parâmetro adotado pela Organização Mundial de Saúde para calcular o peso ideal de cada pessoa.</p>

          <input 
            type="number"
            placeholder= "Digite a sua altura Ex: 1.5 (em métros) "
            value={alt > 0 ? alt : ''}
            onChange={e => newalt(parseFloat(e.target.value))}
          />
          <input 
            type="number"
            placeholder='Digite seu peso Ex:75 (em kg)'
            value={pes > 0 ? pes : ''}
            onChange={e => newpes(parseFloat(e.target.value))}
          />
          <button onClick={calcular}>Calcluar</button>

        </div>
        <div className={styles.rightS}>
          {!toShow &&
            <div className={styles.grid}>
              {levels.map((item, key) =>(
                <GridItem key={key} item={item}/>
              ))}
            </div>
          }
          {toShow &&
            <div className={styles.rightBig}>
              <div className={styles.rightArrow}></div>
              <GridItem item={toShow} />
            </div>
          }

        </div>

      </div>
    </div>
  )
}

export default App;
