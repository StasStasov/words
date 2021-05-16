import React, { useEffect, useState } from 'react'
import { Switch, Route, HashRouter } from 'react-router-dom'
import { setStorage, getStorage } from './storage/storage'
import Home from './components/Home/Home.js'
import Add from './components/Add/Add.js'
import List from './components/List/List.js'
import Quiz from './components/Quiz/Quiz.js'
import Header from './components/Header/Header'
import { useCutter } from './hooks/cutter.hook'

const WORDS_NAME = 'words'

export default function App() {
  const [words, setWords] = useState(getStorage(WORDS_NAME, {}))
  const [isEngHide, setIsEngHide] = useState(false)
  const [radioOption, setRadioOption] = useState('25')
  const currentWords = useCutter(words, radioOption)

  useEffect(() => setStorage(WORDS_NAME, words), [words])

  const addWord = (enWord, ruWord) => {
    setWords(prev => ({ ...prev, [enWord]: ruWord }))
  }

  const addWordsFromFile = words => {
    setWords(prev => ({ ...prev, ...words }))
  }

  const deleteWord = word => {
    setWords(prev => {
      const state = { ...prev }
      delete state[word]
      return state
    })
  }

  const changeListMode = setRadioOption
  const changeLangMode = setIsEngHide

  return (
    <HashRouter>
      <div className='app'>
        <Header />
        <Switch>
          <Route path='/add'>
            <Add addWord={addWord} addWordsFromFile={addWordsFromFile} />
          </Route>
          <Route path='/list'>
            <List
              words={currentWords}
              deleteWord={deleteWord}
              isEngHide={isEngHide}
            />
          </Route>
          <Route path='/quiz'>
            <Quiz isEngHide={isEngHide} words={currentWords} />
          </Route>
          <Route exact path='/'>
            <Home
              words={words}
              isEngHide={isEngHide}
              radioOption={radioOption}
              changeLangMode={changeLangMode}
              changeListMode={changeListMode}
            />
          </Route>
        </Switch>
      </div>
    </HashRouter>
  )
}
