import { Globe, Mail, MapPin, Phone, Clock3 } from 'lucide-react'
import { Link } from 'react-router-dom'
import { contactPhone, contactTel, familyPledge, serviceAreas, serviceSubtitle } from '../data/siteContent'

export function Footer() {
  return (
    <footer className="border-t border-[#223355] bg-[#1a2744] py-12 text-white">
      <div className="mx-auto grid w-full max-w-7xl gap-10 px-4 sm:px-6 md:grid-cols-2 lg:grid-cols-4 lg:px-8">
        <div>
          <h3 className="text-lg font-semibold text-white">Rentmeister Total Home Service</h3>
          <p className="mt-3 text-sm text-slate-200">{familyPledge}</p>
          <p className="mt-2 text-sm text-slate-300">{serviceSubtitle}</p>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wider text-slate-300">Contact</h4>
          <ul className="mt-3 space-y-2 text-sm text-slate-200">
            <li className="flex items-center gap-2">
              <Phone size={14} className="text-[#c0392b]" />
              <a href={`tel:${contactTel}`} className="hover:text-white">
                {contactPhone}
              </a>
            </li>
            <li className="flex items-center gap-2">
              <MapPin size={14} className="text-[#c0392b]" />
              Kaysville, Utah
            </li>
            <li className="flex items-center gap-2">
              <Clock3 size={14} className="text-[#c0392b]" />
              Mon–Sat: 7:00 AM – 7:00 PM
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wider text-slate-300">Service Areas</h4>
          <ul className="mt-3 space-y-2 text-sm text-slate-200">
            {serviceAreas.map((area) => (
              <li key={area}>{area}</li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wider text-slate-300">Quick Links</h4>
          <div className="mt-3 flex flex-col gap-2 text-sm">
            <Link to="/services" className="text-slate-200 hover:text-white">
              Heating, Plumbing & Electrical
            </Link>
            <Link to="/promotions" className="text-slate-200 hover:text-white">
              Current Specials
            </Link>
            <Link to="/quote" className="text-slate-200 hover:text-white">
              Contact Us
            </Link>
          </div>
          <div className="mt-4 flex items-center gap-3 text-slate-300">
            <Globe size={18} />
            <Mail size={18} />
          </div>
        </div>
      </div>
      <p className="mt-10 text-center text-xs text-slate-300">
        © {new Date().getFullYear()} Rentmeister Total Home Service. All rights reserved.
      </p>
    </footer>
  )
}
