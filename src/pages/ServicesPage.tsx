import { Link } from 'react-router-dom'
import { PageHero } from '../components/PageHero'
import { Reveal } from '../components/Reveal'
import { services } from '../data/siteContent'

export function ServicesPage() {
  return (
    <div className="space-y-12">
      <PageHero
        title="Home Services Designed for Utah Homes"
        subtitle="Whether you need same-day repairs or planned upgrades, our licensed team delivers dependable service for every major system in your home."
      />

      <section className="grid gap-6 md:grid-cols-2">
        {services.map((service, idx) => (
          <Reveal key={service.title} className="float-in" >
            <article className="h-full rounded-3xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900">
              <div className="inline-flex rounded-xl bg-amber-500/15 p-3 text-amber-500">
                <service.icon size={22} />
              </div>
              <h2 className="mt-4 text-xl font-bold">{service.title}</h2>
              <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">{service.summary}</p>
              <ul className="mt-4 space-y-2 text-sm text-slate-600 dark:text-slate-300">
                {service.bullets.map((bullet) => (
                  <li key={bullet}>• {bullet}</li>
                ))}
              </ul>
              <p className="mt-4 text-xs uppercase tracking-wider text-slate-500">Service #{String(idx + 1).padStart(2, '0')}</p>
            </article>
          </Reveal>
        ))}
      </section>

      <section className="rounded-3xl border border-slate-200 bg-white p-8 text-center dark:border-slate-800 dark:bg-slate-900">
        <h3 className="text-2xl font-bold">Not Sure What You Need?</h3>
        <p className="mt-3 text-sm text-slate-600 dark:text-slate-300">
          Tell us what you're experiencing and we'll recommend the right service path for your home and budget.
        </p>
        <Link to="/quote" className="mt-5 inline-flex rounded-full bg-amber-500 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-amber-400">
          Get a Personalized Quote
        </Link>
      </section>
    </div>
  )
}
