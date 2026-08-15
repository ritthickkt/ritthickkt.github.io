import './ThemeToggle.css'
import { useSyncExternalStore } from 'react'
import { getTheme, subscribe, toggleTheme } from '/src/theme.js'

function ThemeToggle({ floating = false, hidden = false }) {
  const theme = useSyncExternalStore(subscribe, getTheme, () => 'dark')
  const isDark = theme === 'dark'

  return (
    <button
      className={`theme-toggle${floating ? ' is-floating' : ''}${hidden ? ' is-hidden' : ''}`}
      type="button"
      onClick={toggleTheme}
      aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}
      title={`Switch to ${isDark ? 'light' : 'dark'} mode`}
      tabIndex={hidden ? -1 : 0}
    >
      <span className="theme-toggle-icon" key={theme} aria-hidden="true">
        {isDark ? (
          <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round">
            <circle cx="12" cy="12" r="4.2" />
            <path d="M12 2.6v2.2M12 19.2v2.2M21.4 12h-2.2M4.8 12H2.6M18.6 5.4l-1.6 1.6M7 17l-1.6 1.6M18.6 18.6L17 17M7 7L5.4 5.4" />
          </svg>
        ) : (
          <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
            <path d="M20.5 14.6A8.6 8.6 0 1 1 9.4 3.5a7 7 0 0 0 11.1 11.1Z" />
          </svg>
        )}
      </span>
    </button>
  )
}

export default ThemeToggle
