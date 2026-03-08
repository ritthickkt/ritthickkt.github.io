import { useEffect, useRef, useState } from 'react'
import './ScrollProgress.css'

function ScrollProgress() {
  const [progress, setProgress] = useState(0)
  const rafId = useRef(null)
  const prev = useRef(-1)

  useEffect(() => {
    const tick = () => {
      const scrolled = window.scrollY
      const total = document.documentElement.scrollHeight - window.innerHeight
      const next = total > 0 ? (scrolled / total) * 100 : 0

      if (Math.abs(next - prev.current) > 0.05) {
        prev.current = next
        setProgress(next)
      }

      rafId.current = requestAnimationFrame(tick)
    }

    rafId.current = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(rafId.current)
  }, [])

  return <div className="scroll-progress-bar" style={{ width: `${progress}%` }} />
}

export default ScrollProgress
