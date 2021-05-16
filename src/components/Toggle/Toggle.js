import React from 'react'
import styles from './Toggle.module.css'

export default function Button(props) {
  const {
    onChange,
    checked,
    trueContent,
    falseContent,
    falseText,
    trueText,
    size
  } = props
  const content = checked ? trueContent : falseContent
  return (
    <div className={styles.wrap}>
      <span>{falseText}</span>
      <div className={styles.toggle}>
        <input
          type='checkbox'
          checked={checked}
          onChange={onChange}
          className={styles.input}
          aria-label='toggle'
        />
        <div className={[styles.label, styles[size]].join(' ')}>
          <div className={[styles.control, styles[size]].join(' ')}>
            {content}
          </div>
        </div>
      </div>
      <span>{trueText}</span>
    </div>
  )
}
