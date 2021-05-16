import React from 'react'
import styles from './Quiz.module.css'
import { range, rand, shuffle } from '../../utils/utils'
import QuizGame from './QuizGame'

export default function Quiz({ words, isEngHide }) {
  const wordsKeys = Object.keys(words)

  const createAnswers = word => {
    const BUTTON_COUNT = 4
    const result = []
    const trueWordIndex = range(0, 4)
    let arr = wordsKeys.filter(a => a !== word)

    const choice = (val, bool) => (bool ? val : words[val])

    for (let i = 0; i < BUTTON_COUNT; i++) {
      if (i === trueWordIndex) {
        result.push({ answer: choice(word, isEngHide), isCorrect: true })
        continue
      }

      let wrongWord = arr[rand(arr)]
      arr = arr.filter(a => a !== wrongWord)

      result.push({ answer: choice(wrongWord, isEngHide), isCorrect: false })
    }

    return result
  }
  const createQuestions = () => {
    const questions = []

    wordsKeys.forEach(word => {
      questions.push({
        question: isEngHide ? words[word] : word,
        answers: createAnswers(word)
      })
    })

    return questions
  }
  const questions = shuffle(createQuestions(words))

  return (
    <main className={['main', styles.quiz].join(' ')}>
      <QuizGame questions={questions} />
    </main>
  )
}
