import { ArrowRight, BadgeCheck, Phone } from 'lucide-react'
import { Link } from 'react-router-dom'
import { ReviewCarousel } from '../components/ReviewCarousel'
import { Reveal } from '../components/Reveal'
import { TrustBadges } from '../components/TrustBadges'
import { services } from '../data/siteContent'

export function HomePage() {
  return (
    <div className="space-y-14">
      <Reveal>
        <section className="hero-gradient relative overflow-hidden rounded-3xl px-6 py-14 text-white shadow-2xl shadow-blue-950/25 sm:px-10 sm:py-16">
          <div className="relative z-10 max-w-3xl">
            <span className="inline-flex items-center gap-2 rounded-full bg-white/15 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-blue-50">
              <BadgeCheck size={14} />
              Trusted by Utah Families Since 1953
            </span>
            <h1 className="mt-5 text-3xl font-extrabold leading-tight sm:text-4xl lg:text-5xl">
              Comfortable Homes. Reliable Service. One Family Name for 3 Generations.
            </h1>
            <p className="mt-5 max-w-2xl text-sm leading-relaxed text-blue-100 sm:text-base">
              Rentmeister Total Home Service keeps homes running with expert HVAC, plumbing, electrical, and outdoor kitchen solutions
              across Davis, Weber, Morgan, and Salt Lake Counties.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/quote" className="rounded-full bg-amber-500 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-amber-400">
                Request a Quote
              </Link>
              <a
                href="tel:+18013994633"
                className="inline-flex items-center gap-2 rounded-full border border-white/40 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                <Phone size={16} />
                Call (801) 399-4633
              </a>
            </div>
          </div>
          <div className="absolute right-0 top-0 hidden h-full w-1/2 bg-gradient-to-l from-blue-400/15 to-transparent lg:block" />
        </section>
      </Reveal>

      <Reveal>
        <TrustBadges />
      </Reveal>

      <Reveal>
        <section className="grid gap-8 lg:grid-cols-[1.2fr_1fr]">
          <div>
            <h2 className="text-2xl font-bold sm:text-3xl">Complete Home Services Under One Trusted Roof</h2>
            <p className="mt-3 text-sm text-slate-600 dark:text-slate-300 sm:text-base">
              Our certified team is equipped for everyday repairs, preventive maintenance, and full system upgrades built to last.
            </p>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {services.map((service) => (
                <article key={service.title} className="card-gradient rounded-2xl border border-slate-200 p-5 dark:border-slate-800">
                  <service.icon className="text-amber-500" size={20} />
                  <h3 className="mt-3 text-base font-semibold">{service.title}</h3>
                  <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">{service.summary}</p>
                </article>
              ))}
            </div>
            <Link to="/services" className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-blue-500 hover:text-blue-400">
              Explore all services
              <ArrowRight size={16} />
            </Link>
          </div>

          <div>
            <p className="mb-4 text-sm font-semibold uppercase tracking-wider text-slate-500">Client Reviews</p>
            <ReviewCarousel />
            <div className="mt-4 rounded-2xl border border-slate-200 bg-white p-4 text-sm dark:border-slate-800 dark:bg-slate-900">
              <p className="font-semibold text-slate-800 dark:text-slate-100">4.7 ★ Google Rating · 991+ Reviews</p>
              <p className="mt-1 text-slate-600 dark:text-slate-300">
                Homeowners choose Rentmeister for dependable service, clear communication, and lasting results.
              </p>
            </div>
          </div>
        </section>
      </Reveal>

      <Reveal>
        <section className="rounded-3xl border border-slate-200 bg-white p-6 dark:border-slate-800 dark:bg-slate-900 sm:p-8">
          <div className="grid gap-6 md:grid-cols-[1.2fr_1fr] md:items-center">
            <div>
              <h2 className="text-2xl font-bold sm:text-3xl">A Family Story Built on Service Since 1953</h2>
              <p className="mt-4 text-sm text-slate-600 dark:text-slate-300 sm:text-base">
                For more than 70 years, Rentmeister has helped Utah families stay safe, comfortable, and confident in their homes.
                From routine maintenance to complex upgrades, we deliver service rooted in integrity and craftsmanship.
              </p>
              <Link
                to="/about"
                className="mt-5 inline-flex rounded-full border border-slate-300 px-5 py-2.5 text-sm font-semibold transition hover:bg-slate-100 dark:border-slate-700 dark:hover:bg-slate-800"
              >
                Meet the Team
              </Link>
            </div>
            <div className="rounded-2xl bg-blue-50 p-5 text-sm text-blue-900 dark:bg-slate-800 dark:text-blue-100">
              <p className="font-semibold">Serving Utah's Key Counties</p>
              <ul className="mt-3 space-y-2">
                <li>• Davis County</li>
                <li>• Weber County</li>
                <li>• Morgan County</li>
                <li>• Salt Lake County</li>
              </ul>
            </div>
          </div>
        </section>
      </Reveal>
    </div>
  )
}
