import { Link } from 'react-router-dom'

export function NotFoundPage() {
  return (
    <section className="flex min-h-[55vh] flex-col items-center justify-center text-center">
      <p className="text-sm uppercase tracking-wider text-slate-500">404</p>
      <h1 className="mt-2 text-3xl font-bold">Page Not Found</h1>
      <p className="mt-3 max-w-md text-sm text-slate-600 dark:text-slate-300">
        The page you're looking for may have moved. Head back home or request help from our team.
      </p>
      <Link to="/" className="mt-6 rounded-full bg-amber-500 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-amber-400">
        Go to Home
      </Link>
    </section>
  )
}
