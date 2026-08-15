/*
 * Tiny theme store.
 *
 * The toggle exists in two places (floating on the hero, docked in the navbar),
 * so the current theme lives outside React and both subscribe to it — otherwise
 * each copy would keep its own state and they'd disagree about which icon to show.
 * The initial value is written by the inline script in index.html before paint.
 */

const listeners = new Set()

const read = () =>
  document.documentElement.getAttribute('data-theme') === 'light' ? 'light' : 'dark'

let theme = typeof document === 'undefined' ? 'dark' : read()

export function getTheme() {
  return theme
}

export function subscribe(listener) {
  listeners.add(listener)
  return () => listeners.delete(listener)
}

export function setTheme(next) {
  if (next === theme) return
  theme = next
  document.documentElement.setAttribute('data-theme', next)

  try {
    localStorage.setItem('theme', next)
  } catch {
    // Storage unavailable (private mode) — the theme still applies this session.
  }

  listeners.forEach((listener) => listener())
}

export function toggleTheme() {
  setTheme(theme === 'dark' ? 'light' : 'dark')
}
