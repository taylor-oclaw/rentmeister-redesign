interface PageHeroProps {
  title: string
  subtitle: string
}

export function PageHero({ title, subtitle }: PageHeroProps) {
  return (
    <section className="hero-gradient relative overflow-hidden rounded-3xl px-6 py-16 text-white shadow-2xl shadow-blue-950/30 sm:px-10">
      <div className="relative z-10 max-w-3xl">
        <p className="mb-3 inline-flex rounded-full bg-white/15 px-3 py-1 text-xs font-semibold uppercase tracking-wider">
          Rentmeister Total Home Service
        </p>
        <h1 className="text-3xl font-extrabold leading-tight sm:text-4xl md:text-5xl">{title}</h1>
        <p className="mt-4 max-w-2xl text-sm text-blue-100 sm:text-base">{subtitle}</p>
      </div>
      <div className="absolute inset-0 bg-gradient-to-tr from-slate-950/50 to-transparent" aria-hidden />
    </section>
  )
}
