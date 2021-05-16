import React from 'react'
import styles from './Footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <a
        className={styles.link}
        href='https://github.com/StasStasov/words'
        target='_blank'
        rel='noopener noreferrer'>
        Link to github
      </a>
    </footer>
  )
}
