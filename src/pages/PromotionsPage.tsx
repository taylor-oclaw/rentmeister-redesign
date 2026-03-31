import { Link } from 'react-router-dom'
import { PageHero } from '../components/PageHero'
import { Reveal } from '../components/Reveal'
import { contactPhone, promotions } from '../data/siteContent'

export function PromotionsPage() {
  return (
    <div className="space-y-12">
      <PageHero
        title="Current Specials & Savings"
        subtitle="Take advantage of seasonal offers designed to keep your home comfortable while making upgrades more affordable."
      />

      <section className="grid gap-5 md:grid-cols-3">
        {promotions.map((promotion) => (
          <Reveal key={promotion.title}>
            <article className="h-full overflow-hidden rounded-2xl border border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-900">
              <img src={promotion.imageSrc} alt={promotion.title} className="h-36 w-full object-cover" />
              <div className="p-6">
                <p className="text-xs font-semibold uppercase tracking-wider text-[#c0392b]">Limited Offer</p>
                <h2 className="mt-3 text-xl font-bold text-[#1a2744] dark:text-slate-100">{promotion.title}</h2>
                <p className="mt-3 text-sm text-slate-600 dark:text-slate-300">{promotion.details}</p>
                <p className="mt-4 text-xs text-slate-500 dark:text-slate-400">{promotion.expires}</p>
              </div>
            </article>
          </Reveal>
        ))}
      </section>

      <Reveal>
        <section className="rounded-3xl border border-[#c0392b]/30 bg-[#c0392b]/5 p-6 text-sm text-slate-700 dark:border-[#c0392b]/50 dark:bg-[#c0392b]/10 dark:text-slate-200">
          <p className="font-semibold text-[#1a2744] dark:text-slate-100">Need help choosing the right offer?</p>
          <p className="mt-2">Call our office at {contactPhone} and we'll walk you through available promotions based on your service needs.</p>
          <Link to="/quote" className="mt-4 inline-flex rounded-full bg-[#c0392b] px-4 py-2 font-semibold text-white transition hover:bg-[#a93226]">
            Claim Your Offer with a Quote
          </Link>
        </section>
      </Reveal>
    </div>
  )
}
