import { Star } from 'lucide-react'
import { PageHero } from '../components/PageHero'
import { Reveal } from '../components/Reveal'
import { testimonials } from '../data/siteContent'

export function ReviewsPage() {
  return (
    <div className="space-y-12">
      <PageHero
        title="What Homeowners Say About Rentmeister"
        subtitle="These review cards use the real recent reviews listed on the live Rentmeister site and present them in a full responsive grid."
      />

      <Reveal>
        <section className="rounded-3xl border border-slate-200 bg-white p-6 text-center shadow-sm shadow-slate-300/60">
          <p className="text-sm uppercase tracking-wider text-slate-500">Google Reviews</p>
          <p className="mt-2 text-4xl font-extrabold text-[#1a2744]">4.5 / 5.0</p>
          <div className="mt-3 flex justify-center gap-1 text-[#c0392b]">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} size={20} fill="currentColor" className={i === 4 ? 'opacity-60' : ''} />
            ))}
          </div>
          <p className="mt-2 text-sm text-slate-600">Recent review content pulled from Rentmeister’s live site and shown here as a readable grid instead of a carousel.</p>
        </section>
      </Reveal>

      <section className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {testimonials.map((review) => (
          <Reveal key={`${review.name}-${review.date}`}>
            <article className="flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-sm shadow-slate-300/60">
              <div className="mb-3 flex gap-1 text-[#c0392b]">
                {Array.from({ length: review.stars }).map((_, i) => (
                  <Star key={i} size={16} fill="currentColor" />
                ))}
              </div>
              <p className="flex-1 text-sm leading-relaxed text-slate-600">“{review.text}”</p>
              <div className="mt-5 border-t border-slate-200 pt-4">
                <p className="text-sm font-semibold text-[#1a2744]">{review.name}</p>
                <p className="text-xs uppercase tracking-wider text-slate-500">{review.date}</p>
              </div>
            </article>
          </Reveal>
        ))}
      </section>
    </div>
  )
}
