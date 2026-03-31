import { PageHero } from '../components/PageHero'
import { Reveal } from '../components/Reveal'
import { teamPreview, values } from '../data/siteContent'

export function AboutPage() {
  return (
    <div className="space-y-12">
      <PageHero
        title="Three Generations of Trusted Home Service"
        subtitle="Since 1953, the Rentmeister family has built a reputation for honest recommendations, skilled technicians, and lasting customer relationships."
      />

      <Reveal>
        <section className="grid gap-6 lg:grid-cols-[1.3fr_1fr]">
          <article className="rounded-3xl border border-slate-200 bg-white p-6 dark:border-slate-800 dark:bg-slate-900">
            <h2 className="text-2xl font-bold">Our Story</h2>
            <div className="mt-4 space-y-4 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
              <p>
                Rentmeister began in 1953 with a commitment to reliable heating and cooling service for local families. What started as a
                small family operation grew into a complete home service company trusted throughout northern Utah.
              </p>
              <p>
                Over the decades, we expanded into plumbing, electrical, and outdoor kitchen solutions so homeowners could rely on one
                team for the systems that matter most. Today, our third-generation leadership continues the same values that built our name.
              </p>
              <p>
                We believe service should feel personal — clear communication, fair recommendations, and workmanship we are proud to stand
                behind.
              </p>
            </div>
          </article>

          <article className="rounded-3xl border border-slate-200 bg-blue-50 p-6 dark:border-slate-800 dark:bg-slate-900">
            <h3 className="text-xl font-bold">Milestones</h3>
            <ul className="mt-4 space-y-3 text-sm text-slate-700 dark:text-slate-300">
              <li>
                <span className="font-semibold">1953:</span> Company founded in Utah.
              </li>
              <li>
                <span className="font-semibold">1980s:</span> Expanded into full HVAC and plumbing service.
              </li>
              <li>
                <span className="font-semibold">2000s:</span> Added electrical and specialty outdoor kitchen support.
              </li>
              <li>
                <span className="font-semibold">Today:</span> 4.7 Google rating with 991+ reviews and growing.
              </li>
            </ul>
          </article>
        </section>
      </Reveal>

      <Reveal>
        <section className="grid gap-4 md:grid-cols-3">
          {values.map((value) => (
            <article key={value.title} className="rounded-2xl border border-slate-200 bg-white p-5 dark:border-slate-800 dark:bg-slate-900">
              <value.icon className="text-amber-500" size={20} />
              <h3 className="mt-3 text-lg font-semibold">{value.title}</h3>
              <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">{value.copy}</p>
            </article>
          ))}
        </section>
      </Reveal>

      <Reveal>
        <section>
          <h2 className="text-2xl font-bold">Meet the Team</h2>
          <div className="mt-4 grid gap-4 md:grid-cols-3">
            {teamPreview.map((member) => (
              <article key={member.name} className="rounded-2xl border border-slate-200 bg-white p-5 dark:border-slate-800 dark:bg-slate-900">
                <p className="text-base font-semibold">{member.name}</p>
                <p className="text-sm text-amber-500">{member.role}</p>
                <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">{member.bio}</p>
              </article>
            ))}
          </div>
        </section>
      </Reveal>
    </div>
  )
}
