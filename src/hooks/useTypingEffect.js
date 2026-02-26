import { useState, useEffect } from 'react'

export function useTypingEffect(words, typingSpeed = 80, deletingSpeed = 40, pause = 2200) {
  const [text, setText] = useState('')
  const [wordIndex, setWordIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const current = words[wordIndex]

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        setText(current.substring(0, text.length + 1))
        if (text.length + 1 === current.length) {
          setTimeout(() => setIsDeleting(true), pause)
        }
      } else {
        setText(current.substring(0, text.length - 1))
        if (text.length === 0) {
          setIsDeleting(false)
          setWordIndex((i) => (i + 1) % words.length)
        }
      }
    }, isDeleting ? deletingSpeed : typingSpeed)

    return () => clearTimeout(timeout)
  }, [text, isDeleting, wordIndex, words, typingSpeed, deletingSpeed, pause])

  return text
}
