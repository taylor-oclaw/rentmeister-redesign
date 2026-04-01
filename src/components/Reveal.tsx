import { type PropsWithChildren, useEffect, useRef, useState } from 'react'

interface RevealProps extends PropsWithChildren {
  className?: string
}

export function Reveal({ children, className }: RevealProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches || !('IntersectionObserver' in window)) {
      setVisible(true)
      return
    }

    const fallback = window.setTimeout(() => setVisible(true), 250)
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          window.clearTimeout(fallback)
          setVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.15 },
    )

    observer.observe(el)
    return () => {
      window.clearTimeout(fallback)
      observer.disconnect()
    }
  }, [])

  return (
    <div
      ref={ref}
      className={`${className ?? ''} transition-all duration-700 ${visible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}
    >
      {children}
    </div>
  )
}
