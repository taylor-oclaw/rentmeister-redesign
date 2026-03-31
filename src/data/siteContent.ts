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

export const contactPhone = '801-773-6900'
export const contactTel = '+18017736900'
export const tagline = 'Experienced & Reliable Service Since 1953'
export const serviceSubtitle = 'Serving Davis, Weber, Morgan, and Salt Lake Counties'
export const familyPledge = "Your Home's Comfort is Our Family's Pledge"

export const navLinks = [
  {
    label: 'About Us',
    to: '/about',
    submenu: [
      { label: 'Service Areas', to: '/about#service-areas' },
      { label: 'Making a Difference', to: '/about#making-a-difference' },
      { label: 'Satisfaction Survey', to: '/about#satisfaction-survey' },
      { label: 'Affiliations', to: '/about#affiliations' },
      { label: 'Reviews', to: '/reviews' },
    ],
  },
  { label: 'Specials', to: '/promotions' },
  {
    label: 'Heating & Air',
    to: '/services#heating-air',
    submenu: [
      { label: 'Heating', to: '/services#heating' },
      { label: 'Air Conditioning', to: '/services#air-conditioning' },
      { label: 'Commercial HVAC', to: '/services#commercial-hvac' },
      { label: 'Indoor Air Quality', to: '/services#indoor-air-quality' },
      { label: 'Fireplaces', to: '/services#fireplaces' },
    ],
  },
  {
    label: 'Plumbing',
    to: '/services#plumbing',
    submenu: [
      { label: 'Water Heater', to: '/services#water-heater' },
      { label: 'Clean Water', to: '/services#clean-water' },
      { label: 'Kitchen & Bathroom', to: '/services#kitchen-bathroom' },
      { label: 'Pipes & Sewers', to: '/services#pipes-sewers' },
      { label: 'Commercial', to: '/services#plumbing-commercial' },
      { label: 'New Construction', to: '/services#new-construction' },
    ],
  },
  {
    label: 'Electrical',
    to: '/services#electrical',
    submenu: [
      { label: 'Electrical Services', to: '/services#electrical-services' },
      { label: 'Lighting', to: '/services#lighting' },
      { label: 'Generators', to: '/services#generators' },
      { label: 'Outlets & Surge Protectors', to: '/services#outlets-surge' },
      { label: 'Ceiling Fans', to: '/services#ceiling-fans' },
      { label: 'Electrical Panels', to: '/services#electrical-panels' },
    ],
  },
  { label: 'Outdoor Kitchens', to: '/services#outdoor-kitchens' },
  { label: 'Maintenance Program', to: '/services#maintenance-program' },
  { label: 'Contact Us', to: '/quote' },
]

export const services = [
  {
    title: 'Heating Services',
    icon: Flame,
    summary: 'Furnace repair, heat pump service, and complete system replacements built for northern Utah winters.',
    bullets: ['Emergency no-heat repairs', 'High-efficiency heating installs', 'Safety inspections and airflow balancing'],
  },
  {
    title: 'Air Conditioning Services',
    icon: Snowflake,
    summary: 'Fast AC diagnostics, maintenance, and replacements that keep your family cool and comfortable.',
    bullets: ['AC diagnostics and repair', 'Central air replacement', 'Smart thermostat upgrades'],
  },
  {
    title: 'Plumbing Services',
    icon: Wrench,
    summary: 'From water heater installs to drain issues, our licensed plumbers handle jobs cleanly and efficiently.',
    bullets: ['Water heater repair and replacement', 'Drain and sewer services', 'Kitchen and bath fixture installs'],
  },
  {
    title: 'Electrical Services',
    icon: Zap,
    summary: 'Code-compliant electrical work that protects your home and powers everyday life safely.',
    bullets: ['Panel upgrades and circuits', 'Lighting and outlet installs', 'Troubleshooting and safety checks'],
  },
  {
    title: 'Outdoor Kitchens',
    icon: Utensils,
    summary: 'Outdoor kitchens, gas lines, plumbing, and electrical designed for durable year-round entertaining.',
    bullets: ['Built-in grill and utility lines', 'Outdoor electrical and lighting', 'Weather-ready plumbing connections'],
  },
]

export const trustBadges = [
  { label: 'Experienced & Reliable Service Since 1953', icon: HeartHandshake },
  { label: '4.7 ★ Google Rating', icon: BadgeCheck },
  { label: '991+ Reviews', icon: Award },
  { label: 'Voted Best in Davis County', icon: ShieldCheck, imageSrc: '/images/best-of-davis-badge.png' },
]

export const testimonials = [
  {
    name: 'Rachel M. · Layton, UT',
    text: 'Rentmeister restored our heat the same day during a cold snap. The technician explained every step and treated our home with care.',
    stars: 5,
  },
  {
    name: 'James and Olivia T. · Ogden, UT',
    text: 'From scheduling to installation, everything was organized and professional. Our new system runs quietly and efficiently.',
    stars: 5,
  },
  {
    name: 'Darnell P. · Bountiful, UT',
    text: 'We called for a plumbing issue and found a long-term service partner. Honest recommendations and great communication.',
    stars: 5,
  },
  {
    name: 'Monica R. · Farmington, UT',
    text: 'Their electrical team upgraded our panel and made the process easy. Excellent work and very respectful crew.',
    stars: 5,
  },
]

export const promotions = [
  {
    title: '$89 Heating or AC Tune-Up',
    details: 'Precision multi-point inspection for your heating or cooling system before peak season.',
    expires: 'Seasonal offer. Call for current availability.',
    imageSrc: '/images/promo-banner-1.png',
  },
  {
    title: '$250 Off Qualified Water Heater Installation',
    details: 'Upgrade to a high-efficiency unit and improve hot water consistency for your home.',
    expires: 'Limited-time promotion.',
    imageSrc: '/images/promo-banner-2.png',
  },
  {
    title: 'Flexible Financing on Qualified Replacements',
    details: 'Available for select HVAC, plumbing, and electrical system upgrades.',
    expires: 'Subject to approval and terms.',
    imageSrc: '/images/promo-banner-1.png',
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
    bio: 'Ensures each visit is smooth, transparent, and responsive from first call to follow-up.',
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
    description: 'Handle residential plumbing calls, water heater installs, and system troubleshooting.',
  },
  {
    title: 'Electrical Apprentice',
    type: 'Full-time · Salt Lake County',
    description: 'Support licensed electricians with panel upgrades, diagnostics, and code-compliant installations.',
  },
]

export const serviceAreas = ['Davis County', 'Weber County', 'Morgan County', 'Salt Lake County']
