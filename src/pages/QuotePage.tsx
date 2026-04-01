import { useState, type FormEvent } from 'react'
import { CheckCircle2 } from 'lucide-react'
import { PageHero } from '../components/PageHero'
import { contactPhone, contactTel, services } from '../data/siteContent'

type QuoteForm = {
  name: string
  email: string
  phone: string
  serviceType: string
  message: string
}

const initialForm: QuoteForm = {
  name: '',
  email: '',
  phone: '',
  serviceType: services[0].title,
  message: '',
}

export function QuotePage() {
  const [form, setForm] = useState<QuoteForm>(initialForm)
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setSubmitted(true)
    setForm(initialForm)
  }

  return (
    <div className="space-y-12">
      <PageHero
        title="Contact Rentmeister Today"
        subtitle="Tell us what you need and our team will follow up promptly to schedule your service consultation."
      />

      <section className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
        <form onSubmit={handleSubmit} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm shadow-slate-300/60">
          <h2 className="text-xl font-bold text-[#1a2744]">Tell Us About Your Project</h2>
          <div className="mt-5 grid gap-4 sm:grid-cols-2">
            <label className="text-sm font-medium text-slate-600">
              Full Name
              <input
                required
                value={form.name}
                onChange={(event) => setForm((prev) => ({ ...prev, name: event.target.value }))}
                className="mt-2 w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm outline-none ring-0 transition focus:border-[#c0392b]"
              />
            </label>

            <label className="text-sm font-medium text-slate-600">
              Email
              <input
                required
                type="email"
                value={form.email}
                onChange={(event) => setForm((prev) => ({ ...prev, email: event.target.value }))}
                className="mt-2 w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm outline-none transition focus:border-[#c0392b]"
              />
            </label>

            <label className="text-sm font-medium text-slate-600">
              Phone
              <input
                required
                type="tel"
                value={form.phone}
                onChange={(event) => setForm((prev) => ({ ...prev, phone: event.target.value }))}
                className="mt-2 w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm outline-none transition focus:border-[#c0392b]"
              />
            </label>

            <label className="text-sm font-medium text-slate-600">
              Service Type
              <select
                value={form.serviceType}
                onChange={(event) => setForm((prev) => ({ ...prev, serviceType: event.target.value }))}
                className="mt-2 w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm outline-none transition focus:border-[#c0392b]"
              >
                {services.map((service) => (
                  <option key={service.title}>{service.title}</option>
                ))}
              </select>
            </label>
          </div>

          <label className="mt-4 block text-sm font-medium text-slate-600">
            Project Details
            <textarea
              required
              rows={6}
              value={form.message}
              onChange={(event) => setForm((prev) => ({ ...prev, message: event.target.value }))}
              placeholder="Please share your current issue, timeline, and any details that can help us prepare."
              className="mt-2 w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm outline-none transition focus:border-[#c0392b]"
            />
          </label>

          <button type="submit" className="mt-5 rounded-full bg-[#c0392b] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#a93226]">
            Submit Request
          </button>

          {submitted && (
            <p className="mt-4 inline-flex items-center gap-2 rounded-lg bg-emerald-500/10 px-3 py-2 text-sm text-emerald-600">
              <CheckCircle2 size={16} />
              Thanks! Your request was received. A team member will contact you soon.
            </p>
          )}
        </form>

        <aside className="space-y-4 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm shadow-slate-300/60">
          <h3 className="text-xl font-bold text-[#1a2744]">What Happens Next?</h3>
          <ol className="space-y-3 text-sm text-slate-600">
            <li>1. We review your request and confirm details.</li>
            <li>2. Our team contacts you to schedule a visit.</li>
            <li>3. You receive a transparent recommendation and quote.</li>
          </ol>
          <div className="rounded-2xl bg-[#f5f5f5] p-4 text-sm text-[#333333]">
            <p className="font-semibold text-[#1a2744]">Need immediate help?</p>
            <a href={`tel:${contactTel}`} className="mt-1 block font-semibold text-[#c0392b] underline underline-offset-2">
              Call {contactPhone}
            </a>
          </div>
        </aside>
      </section>
    </div>
  )
}
