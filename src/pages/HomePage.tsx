import { ArrowRight, Phone, Star } from 'lucide-react'
import { Link } from 'react-router-dom'
import { ReviewCarousel } from '../components/ReviewCarousel'
import { Reveal } from '../components/Reveal'
import { TrustBadges } from '../components/TrustBadges'
import { contactPhone, contactTel, services } from '../data/siteContent'

export function HomePage() {
  return (
    <div className="space-y-14">
      <Reveal>
        <section className="relative left-1/2 right-1/2 -mx-[50vw] w-screen overflow-hidden text-white shadow-2xl shadow-[#1a2744]/35">
          {/* Video background — same video as original rentmeister.com */}
          <div className="absolute inset-0 overflow-hidden">
            <video
              className="absolute left-1/2 top-1/2 min-h-full min-w-full -translate-x-1/2 -translate-y-1/2 object-cover"
              autoPlay
              muted
              loop
              playsInline
              poster="/images/team-hero.jpg"
            >
              <source src="/images/hero-video.mp4" type="video/mp4" />
            </video>
          </div>
          {/* Dark overlay */}
          <div className="absolute inset-0 bg-[#1a2744]/70" />

          <div className="relative z-10 mx-auto max-w-7xl px-6 py-24 sm:px-10 sm:py-32 lg:px-12 lg:py-40">
            <div className="max-w-3xl">
              <h1 className="text-3xl font-extrabold leading-tight sm:text-4xl lg:text-5xl xl:text-6xl">Experienced &amp; Reliable Service Since 1953</h1>
              <p className="mt-4 text-sm font-semibold uppercase tracking-wide text-[#e25d4f] sm:text-base lg:text-lg">
                Serving Davis, Weber, Morgan, and Salt Lake Counties
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <Link to="/quote" className="rounded-full bg-[#c0392b] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#a93226] sm:px-8 sm:py-4 sm:text-base">
                  GET A QUOTE
                </Link>
                <a
                  href={`tel:${contactTel}`}
                  className="inline-flex items-center gap-2 rounded-full border border-white/40 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/10 sm:px-6 sm:py-4 sm:text-base"
                >
                  <Phone size={16} />
                  Call {contactPhone}
                </a>
              </div>
            </div>

            <img
              src="/images/best-of-davis-badge.png"
              alt="Best of Davis County badge"
              className="absolute right-6 top-6 z-20 hidden w-24 drop-shadow-2xl sm:block md:w-28 lg:right-12 lg:top-10 lg:w-32"
            />

            <div className="absolute bottom-6 right-6 z-20 rounded-2xl bg-white/95 px-4 py-3 text-slate-900 shadow-xl backdrop-blur sm:bottom-10 sm:right-10 lg:right-12">
              <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">Google Rating</p>
              <div className="mt-1 flex items-center gap-1 text-[#c0392b]">
                {Array.from({ length: 5 }).map((_, index) => (
                  <Star key={index} size={14} fill="currentColor" />
                ))}
              </div>
              <p className="mt-1 text-sm font-semibold">4.7 stars · 991 reviews</p>
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
            <h2 className="text-2xl font-bold text-[#1a2744] sm:text-3xl">Complete Home Services Under One Trusted Roof</h2>
            <p className="mt-3 text-sm text-slate-600 sm:text-base">
              Heating, air conditioning, plumbing, electrical, fireplaces, and outdoor kitchens — all backed by trusted local service.
            </p>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {services.map((service) => (
                <article key={service.title} className="card-gradient rounded-2xl border border-slate-200 p-5 shadow-sm shadow-slate-300/60">
                  <service.icon className="text-[#c0392b]" size={20} />
                  <h3 className="mt-3 text-base font-semibold text-[#1a2744]">{service.title}</h3>
                  <p className="mt-2 text-sm text-slate-600">{service.summary}</p>
                </article>
              ))}
            </div>
            <Link to="/services" className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[#1a2744] hover:text-[#0f172a]">
              Explore all services
              <ArrowRight size={16} />
            </Link>
          </div>

          <div>
            <p className="mb-4 text-sm font-semibold uppercase tracking-wider text-slate-500">Client Reviews</p>
            <ReviewCarousel />
            <div className="mt-4 rounded-2xl border border-slate-200 bg-white p-4 text-sm shadow-sm shadow-slate-300/60">
              <p className="font-semibold text-slate-800">4.7 ★ Google Rating · 991+ Reviews</p>
              <p className="mt-1 text-slate-600">
                Homeowners choose Rentmeister for dependable service, clear communication, and long-term comfort.
              </p>
            </div>
          </div>
        </section>
      </Reveal>

      <Reveal>
        <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm shadow-slate-300/60 sm:p-8">
          <div className="grid gap-6 md:grid-cols-[1.2fr_1fr] md:items-center">
            <div>
              <h2 className="text-2xl font-bold text-[#1a2744] sm:text-3xl">Serving Northern Utah Families Since 1953</h2>
              <p className="mt-4 text-sm text-slate-600 sm:text-base">
                For over 70 years, Rentmeister has helped families stay safe and comfortable with experienced professionals and reliable
                workmanship.
              </p>
              <Link
                to="/about"
                className="mt-5 inline-flex rounded-full border border-slate-300 px-5 py-2.5 text-sm font-semibold transition hover:bg-slate-100"
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
