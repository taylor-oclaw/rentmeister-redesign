import { useEffect, useState } from 'react'
import { ChevronDown, Menu, Phone, X } from 'lucide-react'
import { Link, NavLink } from 'react-router-dom'
import { contactPhone, contactTel, navLinks, tagline } from '../data/siteContent'
import { ThemeToggle } from './ThemeToggle'

interface HeaderProps {
  isDark: boolean
  onToggleTheme: () => void
}

export function Header({ isDark, onToggleTheme }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [openMobileMenu, setOpenMobileMenu] = useState<string | null>(null)

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
          ? 'border-b border-slate-200/80 bg-white/95 shadow-lg shadow-slate-900/5 backdrop-blur dark:border-slate-800/80 dark:bg-slate-950/92 dark:shadow-black/20'
          : 'bg-transparent'
      }`}
    >
      <div className="mx-auto flex h-20 w-full max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link to="/" className="flex min-w-0 items-center gap-3">
          <img src="/images/logo.jpg" alt="Rentmeister logo" className="h-11 w-auto rounded-md border border-slate-200 bg-white p-1 dark:border-slate-700" />
          <div className="hidden min-w-0 sm:block">
            <p className="truncate text-sm font-semibold leading-tight text-[#1a2744] dark:text-slate-100">Rentmeister Total Home Service</p>
            <p className="truncate text-xs text-slate-600 dark:text-slate-300">{tagline}</p>
          </div>
        </Link>

        <nav className="hidden items-center gap-4 lg:flex">
          {navLinks.map((item) => (
            <div key={item.label} className="group relative">
              <NavLink
                to={item.to}
                className={({ isActive }) =>
                  `inline-flex items-center gap-1 text-sm font-semibold transition ${
                    isActive
                      ? 'text-[#c0392b]'
                      : 'text-slate-700 hover:text-[#1a2744] dark:text-slate-200 dark:hover:text-white'
                  }`
                }
              >
                {item.label}
                {item.submenu ? <ChevronDown size={14} className="opacity-80" /> : null}
              </NavLink>

              {item.submenu ? (
                <div className="invisible absolute left-0 top-full z-50 mt-3 min-w-[260px] rounded-2xl border border-slate-200 bg-white p-2 opacity-0 shadow-xl transition-all duration-150 group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100 dark:border-slate-700 dark:bg-slate-900">
                  {item.submenu.map((child) => (
                    <Link
                      key={child.label}
                      to={child.to}
                      className="block rounded-xl px-3 py-2 text-sm text-slate-700 transition hover:bg-slate-100 hover:text-[#1a2744] dark:text-slate-200 dark:hover:bg-slate-800 dark:hover:text-white"
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              ) : null}
            </div>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <a href={`tel:${contactTel}`} className="inline-flex items-center gap-2 text-sm font-semibold text-slate-700 hover:text-[#c0392b] dark:text-slate-200 dark:hover:text-[#ef6153]">
            <Phone size={16} />
            {contactPhone}
          </a>
          <ThemeToggle isDark={isDark} onToggle={onToggleTheme} />
          <Link to="/quote" className="rounded-full bg-[#c0392b] px-4 py-2 text-sm font-semibold text-white transition hover:bg-[#a93226]">
            Contact Us
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
          <nav className="flex flex-col gap-1">
            {navLinks.map((item) => (
              <div key={item.label} className="rounded-lg border border-transparent">
                <div className="flex items-center justify-between gap-2">
                  <NavLink
                    to={item.to}
                    onClick={() => setIsOpen(false)}
                    className={({ isActive }) =>
                      `flex-1 rounded-lg px-3 py-2 text-sm font-medium transition ${
                        isActive
                          ? 'bg-[#c0392b]/10 text-[#c0392b] dark:bg-[#c0392b]/20 dark:text-[#ef6153]'
                          : 'text-slate-700 hover:bg-slate-50 dark:text-slate-200 dark:hover:bg-slate-900'
                      }`
                    }
                  >
                    {item.label}
                  </NavLink>
                  {item.submenu ? (
                    <button
                      type="button"
                      onClick={() => setOpenMobileMenu((prev) => (prev === item.label ? null : item.label))}
                      className="rounded-lg p-2 text-slate-600 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-800"
                      aria-label={`Toggle ${item.label} submenu`}
                    >
                      <ChevronDown size={16} className={`transition ${openMobileMenu === item.label ? 'rotate-180' : ''}`} />
                    </button>
                  ) : null}
                </div>

                {item.submenu && openMobileMenu === item.label ? (
                  <div className="mt-1 space-y-1 border-l border-slate-200 pl-2 dark:border-slate-700">
                    {item.submenu.map((child) => (
                      <Link
                        key={child.label}
                        to={child.to}
                        onClick={() => setIsOpen(false)}
                        className="block rounded-lg px-3 py-2 text-sm text-slate-600 hover:bg-slate-50 hover:text-[#1a2744] dark:text-slate-300 dark:hover:bg-slate-900"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                ) : null}
              </div>
            ))}

            <a href={`tel:${contactTel}`} className="mt-2 rounded-lg bg-[#c0392b] px-3 py-2 text-center text-sm font-semibold text-white">
              Call {contactPhone}
            </a>
          </nav>
        </div>
      )}
    </header>
  )
}
