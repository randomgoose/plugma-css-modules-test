import styles from './styles.module.css'

function App() {

  return (
    <>
      <p className={styles.title} style={{ fontSize: 24 }}>
        Initially this is green. But when you change something in `style.module.css`, this turns black.
      </p>
    </>
  )
}

export default App
