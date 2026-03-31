import { useEffect, useState } from 'react'
import { ChevronDown, Menu, Phone, X } from 'lucide-react'
import { Link, NavLink } from 'react-router-dom'
import { contactPhone, contactTel, navLinks } from '../data/siteContent'

export function Header() {
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
          ? 'border-b border-slate-200 bg-white/95 shadow-lg shadow-slate-900/5 backdrop-blur'
          : 'border-b border-transparent bg-white/88 backdrop-blur'
      }`}
    >
      <div className="mx-auto flex h-20 w-full max-w-[1400px] items-center justify-between gap-2 px-4 lg:px-6">
        <Link to="/" className="flex shrink-0 items-center gap-2" aria-label="Rentmeister home">
          <img
            src="/images/logo.jpg"
            alt="Rentmeister logo"
            className="h-12 w-auto rounded-xl bg-white p-1.5 shadow-md ring-1 ring-slate-200"
          />
        </Link>

        <nav className="hidden items-center gap-1 xl:flex">
          {navLinks.map((item) => (
            <div key={item.label} className="group relative">
              <NavLink
                to={item.to}
                className={({ isActive }) =>
                  `inline-flex items-center gap-0.5 whitespace-nowrap rounded-lg px-2 py-1 text-xs font-semibold transition ${
                    isActive ? 'text-[#c0392b]' : 'text-[#1a2744] hover:text-[#c0392b]'
                  }`
                }
              >
                {item.label}
                {item.submenu ? <ChevronDown size={14} className="opacity-80" /> : null}
              </NavLink>

              {item.submenu ? (
                <div className="invisible absolute left-0 top-full z-50 mt-3 min-w-[260px] rounded-2xl border border-slate-200 bg-white p-2 opacity-0 shadow-xl transition-all duration-150 group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
                  {item.submenu.map((child) => (
                    <Link
                      key={child.label}
                      to={child.to}
                      className="block rounded-xl px-3 py-2 text-sm text-[#333333] transition hover:bg-[#f8f9fa] hover:text-[#1a2744]"
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              ) : null}
            </div>
          ))}
        </nav>

        <div className="hidden shrink-0 items-center gap-3 xl:flex">
          <a href={`tel:${contactTel}`} className="inline-flex items-center gap-1.5 whitespace-nowrap text-xs font-semibold text-[#1a2744] hover:text-[#c0392b]">
            <Phone size={14} />
            {contactPhone}
          </a>
          <Link to="/quote" className="whitespace-nowrap rounded-full bg-[#c0392b] px-4 py-2 text-xs font-semibold text-white transition hover:bg-[#a93226]">
            Contact Us
          </Link>
        </div>

        <button
          className="rounded-lg border border-slate-300 p-2 text-[#1a2744] xl:hidden"
          onClick={() => setIsOpen((prev) => !prev)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>

      {isOpen && (
        <div className="border-t border-slate-200 bg-white px-4 pb-4 pt-2 shadow-lg xl:hidden">
          <nav className="flex flex-col gap-1">
            {navLinks.map((item) => (
              <div key={item.label} className="rounded-lg border border-transparent">
                <div className="flex items-center justify-between gap-2">
                  <NavLink
                    to={item.to}
                    onClick={() => setIsOpen(false)}
                    className={({ isActive }) =>
                      `flex-1 rounded-lg px-3 py-2 text-sm font-medium transition ${
                        isActive ? 'bg-[#c0392b]/10 text-[#c0392b]' : 'text-[#1a2744] hover:bg-[#f8f9fa]'
                      }`
                    }
                  >
                    {item.label}
                  </NavLink>
                  {item.submenu ? (
                    <button
                      type="button"
                      onClick={() => setOpenMobileMenu((prev) => (prev === item.label ? null : item.label))}
                      className="rounded-lg p-2 text-slate-600 hover:bg-slate-100"
                      aria-label={`Toggle ${item.label} submenu`}
                    >
                      <ChevronDown size={16} className={`transition ${openMobileMenu === item.label ? 'rotate-180' : ''}`} />
                    </button>
                  ) : null}
                </div>

                {item.submenu && openMobileMenu === item.label ? (
                  <div className="mt-1 space-y-1 border-l border-slate-200 pl-2">
                    {item.submenu.map((child) => (
                      <Link
                        key={child.label}
                        to={child.to}
                        onClick={() => setIsOpen(false)}
                        className="block rounded-lg px-3 py-2 text-sm text-[#666666] hover:bg-[#f8f9fa] hover:text-[#1a2744]"
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
