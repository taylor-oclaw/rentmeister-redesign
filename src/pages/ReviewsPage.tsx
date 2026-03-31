import { Star } from 'lucide-react'
import { PageHero } from '../components/PageHero'
import { Reveal } from '../components/Reveal'
import { testimonials } from '../data/siteContent'

export function ReviewsPage() {
  return (
    <div className="space-y-12">
      <PageHero
        title="What Homeowners Say About Rentmeister"
        subtitle="Our reputation is built one service visit at a time. See why families across northern Utah continue to trust our team."
      />

      <Reveal>
        <section className="rounded-3xl border border-slate-200 bg-white p-6 text-center dark:border-slate-800 dark:bg-slate-900">
          <p className="text-sm uppercase tracking-wider text-slate-500">Google Reviews</p>
          <p className="mt-2 text-4xl font-extrabold text-[#1a2744] dark:text-slate-100">4.7 / 5.0</p>
          <div className="mt-3 flex justify-center gap-1 text-[#c0392b]">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} size={20} fill="currentColor" className={i === 4 ? 'opacity-50' : ''} />
            ))}
          </div>
          <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">Based on 991+ reviews from homeowners in Utah service areas.</p>
        </section>
      </Reveal>

      <section className="grid gap-4 md:grid-cols-2">
        {testimonials.map((review) => (
          <Reveal key={review.name}>
            <article className="h-full rounded-2xl border border-slate-200 bg-white p-6 dark:border-slate-800 dark:bg-slate-900">
              <div className="mb-3 flex gap-1 text-[#c0392b]">
                {Array.from({ length: review.stars }).map((_, i) => (
                  <Star key={i} size={16} fill="currentColor" />
                ))}
              </div>
              <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-300">“{review.text}”</p>
              <p className="mt-4 text-sm font-semibold">{review.name}</p>
            </article>
          </Reveal>
        ))}
      </section>
    </div>
  )
}
