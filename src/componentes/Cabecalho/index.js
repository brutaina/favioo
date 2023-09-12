import React from 'react'
import Footer from './Footer';
import styles from './Cabecalho.module.css'

export default function Cabecalho(props) {
  return (
    <div className={styles.cabecalho}>

      <img src={props.logo} />
      <p className={styles.titulo}>{props.titulo}</p>
      <p className={`${styles.titulo} ${styles.subtitulo}`}>{props.subtitulo}</p>
    </div>

  )

}
