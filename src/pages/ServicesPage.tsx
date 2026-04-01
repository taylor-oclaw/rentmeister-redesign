import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { PageHero } from '../components/PageHero'
import { Reveal } from '../components/Reveal'
import { serviceCategories } from '../data/siteContent'

export function ServicesPage() {
  return (
    <div className="space-y-12">
      <PageHero
        title="Home Services Designed for Utah Homes"
        subtitle="The redesigned services hub now mirrors Rentmeister’s real offerings with category descriptions pulled from the live site and direct links into every supported sub-page."
      />

      {serviceCategories.map((category, index) => (
        <Reveal key={category.id}>
          <section id={category.id} className="scroll-mt-28 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm shadow-slate-300/60 sm:p-8">
            <div className="grid gap-6 lg:grid-cols-[1fr_1.1fr] lg:items-center">
              <div className={index % 2 === 1 ? 'lg:order-2' : undefined}>
                <img src={category.imageSrc} alt={category.title} className="h-64 w-full rounded-3xl object-cover" />
              </div>

              <div className={index % 2 === 1 ? 'lg:order-1' : undefined}>
                <div className="inline-flex rounded-xl bg-[#c0392b]/15 p-3 text-[#c0392b]">
                  <category.icon size={22} />
                </div>
                <h2 className="mt-4 text-2xl font-bold text-[#1a2744] sm:text-3xl">{category.title}</h2>
                <p className="mt-4 text-sm leading-relaxed text-slate-600 sm:text-base">{category.intro}</p>
                <Link to={category.href} className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[#1a2744] hover:text-[#0f172a]">
                  Open {category.title}
                  <ArrowRight size={16} />
                </Link>
              </div>
            </div>

            <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
              {category.items.map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  className="group rounded-2xl border border-slate-200 bg-[#f8fafc] p-5 transition hover:-translate-y-1 hover:border-[#c0392b]/30 hover:shadow-sm"
                >
                  <p className="text-base font-semibold text-[#1a2744] group-hover:text-[#c0392b]">{item.label}</p>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">{item.summary}</p>
                  <span className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-[#1a2744]">
                    View details
                    <ArrowRight size={15} />
                  </span>
                </Link>
              ))}
            </div>
          </section>
        </Reveal>
      ))}
    </div>
  )
}
