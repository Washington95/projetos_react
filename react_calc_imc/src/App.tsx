import styles from './App.module.css';
import poweredImage from './assets/powered.png';

const App = () =>{
  return(
    <div className={styles.main}>
      <header>
        <div className={styles.headerContainer}>
          <img src={poweredImage} alt="" width={150} />
        </div>
      </header>
      <div className={styles.container}>
        <div className={styles.leftS}>
          ...
        </div>
        <div className={styles.rightS}>
          ...
        </div>
      </div>
    </div>
  )
}

export default App;
