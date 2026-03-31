import { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Menu, Phone, X } from 'lucide-react'
import { navLinks } from '../data/siteContent'
import { ThemeToggle } from './ThemeToggle'

interface HeaderProps {
  isDark: boolean
  onToggleTheme: () => void
}

export function Header({ isDark, onToggleTheme }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'border-b border-slate-200/70 bg-white/92 shadow-lg shadow-slate-900/5 backdrop-blur dark:border-slate-800 dark:bg-slate-950/90 dark:shadow-black/20'
          : 'bg-transparent'
      }`}
    >
      <div className="mx-auto flex h-20 w-full max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link to="/" className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-600 text-sm font-extrabold text-white">
            RTH
          </div>
          <div>
            <p className="text-sm font-semibold leading-tight text-slate-900 dark:text-slate-100">Rentmeister Total Home Service</p>
            <p className="text-xs text-slate-500 dark:text-slate-400">Experienced & Reliable Service Since 1953</p>
          </div>
        </Link>

        <nav className="hidden items-center gap-6 lg:flex">
          {navLinks.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                `text-sm font-medium transition ${
                  isActive ? 'text-amber-500' : 'text-slate-700 hover:text-blue-600 dark:text-slate-300 dark:hover:text-blue-300'
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href="tel:+18013994633"
            className="inline-flex items-center gap-2 text-sm font-semibold text-slate-700 hover:text-blue-600 dark:text-slate-200 dark:hover:text-blue-300"
          >
            <Phone size={16} />
            (801) 399-4633
          </a>
          <ThemeToggle isDark={isDark} onToggle={onToggleTheme} />
          <Link
            to="/quote"
            className="rounded-full bg-amber-500 px-4 py-2 text-sm font-semibold text-slate-950 transition hover:bg-amber-400"
          >
            Get a Quote
          </Link>
        </div>

        <div className="flex items-center gap-2 lg:hidden">
          <ThemeToggle isDark={isDark} onToggle={onToggleTheme} />
          <button
            className="rounded-lg border border-slate-300 p-2 text-slate-700 dark:border-slate-700 dark:text-slate-200"
            onClick={() => setIsOpen((prev) => !prev)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="border-t border-slate-200 bg-white px-4 pb-4 pt-2 shadow-lg dark:border-slate-800 dark:bg-slate-950 lg:hidden">
          <nav className="flex flex-col gap-2">
            {navLinks.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  `rounded-lg px-3 py-2 text-sm font-medium transition ${
                    isActive
                      ? 'bg-blue-50 text-blue-600 dark:bg-slate-900 dark:text-blue-300'
                      : 'text-slate-700 hover:bg-slate-50 dark:text-slate-200 dark:hover:bg-slate-900'
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
            <a
              href="tel:+18013994633"
              className="mt-1 rounded-lg bg-amber-500 px-3 py-2 text-center text-sm font-semibold text-slate-950"
            >
              Call (801) 399-4633
            </a>
          </nav>
        </div>
      )}
    </header>
  )
}
