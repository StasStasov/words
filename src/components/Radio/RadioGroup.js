import React from 'react'
import styles from './Radio.module.css'

export default function Button({ children }) {
  return <div className={styles.radio}>{children}</div>
}
