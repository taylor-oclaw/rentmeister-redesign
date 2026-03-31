import { Link } from 'react-router-dom'
import { PageHero } from '../components/PageHero'
import { Reveal } from '../components/Reveal'
import { contactPhone, services } from '../data/siteContent'

const serviceGroups = [
  {
    id: 'heating-air',
    title: 'Heating & Air',
    items: [
      { id: 'heating', label: 'Heating' },
      { id: 'air-conditioning', label: 'Air Conditioning' },
      { id: 'commercial-hvac', label: 'Commercial HVAC' },
      { id: 'indoor-air-quality', label: 'Indoor Air Quality' },
      { id: 'fireplaces', label: 'Fireplaces' },
    ],
  },
  {
    id: 'plumbing',
    title: 'Plumbing',
    items: [
      { id: 'water-heater', label: 'Water Heater' },
      { id: 'clean-water', label: 'Clean Water' },
      { id: 'kitchen-bathroom', label: 'Kitchen & Bathroom' },
      { id: 'pipes-sewers', label: 'Pipes & Sewers' },
      { id: 'plumbing-commercial', label: 'Commercial' },
      { id: 'new-construction', label: 'New Construction' },
    ],
  },
  {
    id: 'electrical',
    title: 'Electrical',
    items: [
      { id: 'electrical-services', label: 'Electrical Services' },
      { id: 'lighting', label: 'Lighting' },
      { id: 'generators', label: 'Generators' },
      { id: 'outlets-surge', label: 'Outlets & Surge Protectors' },
      { id: 'ceiling-fans', label: 'Ceiling Fans' },
      { id: 'electrical-panels', label: 'Electrical Panels' },
    ],
  },
]

export function ServicesPage() {
  return (
    <div className="space-y-12">
      <PageHero
        title="Home Services Designed for Utah Homes"
        subtitle="Whether you need same-day repairs or planned upgrades, our licensed team delivers dependable service for every major system in your home."
      />

      <section className="grid gap-6 md:grid-cols-2">
        {services.map((service, idx) => (
          <Reveal key={service.title} className="float-in">
            <article className="h-full rounded-3xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900">
              <div className="inline-flex rounded-xl bg-[#c0392b]/15 p-3 text-[#c0392b]">
                <service.icon size={22} />
              </div>
              <h2 className="mt-4 text-xl font-bold text-[#1a2744] dark:text-slate-100">{service.title}</h2>
              <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">{service.summary}</p>
              <ul className="mt-4 space-y-2 text-sm text-slate-600 dark:text-slate-300">
                {service.bullets.map((bullet) => (
                  <li key={bullet}>• {bullet}</li>
                ))}
              </ul>
              <p className="mt-4 text-xs uppercase tracking-wider text-slate-500">Service #{String(idx + 1).padStart(2, '0')}</p>
            </article>
          </Reveal>
        ))}
      </section>

      <Reveal>
        <section id="fireplaces" className="scroll-mt-28 rounded-3xl border border-slate-200 bg-white p-6 dark:border-slate-800 dark:bg-slate-900">
          <div className="grid gap-5 md:grid-cols-[1.2fr_1fr] md:items-center">
            <div>
              <h3 className="text-2xl font-bold text-[#1a2744] dark:text-slate-100">Fireplaces & Indoor Comfort</h3>
              <p className="mt-3 text-sm text-slate-600 dark:text-slate-300">
                From fireplace service to complete comfort upgrades, we help your family enjoy efficient and safe heating all season.
              </p>
            </div>
            <img src="/images/fireplace.jpg" alt="Modern fireplace in a comfortable home" className="h-56 w-full rounded-2xl object-cover" />
          </div>
        </section>
      </Reveal>

      <Reveal>
        <section id="outdoor-kitchens" className="scroll-mt-28 rounded-3xl border border-slate-200 bg-white p-6 dark:border-slate-800 dark:bg-slate-900">
          <div className="grid gap-5 md:grid-cols-[1fr_1.2fr] md:items-center">
            <img src="/images/outdoor-kitchen.jpg" alt="Outdoor kitchen installation" className="h-56 w-full rounded-2xl object-cover" />
            <div>
              <h3 className="text-2xl font-bold text-[#1a2744] dark:text-slate-100">Outdoor Kitchens</h3>
              <p className="mt-3 text-sm text-slate-600 dark:text-slate-300">
                We design and support outdoor kitchens with integrated plumbing, gas, and electrical for year-round enjoyment.
              </p>
            </div>
          </div>
        </section>
      </Reveal>

      <section className="grid gap-5 lg:grid-cols-3">
        {serviceGroups.map((group) => (
          <Reveal key={group.id}>
            <article id={group.id} className="scroll-mt-28 rounded-3xl border border-slate-200 bg-white p-6 dark:border-slate-800 dark:bg-slate-900">
              <h3 className="text-lg font-bold text-[#1a2744] dark:text-slate-100">{group.title}</h3>
              <ul className="mt-3 space-y-2 text-sm text-slate-600 dark:text-slate-300">
                {group.items.map((item) => (
                  <li key={item.id} id={item.id} className="scroll-mt-28">
                    • {item.label}
                  </li>
                ))}
              </ul>
            </article>
          </Reveal>
        ))}
      </section>

      <section id="maintenance-program" className="scroll-mt-28 rounded-3xl border border-slate-200 bg-white p-8 text-center dark:border-slate-800 dark:bg-slate-900">
        <h3 className="text-2xl font-bold text-[#1a2744] dark:text-slate-100">Maintenance Program</h3>
        <p className="mt-3 text-sm text-slate-600 dark:text-slate-300">
          Ask about seasonal maintenance plans that keep your systems running efficiently and help prevent costly breakdowns.
        </p>
        <Link to="/quote" className="mt-5 inline-flex rounded-full bg-[#c0392b] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#a93226]">
          Call {contactPhone} or Request Service
        </Link>
      </section>
    </div>
  )
}
