import { PageHero } from '../components/PageHero'
import { Reveal } from '../components/Reveal'
import { careerOpenings } from '../data/siteContent'

export function CareersPage() {
  return (
    <div className="space-y-12">
      <PageHero
        title="Build Your Career with Rentmeister"
        subtitle="We're always looking for service-minded professionals who take pride in craftsmanship, customer care, and teamwork."
      />

      <section className="grid gap-4 md:grid-cols-3">
        {careerOpenings.map((opening) => (
          <Reveal key={opening.title}>
            <article className="h-full rounded-2xl border border-slate-200 bg-white p-6 shadow-sm shadow-slate-300/60">
              <p className="text-xs uppercase tracking-wider text-[#c0392b]">Open Position</p>
              <h2 className="mt-3 text-lg font-bold text-[#1a2744]">{opening.title}</h2>
              <p className="mt-1 text-sm text-slate-500">{opening.type}</p>
              <p className="mt-3 text-sm text-slate-600">{opening.description}</p>
              <a
                href="https://www.rentmeister.com/careers"
                target="_blank"
                rel="noreferrer"
                className="mt-4 inline-flex text-sm font-semibold text-[#1a2744] hover:text-[#c0392b]"
              >
                View Careers Page
              </a>
            </article>
          </Reveal>
        ))}
      </section>

      <section className="rounded-3xl border border-slate-200 bg-white p-6 text-sm text-slate-600 shadow-sm shadow-slate-300/60">
        <p className="font-semibold text-[#1a2744]">Why Work With Us?</p>
        <p className="mt-2">
          At Rentmeister, you join a long-standing local company known for treating customers and employees with respect. We support growth,
          technical training, and a culture where great work is recognized.
        </p>
      </section>
    </div>
  )
}
