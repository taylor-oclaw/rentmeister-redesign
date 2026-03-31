import { Link } from 'react-router-dom'
import { PageHero } from '../components/PageHero'
import { Reveal } from '../components/Reveal'
import { promotions } from '../data/siteContent'

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
            <article className="h-full rounded-2xl border border-slate-200 bg-white p-6 dark:border-slate-800 dark:bg-slate-900">
              <p className="text-xs font-semibold uppercase tracking-wider text-amber-500">Limited Offer</p>
              <h2 className="mt-3 text-xl font-bold">{promotion.title}</h2>
              <p className="mt-3 text-sm text-slate-600 dark:text-slate-300">{promotion.details}</p>
              <p className="mt-4 text-xs text-slate-500 dark:text-slate-400">{promotion.expires}</p>
            </article>
          </Reveal>
        ))}
      </section>

      <Reveal>
        <section className="rounded-3xl border border-amber-300/50 bg-amber-50 p-6 text-sm text-amber-900 dark:border-amber-500/40 dark:bg-amber-500/10 dark:text-amber-100">
          <p className="font-semibold">Need help choosing the right offer?</p>
          <p className="mt-2">
            Call our office at (801) 399-4633 and we'll walk you through available promotions based on your home service needs.
          </p>
          <Link to="/quote" className="mt-4 inline-flex rounded-full bg-amber-500 px-4 py-2 font-semibold text-slate-950 transition hover:bg-amber-400">
            Claim Your Offer with a Quote
          </Link>
        </section>
      </Reveal>
    </div>
  )
}
