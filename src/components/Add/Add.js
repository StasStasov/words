import React from 'react'
import styles from './Add.module.css'
import { useDropFile } from '../../hooks/file.hook'
import { useForm } from '../../hooks/form.hook'
import Input from '../Input/Input'
import Button from '../Button/Button'

export default function Add({ addWord, addWordsFromFile }) {
  const [input, change, submit] = useForm(addWord)
  const [readyFile, dragOver, dragEnter, dragLeave, drop] = useDropFile(
    addWordsFromFile
  )

  return (
    <main className='main'>
      <div className='container'>
        <form className={styles.form} onSubmit={submit}>
          <div className={styles.field}>
            <Input
              name='enWord'
              value={input.enWord || ''}
              onChange={change}
              placeholder='Английское слово'
            />
            <Input
              name='ruWord'
              value={input.ruWord || ''}
              onChange={change}
              placeholder='Русское слово'
            />
          </div>
          <Button type='submit'>Добавить</Button>
        </form>
        <div className={styles.wrap}>
          <div
            className={styles.drop}
            onDrop={drop}
            onDragOver={dragOver}
            onDragEnter={dragEnter}
            onDragLeave={dragLeave}>
            <span
              className={[styles.text, readyFile ? styles.ready : ''].join(
                ' '
              )}>
              {readyFile ? 'Готово' : 'Перетащить JSON файл'}
            </span>
          </div>
        </div>
      </div>
    </main>
  )
}
