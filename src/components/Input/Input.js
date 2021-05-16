import React from 'react'
import styles from './Input.module.css'

export default function Input(props) {
  const {
    onChange,
    value,
    name,
    view,
    size,
    placeholder,
    disabled
  } = props

  return (
    <div className={styles.wrap}>
      <input
        type='text'
        onChange={onChange}
        value={value}
        name={name}
        placeholder={placeholder}
        disabled={disabled}
        className={[styles.input, styles[view], styles[size]].join(' ')}
      />
    </div>
  )
}
