import React, { useEffect, useState } from 'react'
import styles from './Quiz.module.css'
import Button from '../Button/Button'

export default function Quiz({ questions }) {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [currentAnswer, setCurrentAnswer] = useState(-1)
  const [score, setScore] = useState(0)
  const [scoreChanged, setScoreChanged] = useState('')
  const [disable, setDisable] = useState(false)

  const handleClick = (index, isCorrect) => {
    if (isCorrect) {
      setScore(score + 1)
    }

    setCurrentAnswer(index)
    setDisable(true)

    setTimeout(() => {
      const nextQuestion = currentQuestion + 1

      if (nextQuestion < questions.length) {
        setCurrentQuestion(nextQuestion)
      } else {
        setCurrentQuestion(0)
        console.log('Fin!')
      }

      setDisable(false)
      setCurrentAnswer(-1)
    }, 500)
  }

  useEffect(() => {
    const DURATION = 200

    setScoreChanged(styles.animate)

    setTimeout(() => setScoreChanged(''), DURATION)
  }, [score])

  const checkAnswerIsCorrect = (answer, index) =>
    currentAnswer === index ? (answer.isCorrect ? 'action' : 'danger') : ''

  return (
    <div className='container'>
      {!questions.length ? (
        <span className={styles.empty}>Отсутствуют слова для опроса</span>
      ) : (
        <>
          <div className={styles.stat}>
            <div className={styles.wrap}>
              Счет:&nbsp;
              <div className={[styles.score, scoreChanged].join(' ')}>
                {score}
              </div>
            </div>
            <span className={styles.len}>
              {currentQuestion + 1} / {questions.length}
            </span>
          </div>
          <h1 className={styles.output}>
            {questions[currentQuestion].question}
          </h1>
          <div className={styles.answers}>
            {questions[currentQuestion].answers.map((answer, index) => (
              <Button
                size='l'
                view={checkAnswerIsCorrect(answer, index)}
                disabled={disable}
                onClick={() => handleClick(index, answer.isCorrect)}
                key={answer.answer}>
                {answer.answer}
              </Button>
            ))}
          </div>
        </>
      )}
    </div>
  )
}
