import { MoonStar, Sun } from 'lucide-react'

interface ThemeToggleProps {
  isDark: boolean
  onToggle: () => void
}

export function ThemeToggle({ isDark, onToggle }: ThemeToggleProps) {
  return (
    <button
      type="button"
      onClick={onToggle}
      className="inline-flex items-center gap-2 rounded-full border border-slate-300/70 bg-white/80 px-3 py-2 text-xs font-semibold text-slate-700 transition hover:bg-white dark:border-slate-700 dark:bg-slate-900/80 dark:text-slate-200 dark:hover:bg-slate-900"
      aria-label="Toggle dark mode"
    >
      {isDark ? <Sun size={16} /> : <MoonStar size={16} />}
      {isDark ? 'Light' : 'Dark'}
    </button>
  )
}
