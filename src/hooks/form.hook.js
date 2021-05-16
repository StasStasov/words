import { useState } from 'react'

export const useForm = addWord => {
  const [input, setInput] = useState({
    enWord: '',
    ruWord: ''
  })

  const change = e => {
    e.preventDefault()
    e.stopPropagation()

    const name = e.target.name
    const value = e.target.value

    setInput(prev => ({
      ...prev,
      [name]: value
    }))
  }
  const submit = e => {
    e.preventDefault()
    e.stopPropagation()

    if (!input.enWord.length || !input.ruWord.length) return

    addWord(input.enWord, input.ruWord)
    setInput({ enWord: '', ruWord: '' })
  }

  return [input, change, submit]
}
