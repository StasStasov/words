import { useState } from 'react'

export const useDropFile = ( addWordsFromFile ) => {
  const [readyFile, setReadyFile] = useState(false)

  const dragOver = e => {
    e.preventDefault()
    e.stopPropagation()
  }
  const dragEnter = e => {
    e.preventDefault()
    e.stopPropagation()
  }
  const dragLeave = e => {
    e.preventDefault()
    e.stopPropagation()
  }
  const drop = e => {
    e.preventDefault()
    e.stopPropagation()

    const reader = new FileReader()
    const file = e.dataTransfer.files[0]

    if (file) {
      reader.onloadend = e => {
        const content = JSON.parse(reader.result)
        addWordsFromFile(content)
        setReadyFile(true)
      }
      reader.readAsText(file)
    }
  }

  return [readyFile, dragOver, dragEnter, dragLeave, drop]
}
