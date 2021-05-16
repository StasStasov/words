import React from 'react'
import styles from './Button.module.css'

export default function Button(props) {
  const { onClick, children, view, size, width, disabled, type } = props

  return (
    <button
      className={[
        styles.button,
        styles[view],
        styles[size],
        styles[width]
      ].join(' ')}
      disabled={disabled}
      type={type}
      onClick={onClick}>
      {children}
    </button>
  )
}
