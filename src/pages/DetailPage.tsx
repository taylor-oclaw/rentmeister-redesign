import { Link } from 'react-router-dom'
import { PageHero } from '../components/PageHero'
import { Reveal } from '../components/Reveal'
import { contactPhone, contactTel, type DetailPageConfig } from '../data/siteContent'

export function DetailPage({ page }: { page: DetailPageConfig }) {
  return (
    <div className="space-y-12">
      <PageHero title={page.title} subtitle={page.subtitle} />

      <Reveal>
        <section className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <article className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm shadow-slate-300/60 sm:p-8">
            <h2 className="text-2xl font-bold text-[#1a2744]">Overview</h2>
            <div className="mt-4 space-y-4 text-sm leading-relaxed text-slate-600 sm:text-base">
              {page.intro.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>

            {page.highlights?.length ? (
              <div className="mt-6 rounded-2xl bg-[#f5f5f5] p-5">
                <h3 className="text-sm font-semibold uppercase tracking-wider text-[#1a2744]">Highlights</h3>
                <ul className="mt-3 grid gap-2 text-sm text-slate-700 sm:grid-cols-2">
                  {page.highlights.map((highlight) => (
                    <li key={highlight}>• {highlight}</li>
                  ))}
                </ul>
              </div>
            ) : null}
          </article>

          <img src={page.imageSrc} alt={page.title} className="h-72 w-full rounded-3xl object-cover shadow-sm shadow-slate-300/60 sm:h-96" />
        </section>
      </Reveal>

      {page.logoGrid?.length ? (
        <Reveal>
          <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm shadow-slate-300/60 sm:p-8">
            <h2 className="text-2xl font-bold text-[#1a2744]">Affiliation Logos</h2>
            <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {page.logoGrid.map((logo, index) => (
                <article key={logo} className="flex min-h-28 items-center justify-center rounded-2xl border border-slate-200 bg-[#f8fafc] p-4">
                  <img src={logo} alt={`Affiliation logo ${index + 1}`} className="max-h-16 w-full object-contain" />
                </article>
              ))}
            </div>
          </section>
        </Reveal>
      ) : null}

      <section className="grid gap-6 md:grid-cols-2">
        {page.sections.map((section) => (
          <Reveal key={section.title}>
            <article className="h-full rounded-3xl border border-slate-200 bg-white p-6 shadow-sm shadow-slate-300/60">
              <h2 className="text-xl font-bold text-[#1a2744]">{section.title}</h2>
              <div className="mt-4 space-y-4 text-sm leading-relaxed text-slate-600">
                {section.content.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
              {section.bullets?.length ? (
                <ul className="mt-5 grid gap-2 text-sm text-slate-700 sm:grid-cols-2">
                  {section.bullets.map((bullet) => (
                    <li key={bullet}>• {bullet}</li>
                  ))}
                </ul>
              ) : null}
            </article>
          </Reveal>
        ))}
      </section>

      <Reveal>
        <section className="rounded-3xl border border-[#c0392b]/25 bg-[#c0392b]/5 p-6 shadow-sm shadow-slate-300/60 sm:p-8">
          <h2 className="text-2xl font-bold text-[#1a2744]">Need Help With {page.title}?</h2>
          <p className="mt-3 text-sm text-slate-600 sm:text-base">
            Call Rentmeister at {contactPhone} or send a request online and the team can help you talk through the right next step for your home.
          </p>
          <div className="mt-5 flex flex-wrap gap-3">
            <Link to="/quote" className="rounded-full bg-[#c0392b] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#a93226]">
              Request a Quote
            </Link>
            <a
              href={`tel:${contactTel}`}
              className="rounded-full border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-[#1a2744] transition hover:bg-slate-100"
            >
              Call {contactPhone}
            </a>
          </div>
        </section>
      </Reveal>
    </div>
  )
}
