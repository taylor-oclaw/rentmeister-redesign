import { Link } from 'react-router-dom'

export function NotFoundPage() {
  return (
    <section className="flex min-h-[55vh] flex-col items-center justify-center text-center">
      <p className="text-sm uppercase tracking-wider text-slate-500">404</p>
      <h1 className="mt-2 text-3xl font-bold text-[#1a2744] dark:text-slate-100">Page Not Found</h1>
      <p className="mt-3 max-w-md text-sm text-slate-600 dark:text-slate-300">
        The page you're looking for may have moved. Head back home or request help from our team.
      </p>
      <Link to="/" className="mt-6 rounded-full bg-[#c0392b] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#a93226]">
        Go to Home
      </Link>
    </section>
  )
}
