import { trustBadges } from '../data/siteContent'

export function TrustBadges() {
  return (
    <section className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {trustBadges.map((badge) => (
        <article
          key={badge.label}
          className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-white px-4 py-4 shadow-sm dark:border-slate-800 dark:bg-slate-900"
        >
          <badge.icon className="text-amber-500" size={20} />
          <p className="text-sm font-semibold text-slate-700 dark:text-slate-100">{badge.label}</p>
        </article>
      ))}
    </section>
  )
}
