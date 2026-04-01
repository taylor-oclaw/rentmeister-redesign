import { PageHero } from '../components/PageHero'
import { Reveal } from '../components/Reveal'
import { serviceAreas, teamPreview, values } from '../data/siteContent'

export function AboutPage() {
  return (
    <div className="space-y-12">
      <PageHero
        title="Experienced & Reliable Service Since 1953"
        subtitle="Rentmeister has served generations of Utah families with honest recommendations, skilled technicians, and dependable workmanship."
      />

      <Reveal>
        <section className="grid gap-6 lg:grid-cols-[1.3fr_1fr]">
          <article className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm shadow-slate-300/60">
            <h2 className="text-2xl font-bold text-[#1a2744]">Our Story</h2>
            <div className="mt-4 space-y-4 text-sm leading-relaxed text-slate-600">
              <p>
                Rentmeister began in 1953 with a commitment to dependable heating and cooling service for local families. Over time, that
                same commitment expanded into plumbing, electrical, fireplaces, and outdoor kitchens.
              </p>
              <p>
                Today, our team continues that family tradition with professional service, clear communication, and workmanship we are proud
                to stand behind.
              </p>
            </div>
            <img
              src="/images/technician.jpg"
              alt="Rentmeister technician servicing HVAC equipment"
              className="mt-5 h-64 w-full rounded-2xl object-cover"
            />
          </article>

          <article className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm shadow-slate-300/60">
            <h3 className="text-xl font-bold text-[#1a2744]">Milestones</h3>
            <ul className="mt-4 space-y-3 text-sm text-slate-700">
              <li>
                <span className="font-semibold">1953:</span> Rentmeister is founded in Utah.
              </li>
              <li>
                <span className="font-semibold">1980s:</span> Expanded into full heating, cooling, and plumbing service.
              </li>
              <li>
                <span className="font-semibold">2000s:</span> Added electrical and outdoor kitchen specialties.
              </li>
              <li>
                <span className="font-semibold">Today:</span> 4.7 Google rating with 991+ reviews.
              </li>
            </ul>
          </article>
        </section>
      </Reveal>

      <Reveal>
        <section id="making-a-difference" className="grid gap-4 md:grid-cols-3 scroll-mt-28">
          {values.map((value) => (
            <article key={value.title} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm shadow-slate-300/60">
              <value.icon className="text-[#c0392b]" size={20} />
              <h3 className="mt-3 text-lg font-semibold text-[#1a2744]">{value.title}</h3>
              <p className="mt-2 text-sm text-slate-600">{value.copy}</p>
            </article>
          ))}
        </section>
      </Reveal>

      <Reveal>
        <section>
          <h2 className="text-2xl font-bold text-[#1a2744]">Meet the Team</h2>
          <div className="mt-4 grid gap-4 md:grid-cols-3">
            {teamPreview.map((member) => (
              <article key={member.name} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm shadow-slate-300/60">
                <p className="text-base font-semibold">{member.name}</p>
                <p className="text-sm text-[#c0392b]">{member.role}</p>
                <p className="mt-2 text-sm text-slate-600">{member.bio}</p>
              </article>
            ))}
          </div>
        </section>
      </Reveal>

      <Reveal>
        <section id="service-areas" className="scroll-mt-28 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm shadow-slate-300/60">
          <h3 className="text-xl font-bold text-[#1a2744]">Service Areas</h3>
          <ul className="mt-3 grid gap-2 text-sm text-slate-600 sm:grid-cols-2">
            {serviceAreas.map((area) => (
              <li key={area}>• {area}</li>
            ))}
          </ul>
        </section>
      </Reveal>

      <Reveal>
        <section id="satisfaction-survey" className="scroll-mt-28 rounded-3xl border border-slate-200 bg-white p-6 text-sm text-slate-600 shadow-sm shadow-slate-300/60">
          <p className="font-semibold text-[#1a2744]">Satisfaction Survey</p>
          <p className="mt-2">
            Your feedback helps us keep improving. After service, our office follows up to ensure your experience was excellent from start to
            finish.
          </p>
        </section>
      </Reveal>

      <Reveal>
        <section id="affiliations" className="scroll-mt-28 rounded-3xl border border-slate-200 bg-white p-6 text-sm text-slate-600 shadow-sm shadow-slate-300/60">
          <p className="font-semibold text-[#1a2744]">Affiliations</p>
          <p className="mt-2">
            Rentmeister partners with trusted manufacturers and local organizations to deliver reliable home comfort and support the community.
          </p>
        </section>
      </Reveal>
    </div>
  )
}
