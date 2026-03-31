import { Globe, Mail, MapPin, Phone, Clock3 } from 'lucide-react'
import { Link } from 'react-router-dom'
import { serviceAreas } from '../data/siteContent'

export function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white py-12 dark:border-slate-800 dark:bg-slate-950">
      <div className="mx-auto grid w-full max-w-7xl gap-10 px-4 sm:px-6 md:grid-cols-2 lg:grid-cols-4 lg:px-8">
        <div>
          <h3 className="text-lg font-semibold">Rentmeister Total Home Service</h3>
          <p className="mt-3 text-sm text-slate-600 dark:text-slate-300">Your Home's Comfort is Our Family's Pledge.</p>
          <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">Family-owned and serving Utah homes with trusted craftsmanship since 1953.</p>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wider text-slate-500">Contact</h4>
          <ul className="mt-3 space-y-2 text-sm text-slate-600 dark:text-slate-300">
            <li className="flex items-center gap-2">
              <Phone size={14} className="text-amber-500" />
              <a href="tel:+18013994633" className="hover:text-blue-500">
                (801) 399-4633
              </a>
            </li>
            <li className="flex items-center gap-2">
              <MapPin size={14} className="text-amber-500" />
              Kaysville, Utah
            </li>
            <li className="flex items-center gap-2">
              <Clock3 size={14} className="text-amber-500" />
              Mon–Sat: 7:00 AM – 7:00 PM
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wider text-slate-500">Service Areas</h4>
          <ul className="mt-3 space-y-2 text-sm text-slate-600 dark:text-slate-300">
            {serviceAreas.map((area) => (
              <li key={area}>{area}</li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wider text-slate-500">Quick Links</h4>
          <div className="mt-3 flex flex-col gap-2 text-sm">
            <Link to="/services" className="text-slate-600 hover:text-blue-500 dark:text-slate-300">
              Explore Services
            </Link>
            <Link to="/promotions" className="text-slate-600 hover:text-blue-500 dark:text-slate-300">
              Current Specials
            </Link>
            <Link to="/careers" className="text-slate-600 hover:text-blue-500 dark:text-slate-300">
              Join Our Team
            </Link>
          </div>
          <div className="mt-4 flex items-center gap-3 text-slate-500 dark:text-slate-300">
            <Globe size={18} />
            <Mail size={18} />
          </div>
        </div>
      </div>
      <p className="mt-10 text-center text-xs text-slate-500 dark:text-slate-400">
        © {new Date().getFullYear()} Rentmeister Total Home Service. All rights reserved.
      </p>
    </footer>
  )
}
