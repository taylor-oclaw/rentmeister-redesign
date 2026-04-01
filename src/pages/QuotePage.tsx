import { useState, type FormEvent } from 'react'
import { CheckCircle2 } from 'lucide-react'
import { PageHero } from '../components/PageHero'
import {
  contactAddressLine1,
  contactAddressLine2,
  contactPhone,
  contactTel,
  quoteContactPreferenceOptions,
  quoteRequestedServiceOptions,
  quoteServiceNeedOptions,
  serviceSubtitle,
} from '../data/siteContent'

type QuoteForm = {
  firstName: string
  lastName: string
  email: string
  phone: string
  city: string
  requestedService: string
  serviceNeed: string
  contactPreference: string
  heardAbout: string
  message: string
  joinEmailList: boolean
}

const initialForm: QuoteForm = {
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  city: '',
  requestedService: quoteRequestedServiceOptions[0],
  serviceNeed: quoteServiceNeedOptions[0],
  contactPreference: quoteContactPreferenceOptions[0],
  heardAbout: '',
  message: '',
  joinEmailList: true,
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
        subtitle="This quote form now mirrors the real fields from Rentmeister’s live contact flow and adds a detailed requested-service dropdown for the redesigned routes."
      />

      <section className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
        <form onSubmit={handleSubmit} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm shadow-slate-300/60 sm:p-8">
          <h2 className="text-xl font-bold text-[#1a2744]">Tell Us About Your Project</h2>
          <div className="mt-5 grid gap-4 sm:grid-cols-2">
            <label className="text-sm font-medium text-slate-600">
              First name
              <input
                required
                value={form.firstName}
                onChange={(event) => setForm((prev) => ({ ...prev, firstName: event.target.value }))}
                className="mt-2 w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm outline-none transition focus:border-[#c0392b]"
              />
            </label>

            <label className="text-sm font-medium text-slate-600">
              Last name
              <input
                required
                value={form.lastName}
                onChange={(event) => setForm((prev) => ({ ...prev, lastName: event.target.value }))}
                className="mt-2 w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm outline-none transition focus:border-[#c0392b]"
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
              City
              <input
                required
                value={form.city}
                onChange={(event) => setForm((prev) => ({ ...prev, city: event.target.value }))}
                className="mt-2 w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm outline-none transition focus:border-[#c0392b]"
              />
            </label>

            <label className="text-sm font-medium text-slate-600">
              Contact Preference
              <select
                value={form.contactPreference}
                onChange={(event) => setForm((prev) => ({ ...prev, contactPreference: event.target.value }))}
                className="mt-2 w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm outline-none transition focus:border-[#c0392b]"
              >
                {quoteContactPreferenceOptions.map((option) => (
                  <option key={option}>{option}</option>
                ))}
              </select>
            </label>

            <label className="text-sm font-medium text-slate-600 sm:col-span-2">
              Requested Service
              <select
                value={form.requestedService}
                onChange={(event) => setForm((prev) => ({ ...prev, requestedService: event.target.value }))}
                className="mt-2 w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm outline-none transition focus:border-[#c0392b]"
              >
                {quoteRequestedServiceOptions.map((option) => (
                  <option key={option}>{option}</option>
                ))}
              </select>
            </label>

            <label className="text-sm font-medium text-slate-600 sm:col-span-2">
              What kind of service do you need?
              <select
                value={form.serviceNeed}
                onChange={(event) => setForm((prev) => ({ ...prev, serviceNeed: event.target.value }))}
                className="mt-2 w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm outline-none transition focus:border-[#c0392b]"
              >
                {quoteServiceNeedOptions.map((option) => (
                  <option key={option}>{option}</option>
                ))}
              </select>
            </label>
          </div>

          <label className="mt-4 block text-sm font-medium text-slate-600">
            How did you hear about us?
            <input
              value={form.heardAbout}
              onChange={(event) => setForm((prev) => ({ ...prev, heardAbout: event.target.value }))}
              className="mt-2 w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm outline-none transition focus:border-[#c0392b]"
            />
          </label>

          <label className="mt-4 block text-sm font-medium text-slate-600">
            How can we help you?
            <textarea
              required
              rows={6}
              value={form.message}
              onChange={(event) => setForm((prev) => ({ ...prev, message: event.target.value }))}
              placeholder="Share the issue, scope of work, or estimate details you want Rentmeister to know."
              className="mt-2 w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm outline-none transition focus:border-[#c0392b]"
            />
          </label>

          <label className="mt-4 flex items-start gap-3 text-sm text-slate-600">
            <input
              type="checkbox"
              checked={form.joinEmailList}
              onChange={(event) => setForm((prev) => ({ ...prev, joinEmailList: event.target.checked }))}
              className="mt-0.5 h-4 w-4 rounded border-slate-300 text-[#c0392b]"
            />
            <span>Yes! Sign me up for the Rentmeister Total Home Service email list.</span>
          </label>

          <button type="submit" className="mt-5 rounded-full bg-[#c0392b] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#a93226]">
            Submit Request
          </button>

          {submitted ? (
            <p className="mt-4 inline-flex items-center gap-2 rounded-lg bg-emerald-500/10 px-3 py-2 text-sm text-emerald-600">
              <CheckCircle2 size={16} />
              Thanks! Your request was received. A team member will contact you soon.
            </p>
          ) : null}
        </form>

        <aside className="space-y-4 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm shadow-slate-300/60 sm:p-8">
          <h3 className="text-xl font-bold text-[#1a2744]">What Happens Next?</h3>
          <ol className="space-y-3 text-sm text-slate-600">
            <li>1. Rentmeister reviews the request and confirms the best service path.</li>
            <li>2. The office reaches out using your preferred contact method.</li>
            <li>3. You get scheduling guidance, estimate follow-up, or repair planning based on your service need.</li>
          </ol>

          <div className="rounded-2xl bg-[#f5f5f5] p-4 text-sm text-[#333333]">
            <p className="font-semibold text-[#1a2744]">Need immediate help?</p>
            <a href={`tel:${contactTel}`} className="mt-1 block font-semibold text-[#c0392b] underline underline-offset-2">
              Call {contactPhone}
            </a>
          </div>

          <div className="rounded-2xl bg-[#f5f5f5] p-4 text-sm text-slate-600">
            <p className="font-semibold text-[#1a2744]">Head Office</p>
            <p className="mt-2">{contactAddressLine1}</p>
            <p>{contactAddressLine2}</p>
            <p className="mt-3">{serviceSubtitle}</p>
          </div>
        </aside>
      </section>
    </div>
  )
}
