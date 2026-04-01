import { Link } from 'react-router-dom'
import { PageHero } from '../components/PageHero'
import { Reveal } from '../components/Reveal'
import { aboutMission, aboutStory, serviceAreaGroups, values } from '../data/siteContent'

export function AboutPage() {
  return (
    <div className="space-y-12">
      <PageHero
        title="Experienced & Reliable Service Since 1953"
        subtitle="Rentmeister describes itself as a locally-owned, family-run business that is three generations deep and committed to safe, comfortable homes across northern Utah."
      />

      <Reveal>
        <section className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
          <article className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm shadow-slate-300/60 sm:p-8">
            <h2 className="text-2xl font-bold text-[#1a2744]">Our Story</h2>
            <div className="mt-4 space-y-4 text-sm leading-relaxed text-slate-600 sm:text-base">
              {aboutStory.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>

            <h3 className="mt-8 text-xl font-bold text-[#1a2744]">Mission Statement</h3>
            <div className="mt-4 space-y-4 text-sm leading-relaxed text-slate-600 sm:text-base">
              {aboutMission.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </article>

          <article className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm shadow-slate-300/60 sm:p-8">
            <img src="/images/rentmeister/about-d9ca1cc3.jpg" alt="Rentmeister company story" className="h-56 w-full rounded-2xl object-cover" />
            <div className="mt-5 rounded-2xl bg-[#f5f5f5] p-5 text-sm text-slate-600">
              <p className="font-semibold text-[#1a2744]">The Motto</p>
              <p className="mt-2">“Our Family&apos;s Commitment to Your Family&apos;s Comfort”</p>
            </div>
            <div className="mt-5 rounded-2xl bg-[#c0392b]/5 p-5 text-sm text-slate-600">
              <p className="font-semibold text-[#1a2744]">Coverage Snapshot</p>
              <p className="mt-2">Rentmeister currently lists service throughout Davis, Weber, Morgan, and Salt Lake Counties.</p>
              <Link to="/service-areas" className="mt-4 inline-flex text-sm font-semibold text-[#1a2744] hover:text-[#c0392b]">
                View full service area list
              </Link>
            </div>
          </article>
        </section>
      </Reveal>

      <Reveal>
        <section className="grid gap-4 md:grid-cols-3">
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
        <section className="grid gap-6 lg:grid-cols-[1fr_1fr]">
          <article className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm shadow-slate-300/60">
            <h2 className="text-2xl font-bold text-[#1a2744]">Service Areas</h2>
            <p className="mt-3 text-sm text-slate-600">The about page on the live Rentmeister site lists cities across four northern Utah counties.</p>
            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              {serviceAreaGroups.map((group) => (
                <div key={group.county} className="rounded-2xl bg-[#f8fafc] p-4">
                  <p className="font-semibold text-[#1a2744]">{group.county}</p>
                  <p className="mt-1 text-sm text-slate-600">{group.cities.length} listed cities</p>
                </div>
              ))}
            </div>
            <Link to="/service-areas" className="mt-5 inline-flex text-sm font-semibold text-[#1a2744] hover:text-[#c0392b]">
              Browse every city →
            </Link>
          </article>

          <article className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm shadow-slate-300/60">
            <h2 className="text-2xl font-bold text-[#1a2744]">More About Rentmeister</h2>
            <div className="mt-4 space-y-4 text-sm text-slate-600">
              <div className="rounded-2xl bg-[#f8fafc] p-4">
                <p className="font-semibold text-[#1a2744]">Making a Difference</p>
                <p className="mt-2">See the company’s community page covering sponsorships, fundraising support, system giveaways, and The Christi Project.</p>
                <Link to="/making-a-difference" className="mt-3 inline-flex text-sm font-semibold text-[#1a2744] hover:text-[#c0392b]">
                  Open community page →
                </Link>
              </div>
              <div className="rounded-2xl bg-[#f8fafc] p-4">
                <p className="font-semibold text-[#1a2744]">Affiliations</p>
                <p className="mt-2">View the live-site partner and financing logos carried into this redesign.</p>
                <Link to="/affiliations" className="mt-3 inline-flex text-sm font-semibold text-[#1a2744] hover:text-[#c0392b]">
                  Open affiliations page →
                </Link>
              </div>
              <div className="rounded-2xl bg-[#f8fafc] p-4">
                <p className="font-semibold text-[#1a2744]">Reviews</p>
                <p className="mt-2">Read the current recent reviews that now appear in a full grid instead of a single-item carousel.</p>
                <Link to="/reviews" className="mt-3 inline-flex text-sm font-semibold text-[#1a2744] hover:text-[#c0392b]">
                  Open reviews →
                </Link>
              </div>
            </div>
          </article>
        </section>
      </Reveal>
    </div>
  )
}
