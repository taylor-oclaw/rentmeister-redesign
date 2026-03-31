import {
  Award,
  BadgeCheck,
  Flame,
  Snowflake,
  Wrench,
  Zap,
  Utensils,
  ShieldCheck,
  Clock3,
  HeartHandshake,
  Users,
} from 'lucide-react'

export const navLinks = [
  { label: 'Home', to: '/' },
  { label: 'Services', to: '/services' },
  { label: 'About', to: '/about' },
  { label: 'Reviews', to: '/reviews' },
  { label: 'Promotions', to: '/promotions' },
  { label: 'Careers', to: '/careers' },
  { label: 'Request a Quote', to: '/quote' },
]

export const services = [
  {
    title: 'Heating Services',
    icon: Flame,
    summary:
      'Furnace repair, seasonal tune-ups, and complete heating system replacements built for Utah winters.',
    bullets: ['Emergency no-heat repairs', 'High-efficiency furnace installs', 'Safety inspections and airflow balancing'],
  },
  {
    title: 'Cooling Services',
    icon: Snowflake,
    summary:
      'Reliable AC repair and maintenance to keep your family comfortable through the hottest summer days.',
    bullets: ['AC diagnostics and repair', 'Central air replacement', 'Smart thermostat upgrades'],
  },
  {
    title: 'Plumbing Services',
    icon: Wrench,
    summary:
      'From small leaks to complete repipes, our licensed plumbers solve issues quickly and cleanly.',
    bullets: ['Water heater repair and replacement', 'Drain and sewer services', 'Kitchen and bath fixture installs'],
  },
  {
    title: 'Electrical Services',
    icon: Zap,
    summary:
      'Code-compliant electrical work that protects your home and powers everyday life safely.',
    bullets: ['Panel upgrades and circuits', 'Lighting and outlet installs', 'Troubleshooting and safety checks'],
  },
  {
    title: 'Outdoor Kitchens',
    icon: Utensils,
    summary:
      'Custom outdoor kitchen systems designed for entertaining, durability, and year-round enjoyment.',
    bullets: ['Built-in grill and utility lines', 'Outdoor electrical and lighting', 'Weather-ready plumbing connections'],
  },
]

export const trustBadges = [
  { label: 'Family-Owned Since 1953', icon: HeartHandshake },
  { label: '4.7 ★ Google Rating', icon: BadgeCheck },
  { label: '991+ Verified Reviews', icon: Award },
  { label: 'Voted Best in Davis County', icon: ShieldCheck },
]

export const testimonials = [
  {
    name: 'Rachel M. · Layton, UT',
    text: 'Rentmeister restored our heat the same day during a cold snap. The tech explained every step and treated our home with care.',
    stars: 5,
  },
  {
    name: 'James and Olivia T. · Ogden, UT',
    text: 'From the quote to final install, everything was organized and professional. Our new HVAC system runs quieter and saves energy.',
    stars: 5,
  },
  {
    name: 'Darnell P. · Bountiful, UT',
    text: 'We called for a plumbing leak and ended up with a long-term service partner. Honest recommendations and fair pricing.',
    stars: 5,
  },
  {
    name: 'Monica R. · Farmington, UT',
    text: 'Their electrical team upgraded our panel and made the process easy. Great communication and clean workmanship.',
    stars: 5,
  },
]

export const promotions = [
  {
    title: '$89 HVAC Tune-Up',
    details: 'Precision multi-point inspection for heating or cooling systems. Great before peak season.',
    expires: 'Valid through June 30, 2026',
  },
  {
    title: '$250 Off New Water Heater Installation',
    details: 'Upgrade to a high-efficiency unit and improve hot water consistency for your household.',
    expires: 'Valid through July 15, 2026',
  },
  {
    title: '0% Financing Available on Qualified Replacements',
    details: 'Flexible payment options available for full HVAC, plumbing, and electrical system upgrades.',
    expires: 'Subject to credit approval',
  },
]

export const values = [
  {
    title: 'Reliability You Can Feel',
    copy: 'We show up on time, communicate clearly, and stand behind every service call.',
    icon: Clock3,
  },
  {
    title: 'Family-Level Care',
    copy: 'Three generations of service means we treat every home like it belongs to one of our own.',
    icon: HeartHandshake,
  },
  {
    title: 'Skilled Local Experts',
    copy: 'Our team is trained, licensed, and focused on long-term solutions — not quick patches.',
    icon: Users,
  },
]

export const teamPreview = [
  {
    name: 'Michael Rentmeister',
    role: 'Owner · 3rd Generation',
    bio: 'Leads operations with a focus on craftsmanship, customer care, and community trust.',
  },
  {
    name: 'Sarah Rentmeister',
    role: 'Customer Experience Director',
    bio: 'Ensures each service visit is smooth, transparent, and responsive from first call to follow-up.',
  },
  {
    name: 'David Klein',
    role: 'Senior HVAC Field Manager',
    bio: 'Oversees technical training and helps homeowners choose systems that balance comfort and efficiency.',
  },
]

export const careerOpenings = [
  {
    title: 'HVAC Service Technician',
    type: 'Full-time · Davis County',
    description: 'Diagnose, repair, and maintain residential heating and cooling systems with a customer-first mindset.',
  },
  {
    title: 'Licensed Plumber',
    type: 'Full-time · Weber County',
    description: 'Handle residential plumbing service calls, water heater installs, and system troubleshooting.',
  },
  {
    title: 'Electrical Apprentice',
    type: 'Full-time · Salt Lake County',
    description: 'Support licensed electricians with panel upgrades, diagnostics, and code-compliant installations.',
  },
]

export const serviceAreas = ['Davis County', 'Weber County', 'Morgan County', 'Salt Lake County']
