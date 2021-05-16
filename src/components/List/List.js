import React from 'react'
import styles from './List.module.css'
import ListItem from './ListItem'

export default function List({ words, deleteWord, isEngHide }) {
  const createList = words => {
    const list = []
    const wordsKeys = Object.keys(words)

    wordsKeys.forEach(word => {
      list.push({
        english: { value: word, hidden: isEngHide },
        russian: { value: words[word], hidden: !isEngHide }
      })
    })

    return list
  }

  const list = createList(words)

  return (
    <main className={'main'}>
      <ul className={[styles.list, 'container'].join(' ')}>
        {!list.length ? (
          <li className={styles.empty}>Список слов пуст</li>
        ) : (
          list.map((_, index) => (
            <ListItem
              list={list}
              index={index}
              deleteWord={deleteWord}
              key={index}
            />
          ))
        )}
      </ul>
    </main>
  )
}
