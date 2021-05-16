import { useCallback } from 'react'

export const useCutter = (words, radioOption) => {
  const cutWords = useCallback(() => {
    const wordsKeys = Object.keys(words)
    const options = {
      25: 25,
      50: 50,
      all: wordsKeys.length
    }
    const newWords = wordsKeys
      .slice(wordsKeys.length - options[radioOption])
      .reduce((result, key) => {
        result[key] = words[key]
        return result
      }, {})
    return newWords
  }, [radioOption, words])

  const currentWords = cutWords()

  return currentWords
}
