import { useEffect, useMemo, useState } from 'react'
import { ChevronLeft, ChevronRight, Star } from 'lucide-react'
import { testimonials } from '../data/siteContent'

export function ReviewCarousel() {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const timer = window.setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length)
    }, 4800)

    return () => window.clearInterval(timer)
  }, [])

  const testimonial = useMemo(() => testimonials[index], [index])

  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm shadow-slate-300/60">
      <div className="mb-4 flex items-center gap-1 text-[#c0392b]">
        {Array.from({ length: testimonial.stars }).map((_, i) => (
          <Star key={i} size={16} fill="currentColor" />
        ))}
      </div>
      <p className="text-sm leading-relaxed text-slate-600">“{testimonial.text}”</p>
      <p className="mt-4 text-sm font-semibold text-slate-800">{testimonial.name}</p>

      <div className="mt-5 flex items-center justify-between">
        <button
          type="button"
          onClick={() => setIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)}
          className="rounded-full border border-slate-300 p-2 text-slate-600 transition hover:bg-slate-100"
          aria-label="Previous review"
        >
          <ChevronLeft size={16} />
        </button>
        <div className="flex items-center gap-1">
          {testimonials.map((_, dotIndex) => (
            <span key={dotIndex} className={`h-2 w-2 rounded-full ${dotIndex === index ? 'bg-[#c0392b]' : 'bg-slate-300'}`} />
          ))}
        </div>
        <button
          type="button"
          onClick={() => setIndex((prev) => (prev + 1) % testimonials.length)}
          className="rounded-full border border-slate-300 p-2 text-slate-600 transition hover:bg-slate-100"
          aria-label="Next review"
        >
          <ChevronRight size={16} />
        </button>
      </div>
    </div>
  )
}
