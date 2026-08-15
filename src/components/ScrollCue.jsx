import './ScrollCue.css'
import { useEffect, useState } from 'react'

function ScrollCue({ onActivate }) {
  const [hidden, setHidden] = useState(false)

  useEffect(() => {
    const onScroll = () => setHidden(window.scrollY > 60)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <button
      type="button"
      className={`scroll-cue${hidden ? ' is-hidden' : ''}`}
      onClick={onActivate}
      aria-label="Scroll down"
      tabIndex={hidden ? -1 : 0}
    >
      <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor"
        strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M6 9.5 12 15.5 18 9.5" />
      </svg>
    </button>
  )
}

export default ScrollCue
