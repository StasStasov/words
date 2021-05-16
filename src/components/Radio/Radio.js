import React from 'react'
import styles from './Radio.module.css'

export default function Button(props) {
  const { value, text, onChange, checked } = props
  return (
    <label className={styles.label}>
      <input
        className={styles.input}
        type='radio'
        value={value}
        checked={checked === value}
        onChange={onChange}
      />
      <div className={styles.text}>{text}</div>
    </label>
  )
}
