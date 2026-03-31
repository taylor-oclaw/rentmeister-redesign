import { useEffect, useState } from 'react'

const THEME_KEY = 'rentmeister-theme'

const getDefaultTheme = () => {
  if (typeof window === 'undefined') return true

  const stored = localStorage.getItem(THEME_KEY)
  return stored ? stored === 'dark' : true
}

export function useTheme() {
  const [isDark, setIsDark] = useState(getDefaultTheme)

  useEffect(() => {
    const root = document.documentElement
    root.classList.toggle('dark', isDark)
    root.classList.toggle('light', !isDark)
    localStorage.setItem(THEME_KEY, isDark ? 'dark' : 'light')
  }, [isDark])

  return {
    isDark,
    toggleTheme: () => setIsDark((prev) => !prev),
  }
}
