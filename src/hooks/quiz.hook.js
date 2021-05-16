export const useQuiz = (words, BUTTON_COUNT) => {
  const wordsKeys = Object.keys(words)

  let currentAnswers = []
  let currentWord = ''
  let score = 0
  let takedWords = wordsKeys

  const startQuiz = () => {
    currentWord = getCurrentWord()
    currentAnswers = getRandAnswers()

    if (checkEndQuiz()) return console.log('Fin!')

    return [currentWord, currentAnswers, score]
  }
  const checkEndQuiz = () => {
    if (!takedWords.length) {
      takedWords = wordsKeys
      return true
    }
    return false
  }
  const getCurrentWord = () => {
    const word = takedWords[rand(takedWords)]
    takedWords = takedWords.filter(a => a !== word)

    return word
  }
  const getRandAnswers = () => {
    const result = []
    const trueWordIndex = range(0, 4)
    let arr = wordsKeys.filter(a => a !== currentWord)

    for (let i = 0; i < BUTTON_COUNT; i++) {
      if (i === trueWordIndex) {
        result.push(getValue(currentWord))
        continue
      }

      let wrongWord = arr[rand(arr)]
      arr = arr.filter(a => a !== wrongWord)

      result.push(getValue(wrongWord))
    }

    return result
  }
  const checkAnswer = event => {
    const guess = event.target.textContent

    if (guess === getValue(currentWord)) {
      increaseScore()
      return true
    } else {
      decreaseScore()
      return false
    }
  }
  const increaseScore = () => score++
  const decreaseScore = () => score--
  const getValue = key => words[key]
  const range = (min, max) => Math.floor(Math.random() * (max - min) + min)
  const rand = arr => Math.floor(Math.random() * arr.length)

  return [startQuiz, checkAnswer]
}
