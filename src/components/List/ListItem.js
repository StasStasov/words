import React, { useState } from 'react'
import styles from './List.module.css'
import Button from '../Button/Button'

export default function ListItem({ list, index, deleteWord }) {
  const [, setHidden] = useState(true)

  const hideWord = lang => {
    if (list[index][lang].hidden) return styles.hidden
  }
  const checkItem = () => {
    if (!list[index].english.hidden && !list[index].russian.hidden) {
      return styles.checked
    }
  }

  const handleShowClick = () => {
    list[index].english.hidden = false
    list[index].russian.hidden = false
    setHidden(false)
  }
  const handleDelete = () => deleteWord(list[index].english.value)

  return (
    <li className={styles.item}>
      <div
        className={[styles.words, checkItem()].join(' ')}
        onClick={handleShowClick}>
        <span className={[styles.eng, hideWord('english')].join(' ')}>
          {list[index].english.value}
        </span>
        <span className={[styles.rus, hideWord('russian')].join(' ')}>
          {list[index].russian.value}
        </span>
      </div>
      <Button onClick={handleDelete}>
        <span className='material-icons'>delete</span>
      </Button>
    </li>
  )
}
