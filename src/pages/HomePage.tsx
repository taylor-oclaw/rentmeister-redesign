import { ArrowRight, Phone, Star } from 'lucide-react'
import { Link } from 'react-router-dom'
import { Reveal } from '../components/Reveal'
import { TrustBadges } from '../components/TrustBadges'
import { aboutStory, contactPhone, contactTel, homepageReviews, services } from '../data/siteContent'

export function HomePage() {
  return (
    <div>
      <Reveal>
        <section className="relative w-full overflow-hidden pt-20 text-white">
          <div className="absolute inset-0 overflow-hidden">
            <video
              className="absolute left-1/2 top-1/2 min-h-full min-w-full -translate-x-1/2 -translate-y-1/2 object-cover"
              autoPlay
              muted
              loop
              playsInline
              poster="/images/rentmeister/home-25b80a4a.jpg"
            >
              <source src="/images/hero-video.mp4" type="video/mp4" />
            </video>
          </div>
          <div className="absolute inset-0 bg-[#1a2744]/70" />

          <div className="relative z-10 mx-auto max-w-7xl px-6 py-24 sm:px-10 sm:py-32 lg:px-12 lg:py-40">
            <div className="max-w-3xl">
              <h1 className="text-3xl font-extrabold leading-tight sm:text-4xl lg:text-5xl xl:text-6xl">Experienced &amp; Reliable Service Since 1953</h1>
              <p className="mt-4 text-sm font-semibold uppercase tracking-wide text-[#e25d4f] sm:text-base lg:text-lg">
                Serving Davis, Weber, Morgan, and Salt Lake Counties
              </p>
              <p className="mt-5 max-w-2xl text-sm leading-relaxed text-slate-100 sm:text-base lg:text-lg">
                Local, family-run home service for plumbing, heating, air conditioning, electrical, indoor air quality, fireplaces, and outdoor kitchens.
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
              className="absolute right-6 top-28 z-20 hidden w-24 drop-shadow-2xl sm:block md:w-28 lg:right-12 lg:top-32 lg:w-32"
            />

            <div className="absolute bottom-6 right-6 z-20 rounded-2xl bg-white/95 px-4 py-3 text-slate-900 shadow-xl backdrop-blur sm:bottom-10 sm:right-10 lg:right-12">
              <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">Google Rating</p>
              <div className="mt-1 flex items-center gap-1 text-[#c0392b]">
                {Array.from({ length: 5 }).map((_, index) => (
                  <Star key={index} size={14} fill="currentColor" className={index === 4 ? 'opacity-60' : ''} />
                ))}
              </div>
              <p className="mt-1 text-sm font-semibold">4.5 / 5.0 from recent Rentmeister reviews</p>
            </div>
          </div>
        </section>
      </Reveal>

      <div className="mx-auto max-w-7xl space-y-14 px-4 py-14 sm:px-6 lg:px-8">
        <Reveal>
          <TrustBadges />
        </Reveal>

        <Reveal>
          <section>
            <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <h2 className="text-2xl font-bold text-[#1a2744] sm:text-3xl">Complete Home Services Under One Trusted Roof</h2>
                <p className="mt-3 max-w-3xl text-sm text-slate-600 sm:text-base">
                  Rentmeister’s live site highlights expertise in heating, cooling, plumbing, indoor air quality, electrical work, fireplaces, outdoor kitchens, and ongoing maintenance.
                </p>
              </div>
              <Link to="/services" className="inline-flex items-center gap-2 text-sm font-semibold text-[#1a2744] hover:text-[#0f172a]">
                Explore all services
                <ArrowRight size={16} />
              </Link>
            </div>

            <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
              {services.map((service) => (
                <Link key={service.title} to={service.href} className="group h-full rounded-3xl border border-slate-200 bg-white p-5 shadow-sm shadow-slate-300/60 transition hover:-translate-y-1 hover:shadow-md">
                  <img src={service.imageSrc} alt={service.title} className="h-40 w-full rounded-2xl object-cover" />
                  <div className="mt-5 inline-flex rounded-xl bg-[#c0392b]/15 p-3 text-[#c0392b]">
                    <service.icon size={22} />
                  </div>
                  <h3 className="mt-4 text-lg font-semibold text-[#1a2744] group-hover:text-[#c0392b]">{service.title}</h3>
                  <p className="mt-2 text-sm text-slate-600">{service.summary}</p>
                  <ul className="mt-4 space-y-2 text-sm text-slate-600">
                    {service.bullets.map((bullet) => (
                      <li key={bullet}>• {bullet}</li>
                    ))}
                  </ul>
                </Link>
              ))}
            </div>
          </section>
        </Reveal>

        <Reveal>
          <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm shadow-slate-300/60 sm:p-8">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <h2 className="text-2xl font-bold text-[#1a2744] sm:text-3xl">What Homeowners Are Saying</h2>
                <p className="mt-2 text-sm text-slate-600 sm:text-base">Three recent review cards from the real Rentmeister site, with the full review grid available on the reviews page.</p>
              </div>
              <Link to="/reviews" className="inline-flex items-center gap-2 text-sm font-semibold text-[#1a2744] hover:text-[#0f172a]">
                See All Reviews
                <ArrowRight size={16} />
              </Link>
            </div>

            <div className="mt-6 grid gap-5 lg:grid-cols-3">
              {homepageReviews.map((review) => (
                <article key={`${review.name}-${review.date}`} className="rounded-2xl border border-slate-200 bg-[#f8fafc] p-5">
                  <div className="flex items-center gap-1 text-[#c0392b]">
                    {Array.from({ length: review.stars }).map((_, i) => (
                      <Star key={i} size={16} fill="currentColor" />
                    ))}
                  </div>
                  <p className="mt-4 text-sm leading-relaxed text-slate-600">“{review.text}”</p>
                  <div className="mt-4 border-t border-slate-200 pt-4">
                    <p className="text-sm font-semibold text-[#1a2744]">{review.name}</p>
                    <p className="text-xs uppercase tracking-wider text-slate-500">{review.date}</p>
                  </div>
                </article>
              ))}
            </div>
          </section>
        </Reveal>

        <Reveal>
          <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm shadow-slate-300/60 sm:p-8">
            <div className="grid gap-6 md:grid-cols-[1.2fr_1fr] md:items-center">
              <div>
                <h2 className="text-2xl font-bold text-[#1a2744] sm:text-3xl">Serving Northern Utah Families Since 1953</h2>
                <div className="mt-4 space-y-4 text-sm text-slate-600 sm:text-base">
                  {aboutStory.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
                <Link
                  to="/about"
                  className="mt-5 inline-flex rounded-full border border-slate-300 px-5 py-2.5 text-sm font-semibold transition hover:bg-slate-100"
                >
                  Learn More About Rentmeister
                </Link>
              </div>
              <img
                src="/images/rentmeister/about-a40065ca.jpg"
                alt="Rentmeister team and company history"
                className="h-64 w-full rounded-2xl object-cover"
              />
            </div>
          </section>
        </Reveal>
      </div>
    </div>
  )
}
