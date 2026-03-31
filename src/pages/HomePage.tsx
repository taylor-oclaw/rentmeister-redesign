import { ArrowRight, BadgeCheck, Phone } from 'lucide-react'
import { Link } from 'react-router-dom'
import { ReviewCarousel } from '../components/ReviewCarousel'
import { Reveal } from '../components/Reveal'
import { TrustBadges } from '../components/TrustBadges'
import { contactPhone, contactTel, familyPledge, serviceSubtitle, services, tagline } from '../data/siteContent'

export function HomePage() {
  return (
    <div className="space-y-14">
      <Reveal>
        <section className="hero-banner relative overflow-hidden rounded-3xl px-6 py-14 text-white shadow-2xl shadow-[#1a2744]/25 sm:px-10 sm:py-16">
          <div className="relative z-10 max-w-3xl">
            <span className="inline-flex items-center gap-2 rounded-full bg-white/15 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-slate-100">
              <BadgeCheck size={14} />
              {tagline}
            </span>
            <h1 className="mt-5 text-3xl font-extrabold leading-tight sm:text-4xl lg:text-5xl">{familyPledge}</h1>
            <p className="mt-4 max-w-2xl text-sm leading-relaxed text-slate-100 sm:text-base">{serviceSubtitle}</p>
            <p className="mt-2 text-sm font-semibold text-slate-100">Google Rating: 4.7 stars · 991+ reviews</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/quote" className="rounded-full bg-[#c0392b] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#a93226]">
                Contact Us Today
              </Link>
              <a
                href={`tel:${contactTel}`}
                className="inline-flex items-center gap-2 rounded-full border border-white/40 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                <Phone size={16} />
                Call {contactPhone}
              </a>
            </div>
          </div>
        </section>
      </Reveal>

      <Reveal>
        <TrustBadges />
      </Reveal>

      <Reveal>
        <section className="grid gap-8 lg:grid-cols-[1.2fr_1fr]">
          <div>
            <h2 className="text-2xl font-bold text-[#1a2744] dark:text-slate-100 sm:text-3xl">Complete Home Services Under One Trusted Roof</h2>
            <p className="mt-3 text-sm text-slate-600 dark:text-slate-300 sm:text-base">
              Heating, air conditioning, plumbing, electrical, fireplaces, and outdoor kitchens — all backed by trusted local service.
            </p>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {services.map((service) => (
                <article key={service.title} className="card-gradient rounded-2xl border border-slate-200 p-5 dark:border-slate-800">
                  <service.icon className="text-[#c0392b]" size={20} />
                  <h3 className="mt-3 text-base font-semibold text-[#1a2744] dark:text-slate-100">{service.title}</h3>
                  <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">{service.summary}</p>
                </article>
              ))}
            </div>
            <Link to="/services" className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[#1a2744] hover:text-[#0f172a] dark:text-slate-200 dark:hover:text-white">
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
                Homeowners choose Rentmeister for dependable service, clear communication, and long-term comfort.
              </p>
            </div>
          </div>
        </section>
      </Reveal>

      <Reveal>
        <section className="rounded-3xl border border-slate-200 bg-white p-6 dark:border-slate-800 dark:bg-slate-900 sm:p-8">
          <div className="grid gap-6 md:grid-cols-[1.2fr_1fr] md:items-center">
            <div>
              <h2 className="text-2xl font-bold text-[#1a2744] dark:text-slate-100 sm:text-3xl">Serving Northern Utah Families Since 1953</h2>
              <p className="mt-4 text-sm text-slate-600 dark:text-slate-300 sm:text-base">
                For over 70 years, Rentmeister has helped families stay safe and comfortable with experienced professionals and reliable
                workmanship.
              </p>
              <Link
                to="/about"
                className="mt-5 inline-flex rounded-full border border-slate-300 px-5 py-2.5 text-sm font-semibold transition hover:bg-slate-100 dark:border-slate-700 dark:hover:bg-slate-800"
              >
                Learn More About Our Team
              </Link>
            </div>
            <img
              src="/images/outdoor-kitchen.jpg"
              alt="Outdoor kitchen installation"
              className="h-64 w-full rounded-2xl object-cover"
            />
          </div>
        </section>
      </Reveal>
    </div>
  )
}
