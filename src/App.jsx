import React from 'react'
import styles from './App.module.css'

function App() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Square &amp; Circle</h1>
      <div className={`square ${styles.square}`}>
        <div className={`circle ${styles.circle}`} />
      </div>
    </div>
  )
}

export default App

