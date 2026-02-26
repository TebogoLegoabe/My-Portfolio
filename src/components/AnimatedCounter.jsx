import { useState, useEffect } from 'react'
import { useInView } from '../hooks/useInView'

export default function AnimatedCounter({ target, suffix = '+' }) {
  const [count, setCount] = useState(0)
  const [ref, isVisible] = useInView()

  useEffect(() => {
    if (!isVisible) return
    let current = 0
    const step = target / 30
    const timer = setInterval(() => {
      current += step
      if (current >= target) {
        setCount(target)
        clearInterval(timer)
      } else {
        setCount(Math.floor(current))
      }
    }, 35)
    return () => clearInterval(timer)
  }, [isVisible, target])

  return <span ref={ref}>{count}{suffix}</span>
}
