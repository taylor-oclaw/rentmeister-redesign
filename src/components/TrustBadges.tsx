import { trustBadges } from '../data/siteContent'

export function TrustBadges() {
  return (
    <section className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {trustBadges.map((badge) => (
        <article
          key={badge.label}
          className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-white px-4 py-4 shadow-sm"
        >
          {badge.imageSrc ? (
            <img src={badge.imageSrc} alt={badge.label} className="h-11 w-11 rounded-md object-contain" />
          ) : (
            <badge.icon className="text-[#c0392b]" size={20} />
          )}
          <p className="text-sm font-semibold text-[#333333]">{badge.label}</p>
        </article>
      ))}
    </section>
  )
}
