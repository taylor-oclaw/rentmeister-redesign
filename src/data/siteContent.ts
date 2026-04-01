import {
  Award,
  BadgeCheck,
  Clock3,
  Flame,
  HeartHandshake,
  ShieldCheck,
  Snowflake,
  Users,
  Utensils,
  Wrench,
  Zap,
  type LucideIcon,
} from 'lucide-react'

export type NavItem = {
  label: string
  to: string
  submenu?: Array<{
    label: string
    to: string
  }>
}

export type ServiceCard = {
  title: string
  slug: string
  href: string
  icon: LucideIcon
  summary: string
  bullets: string[]
  imageSrc: string
}

export type ServiceCategory = {
  id: string
  title: string
  href: string
  icon: LucideIcon
  intro: string
  imageSrc: string
  items: Array<{
    label: string
    to: string
    summary: string
  }>
}

export type Review = {
  name: string
  date: string
  text: string
  stars: number
}

export type Promotion = {
  title: string
  details: string
  expires: string
  imageSrc: string
}

export type DetailSection = {
  title: string
  content: string[]
  bullets?: string[]
}

export type DetailPageConfig = {
  slug: string
  title: string
  subtitle: string
  imageSrc: string
  intro: string[]
  highlights?: string[]
  sections: DetailSection[]
  logoGrid?: string[]
}

export type ServiceAreaGroup = {
  county: string
  cities: string[]
}

export const contactPhone = '801-773-6900'
export const contactTel = '+18017736900'
export const contactAddressLine1 = '1956 W 2250 S'
export const contactAddressLine2 = 'Syracuse, UT 84075'
export const tagline = 'Experienced & Reliable Service Since 1953'
export const serviceSubtitle = 'Serving Davis, Weber, Morgan, and Salt Lake Counties'
export const familyPledge = "Our Family's Commitment to Your Family's Comfort"
export const emergencyAvailability = '24 Hour Emergency Service Available'
export const scheduleLink = 'https://www.rentmeister.com/request-estimate'

export const navLinks: NavItem[] = [
  {
    label: 'About Us',
    to: '/about',
    submenu: [
      { label: 'Service Areas', to: '/service-areas' },
      { label: 'Making a Difference', to: '/making-a-difference' },
      { label: 'Affiliations', to: '/affiliations' },
      { label: 'Reviews', to: '/reviews' },
    ],
  },
  { label: 'Specials', to: '/promotions' },
  {
    label: 'Heating & Air',
    to: '/services#heating-air',
    submenu: [
      { label: 'Heating', to: '/heating' },
      { label: 'Air Conditioning', to: '/air-conditioning' },
      { label: 'Commercial HVAC', to: '/commercial-hvac' },
      { label: 'Indoor Air Quality', to: '/indoor-air-quality' },
      { label: 'Fireplaces', to: '/fireplaces' },
    ],
  },
  {
    label: 'Plumbing',
    to: '/services#plumbing',
    submenu: [
      { label: 'Water Heater', to: '/water-heater' },
      { label: 'Clean Water', to: '/clean-water' },
      { label: 'Kitchen & Bathroom Plumbing', to: '/kitchen-bathroom-plumbing' },
      { label: 'Pipes & Sewers', to: '/pipes-sewers' },
      { label: 'Commercial Plumbing', to: '/commercial-plumbing' },
      { label: 'New Construction', to: '/new-construction' },
    ],
  },
  {
    label: 'Electrical',
    to: '/services#electrical',
    submenu: [
      { label: 'Electrical Services', to: '/electrical-services' },
      { label: 'Lighting', to: '/lighting' },
      { label: 'Generators', to: '/generators' },
      { label: 'Outlets & Surge Protectors', to: '/outlets-surge-protectors' },
      { label: 'Ceiling Fans', to: '/ceiling-fans' },
      { label: 'Electrical Panels', to: '/electrical-panels' },
    ],
  },
  { label: 'Outdoor Kitchens', to: '/outdoor-kitchens' },
  { label: 'Maintenance Program', to: '/maintenance-program' },
  { label: 'Contact Us', to: '/quote' },
]

export const services: ServiceCard[] = [
  {
    title: 'Heating & Air',
    slug: 'heating',
    href: '/heating',
    icon: Flame,
    summary:
      'Rentmeister’s dedicated HVAC team repairs, installs, and maintains furnaces, heat pumps, thermostats, dual fuel systems, mini splits, and zone controls for Utah homes.',
    bullets: ['Furnace repair and replacement', 'Heat pump and thermostat service', 'Dual fuel and zone control upgrades'],
    imageSrc: '/images/rentmeister/heatingair-abc0449e.jpg',
  },
  {
    title: 'Air Conditioning',
    slug: 'air-conditioning',
    href: '/air-conditioning',
    icon: Snowflake,
    summary:
      'Cooling service includes evaporative coolers, heat pumps, ductless mini split systems, thermostats, and zone systems designed for efficient summer comfort.',
    bullets: ['Evaporative cooler service', 'Ductless mini split solutions', 'Cooling efficiency and comfort upgrades'],
    imageSrc: '/images/rentmeister/heatingair-d786db8f.jpg',
  },
  {
    title: 'Plumbing',
    slug: 'water-heater',
    href: '/water-heater',
    icon: Wrench,
    summary:
      'From tankless water heaters and clean water systems to kitchen plumbing, repiping, and new construction, Rentmeister handles plumbing work with trained local pros.',
    bullets: ['Tank and tankless water heaters', 'Kitchen, bathroom, and drain work', 'Repiping and whole-home plumbing'],
    imageSrc: '/images/rentmeister/plumbing-78c70a73.jpg',
  },
  {
    title: 'Electrical',
    slug: 'electrical-services',
    href: '/electrical-services',
    icon: Zap,
    summary:
      'Rentmeister provides electrical installation, repair, replacement, lighting, generators, surge protection, ceiling fans, and panel upgrades focused on safety.',
    bullets: ['Electrical repairs and maintenance', 'Lighting and generator installs', 'Surge protection and panel upgrades'],
    imageSrc: '/images/rentmeister/electrical-3362180f.jpg',
  },
  {
    title: 'Outdoor Kitchens',
    slug: 'outdoor-kitchens',
    href: '/outdoor-kitchens',
    icon: Utensils,
    summary:
      'Outdoor kitchens are built for durability with patented Co-Turf technology, factory pre-builds, fast installation, and flexible layouts for your space.',
    bullets: ['Pre-designed and custom layouts', 'Installed on pavers, decks, gravel, or concrete', 'Built for 50-year-plus durability'],
    imageSrc: '/images/rentmeister/outdoorkitchens-14243f71.jpg',
  },
  {
    title: 'Maintenance Program',
    slug: 'maintenance-program',
    href: '/maintenance-program',
    icon: Clock3,
    summary:
      'The Ultimate Service Agreement keeps HVAC and plumbing systems running efficiently with scheduled maintenance, priority service, and member discounts.',
    bullets: ['HVAC Gold, Silver, and Bronze plans', 'Water heater flush and check plans', 'Priority service and repair discounts'],
    imageSrc: '/images/rentmeister/maintenanceprogram-05fc2748.jpg',
  },
]

export const serviceCategories: ServiceCategory[] = [
  {
    id: 'heating-air',
    title: 'Heating & Air',
    href: '/heating',
    icon: Flame,
    intro:
      'Rentmeister Total Home Service has a dedicated team of professionals who can help you stay warm all winter and cool all summer. Care and efficiency are priorities whether you need furnace work, cooling upgrades, commercial HVAC support, indoor air quality improvements, or fireplace service.',
    imageSrc: '/images/rentmeister/heatingair-7b865ec2.jpg',
    items: [
      {
        label: 'Heating',
        to: '/heating',
        summary: 'Furnaces, heat pumps, thermostats, and dual fuel system expertise for dependable winter comfort.',
      },
      {
        label: 'Air Conditioning',
        to: '/air-conditioning',
        summary: 'Evaporative coolers, mini splits, thermostats, and zone systems for efficient summer cooling.',
      },
      {
        label: 'Commercial HVAC',
        to: '/commercial-hvac',
        summary: '24/7 repair and routine maintenance to keep commercial heating and cooling systems running reliably.',
      },
      {
        label: 'Indoor Air Quality',
        to: '/indoor-air-quality',
        summary: 'Carbon monoxide protection, air purifiers, filters, humidifiers, radon help, and duct sealing.',
      },
      {
        label: 'Fireplaces',
        to: '/fireplaces',
        summary: 'Installation, repair, replacement, and tune-ups for fireplaces, inserts, gas stoves, and gas logs.',
      },
    ],
  },
  {
    id: 'plumbing',
    title: 'Plumbing',
    href: '/water-heater',
    icon: Wrench,
    intro:
      'When you need a plumbing job done right the first time, Rentmeister’s plumbing professionals can handle it. The team covers water heaters, clean water systems, kitchen and bathroom plumbing, piping, commercial plumbing, and new construction work.',
    imageSrc: '/images/rentmeister/plumbing-82ff4f02.jpg',
    items: [
      {
        label: 'Water Heater',
        to: '/water-heater',
        summary: 'Tankless and conventional water heater guidance, installation, and ongoing maintenance support.',
      },
      {
        label: 'Clean Water',
        to: '/clean-water',
        summary: 'Water softeners and HALO filtration systems for cleaner, clearer, better-tasting whole-home water.',
      },
      {
        label: 'Kitchen & Bathroom Plumbing',
        to: '/kitchen-bathroom-plumbing',
        summary: 'Drain cleaning, fixture repairs, garbage disposals, water treatment, and remodeling support.',
      },
      {
        label: 'Pipes & Sewers',
        to: '/pipes-sewers',
        summary: 'Pipe installation, maintenance, repair, replacement, and whole-house repiping services.',
      },
      {
        label: 'Commercial Plumbing',
        to: '/commercial-plumbing',
        summary: 'Code-compliant commercial plumbing repair and maintenance with emergency availability.',
      },
      {
        label: 'New Construction',
        to: '/new-construction',
        summary: 'Whole-home plumbing installation, repiping, and planning support for new construction projects.',
      },
    ],
  },
  {
    id: 'electrical',
    title: 'Electrical',
    href: '/electrical-services',
    icon: Zap,
    intro:
      'There isn’t much that outranks the importance of home electrical services. Rentmeister handles new electrical installations, repairs, replacements, maintenance, lighting, generators, surge protection, ceiling fans, and panel work with safety-first care.',
    imageSrc: '/images/rentmeister/electrical-5001cb69.jpg',
    items: [
      {
        label: 'Electrical Services',
        to: '/electrical-services',
        summary: 'General electrical installation, upkeep, repair, and replacement for safer home systems.',
      },
      {
        label: 'Lighting',
        to: '/lighting',
        summary: 'Indoor and outdoor lighting installation, maintenance, repair, and fixture replacement.',
      },
      {
        label: 'Generators',
        to: '/generators',
        summary: 'Whole-house generator installation, repair, and replacement matched to your power needs.',
      },
      {
        label: 'Outlets & Surge Protectors',
        to: '/outlets-surge-protectors',
        summary: 'GFCI/AFCI outlet work and whole-house surge protection for improved safety.',
      },
      {
        label: 'Ceiling Fans',
        to: '/ceiling-fans',
        summary: 'Ceiling fan installation, repair, and replacement to support comfort and efficiency.',
      },
      {
        label: 'Electrical Panels',
        to: '/electrical-panels',
        summary: 'Electrical panel installation, repair, and replacement for reliable, code-conscious power.',
      },
    ],
  },
  {
    id: 'outdoor-kitchens',
    title: 'Outdoor Kitchens',
    href: '/outdoor-kitchens',
    icon: Utensils,
    intro:
      'Rentmeister outdoor kitchens are built for durability, flexibility, and fast installation. The team offers numerous pre-designed configurations as well as custom solutions that can be installed on pavers, decks, gravel, or concrete pads.',
    imageSrc: '/images/rentmeister/outdoorkitchens-36c4a87e.jpg',
    items: [
      {
        label: 'Outdoor Kitchens',
        to: '/outdoor-kitchens',
        summary: 'Patented Co-Turf outdoor kitchens with best-in-class warranty and factory pre-build efficiency.',
      },
    ],
  },
  {
    id: 'maintenance-program',
    title: 'Maintenance Program',
    href: '/maintenance-program',
    icon: Clock3,
    intro:
      'Even the best-built home systems require regular annual service. Rentmeister’s Ultimate Service Agreement is designed to extend equipment life, protect performance, and reduce the risk of costly failures with options for different budgets.',
    imageSrc: '/images/rentmeister/maintenanceprogram-05fc2748.jpg',
    items: [
      {
        label: 'Ultimate Service Agreement',
        to: '/maintenance-program',
        summary: 'HVAC and plumbing maintenance plans with priority scheduling, warranty support, and pricing discounts.',
      },
    ],
  },
]

export const trustBadges: Array<{ label: string; icon: LucideIcon; imageSrc?: string }> = [
  { label: tagline, icon: HeartHandshake },
  { label: serviceSubtitle, icon: ShieldCheck },
  { label: '4.5 / 5 Google Rating', icon: BadgeCheck },
  { label: emergencyAvailability, icon: Award },
]

export const testimonials: Review[] = [
  {
    name: 'J. Reese',
    date: '2026-03-28',
    text: 'first time customer. i had rentmeister come out to my house today to service my tankless water heater, furnace, and central air. i am very pleased with their service. great overall price. no phantom repairs needed. no efforts to upsell me anything. altogether, the experience was pretty good...',
    stars: 5,
  },
  {
    name: 'Ryan Silverwood',
    date: '2026-03-20',
    text: 'Great service. Ben was very helpful and informative.',
    stars: 5,
  },
  {
    name: 'Frog Bambro',
    date: '2026-03-16',
    text: 'Outstanding service. The technician was professional and explained everything perfectly. Everything is working normally again. I highly recommend this company.',
    stars: 5,
  },
  {
    name: 'Janey Maher',
    date: '2026-03-13',
    text: 'Our dishwasher started leaking at 8:30 pm on a weekday night. An hour later it was filling up and not draining, so our kitchen started to flood. Rentmeister was the first search result so I called. They had a real person answer not a recording. That was the first good thing. The next great thing was that I heard back quickly and a tech arrived within 30 minutes of my first call. Our tech was Rocky and he was so wonderful! He quickly helped us get the issue resolved and gave us suggestions based on our further questions. I can\'t say enough good things about our experience! The service was fast, friendly, and professional. We will definitely be using them again!',
    stars: 5,
  },
  {
    name: 'Marcia Knorr',
    date: '2026-02-26',
    text: 'Very knowledgeable staff came on time to give me a bid on replacing my water heater. They were very patient and answered all my questions. Still considering this project.',
    stars: 5,
  },
  {
    name: 'Richard Tuttle',
    date: '2026-02-24',
    text: 'Very nice, very efficient, and highly informative!',
    stars: 5,
  },
  {
    name: 'Magali Galeana',
    date: '2026-02-23',
    text: 'Rentmeister called me to offer a complementary service on my new unit. Was able to get it schedule right away. Ben showed up punctual and listened and addressed all my concerns. I had an issue with the noise level and they are taking care of it. Would recommend this company.',
    stars: 5,
  },
]

export const homepageReviews = testimonials.slice(0, 3)

export const promotions: Promotion[] = [
  {
    title: '$500 Off Rinnai Tankless Water Heater + $300 Rebate',
    details: 'Call today for details!',
    expires: 'Current special',
    imageSrc: '/images/rentmeister/promotions-99bc7736.jpg',
  },
  {
    title: '$835 Introductory Price for CO/PRO 2 or CO/PRO 3',
    details: 'Call today for details!',
    expires: 'Current special',
    imageSrc: '/images/rentmeister/promotions-7d3329d8.png',
  },
  {
    title: 'Refer a friend, get $100!',
    details: 'Call today for details!',
    expires: 'Referral offer',
    imageSrc: '/images/rentmeister/promotions-9c21dca8.png',
  },
  {
    title: '10% OFF for Active and Retired military',
    details: 'Call today for details!',
    expires: 'Current special',
    imageSrc: '/images/rentmeister/promotions-bd9daeb6.png',
  },
  {
    title: 'Nominate a Family in Need to Receive a FREE Complete Heating & Cooling System!',
    details: 'Community giveaway opportunity through the current specials page.',
    expires: 'Limited community program',
    imageSrc: '/images/rentmeister/promotions-f9fae13c.png',
  },
]

export const aboutStory = [
  'Rentmeister Total Home Service is a locally-owned, family-run business—three generations deep—with over 50 years of service. The company provides plumbing, HVAC, electrical, indoor air quality, and additional home comfort services across northern Utah.',
  'Quality service and customer care are top priorities, and the team continues building relationships with customers throughout Davis, Weber, Morgan, and Salt Lake Counties.',
]

export const aboutMission = [
  'At Rentmeister Total Home Service, every family deserves a safe and comfortable home environment. The company’s mission is to provide each customer with quality equipment and excellent customer service while remaining competitively priced for all goods and services.',
  'Rentmeister also believes the company’s success is directly related to the success of its employees. The goal is to create a family atmosphere in the workplace that encourages personal and professional growth, innovative ideas, continuing education, and work-life balance.',
  'The company describes its 3-fold belief this way: change will only happen if it is good for the customer, the employee, and the company.',
]

export const values = [
  {
    title: 'Safe & Comfortable Homes',
    copy: 'Rentmeister’s mission centers on helping every family enjoy a safe and comfortable home environment.',
    icon: HeartHandshake,
  },
  {
    title: 'Growth for Employees',
    copy: 'The company aims to create a family atmosphere that supports personal and professional growth, continuing education, and balance.',
    icon: Users,
  },
  {
    title: 'Customer · Employee · Company',
    copy: 'The team’s 3-fold belief is that meaningful change should be good for the customer, the employee, and the company.',
    icon: Clock3,
  },
]

export const serviceAreas = ['Davis County', 'Weber County', 'Morgan County', 'Salt Lake County']

export const serviceAreaGroups: ServiceAreaGroup[] = [
  {
    county: 'Davis County',
    cities: ['Bountiful', 'Centerville', 'Clearfield', 'Clinton', 'Farmington', 'Fruit Heights', 'Kaysville', 'Layton', 'South Weber', 'Sunset', 'Syracuse', 'West Bountiful', 'West Kaysville', 'West Point', 'Woods Cross'],
  },
  {
    county: 'Morgan County',
    cities: ['Morgan', 'Mountain Green'],
  },
  {
    county: 'Salt Lake County',
    cities: ['Bluffdale', 'Cottonwood Heights', 'Draper', 'Holladay', 'Kearns', 'Murray', 'Riverton', 'Salt Lake City', 'Sandy', 'South Salt Lake', 'Taylorsville', 'West Jordan', 'West Valley City'],
  },
  {
    county: 'Weber County',
    cities: ['Farr West', 'Harrisville', 'Hooper', 'Marriott', 'North Ogden', 'Ogden', 'Plain City', 'Pleasant View', 'Riverdale', 'Roy', 'South Ogden', 'Taylor', 'Uintah', 'Warren', 'Washington Terrace', 'West Haven', 'West Warren', 'West Weber', 'Wilson'],
  },
]

export const communityHighlights = [
  'As proud members of the community for over 70 years, Rentmeister says giving back to help it thrive is important to the company.',
  'Employees volunteer time and effort to sponsor the Syracuse Heritage Days Annual Pancake Breakfast and have helped raise funds for the Utah 1033 Foundation and the North Davis Project Illumination.',
  'The company has sponsored multiple high schools, junior high schools, elementary schools, Syracuse Arts, Girl Scouts, Boy Scouts, and youth sports programs, and has donated heating and cooling systems to community members in need.',
  'In 2026, Rentmeister donated HVAC and plumbing to support The Christi Project, a local Pierce Design + Build effort creating a fully accessible home for a child born premature and facing complex medical challenges.',
  'The company also notes active participation in the West Davis Chamber of Commerce and highlights that Ryan Rentmeister taught at Davis Technical College for over 18 years.',
]

export const affiliationLogos = [
  '/images/rentmeister/affiliations-089011f8.png',
  '/images/rentmeister/affiliations-1d5e5522.png',
  '/images/rentmeister/affiliations-317412c4.jpg',
  '/images/rentmeister/affiliations-3abe3f19.png',
  '/images/rentmeister/affiliations-5e2e7947.png',
  '/images/rentmeister/affiliations-797497ff.png',
  '/images/rentmeister/affiliations-8438649b.png',
  '/images/rentmeister/affiliations-9ab0820f.png',
  '/images/rentmeister/affiliations-a338c353.png',
  '/images/rentmeister/affiliations-db7ec305.png',
  '/images/rentmeister/affiliations-db8e0936.png',
  '/images/rentmeister/affiliations-e1b202cb.png',
  '/images/rentmeister/affiliations-f67c7371.png',
]

export const quoteRequestedServiceOptions = [
  'Heating',
  'Air Conditioning',
  'Commercial HVAC',
  'Indoor Air Quality',
  'Fireplaces',
  'Water Heater',
  'Clean Water',
  'Kitchen & Bathroom Plumbing',
  'Pipes & Sewers',
  'Commercial Plumbing',
  'New Construction',
  'Electrical Services',
  'Lighting',
  'Generators',
  'Outlets & Surge Protectors',
  'Ceiling Fans',
  'Electrical Panels',
  'Outdoor Kitchens',
  'Maintenance Program',
]

export const quoteServiceNeedOptions = ['Looking for a new system or replacement', 'In need of repair', 'Interested in maintenance']
export const quoteContactPreferenceOptions = ['Phone', 'Email']

export const careerOpenings = [
  {
    title: 'HVAC Service Tech',
    type: 'Current opening',
    description: 'Visit Rentmeister careers for current role details and application information.',
  },
  {
    title: 'HVAC Apprentice Installer',
    type: 'Current opening',
    description: 'Visit Rentmeister careers for current role details and application information.',
  },
  {
    title: 'Sheet Metal Fabricator',
    type: 'Current opening',
    description: 'Visit Rentmeister careers for current role details and application information.',
  },
  {
    title: 'Journeyman HVAC Installer',
    type: 'Current opening',
    description: 'Visit Rentmeister careers for current role details and application information.',
  },
]

export const detailPages: DetailPageConfig[] = [
  {
    slug: 'heating',
    title: 'Heating',
    subtitle: 'Furnaces, heat pumps, thermostats, and dual fuel heating support for reliable winter comfort.',
    imageSrc: '/images/rentmeister/heatingair-afc4dc3d.jpg',
    intro: [
      'Rentmeister repairs and maintains gas and electric furnaces of any make or model, installs new heating systems, and offers service guarantees backed by a maintenance plan that covers routine check-ups.',
      'The heating team also supports heat pumps, thermostats, and dual fuel systems so homeowners can balance comfort, efficiency, and long-term reliability.',
    ],
    highlights: ['Gas and electric furnace service', 'Heat pump repair and maintenance', 'Thermostat installation and routine care', 'Dual fuel system guidance'],
    sections: [
      {
        title: 'Furnaces',
        content: [
          'Rentmeister repairs and maintains gas and electric furnaces of any make or model. If you need a new furnace installed, the company offers installation support as well.',
          'Its furnace repair technicians are described as certified professionals who put customers first, with repairs for any model and routine maintenance available through the service agreement.',
        ],
      },
      {
        title: 'Heat Pumps',
        content: [
          'Heat pumps offer a two-in-one comfort solution: air conditioning for hot weather and energy-efficient heating for the cold.',
          'Because heat pumps operate continuously at a fixed level, they help keep home temperatures consistent and benefit from bi-annual tune-ups to stay in peak condition.',
        ],
      },
      {
        title: 'Thermostats',
        content: [
          'Rentmeister installs digital, wireless, and programmable thermostats to match many residential HVAC systems.',
          'The team helps homeowners select the right model, complete installation, and keep thermostats performing well through advice and routine maintenance.',
        ],
      },
      {
        title: 'Dual Fuel Systems',
        content: [
          'A heating dual fuel system uses two energy sources, such as electricity and gas, and automatically switches between them depending on which option is more efficient or cost-effective.',
          'Rentmeister presents this as a smart way to keep a home warm without overspending and pairs dual fuel solutions with heat pump expertise for lower bills and reduced carbon footprint.',
        ],
      },
    ],
  },
  {
    slug: 'air-conditioning',
    title: 'Air Conditioning',
    subtitle: 'Cooling solutions built around evaporative coolers, mini splits, thermostats, heat pumps, and zone control.',
    imageSrc: '/images/rentmeister/heatingair-dbd0e999.jpg',
    intro: [
      'Rentmeister’s cooling services span evaporative coolers, heat pumps, ductless mini split systems, thermostats, and zone systems.',
      'The goal is to improve home comfort while helping families manage energy use and solve hot and cold spots throughout the house.',
    ],
    highlights: ['Evaporative cooler service', 'Heat pump cooling support', 'Ductless mini split installation', 'Thermostat matching and setup', 'Zone control expertise'],
    sections: [
      {
        title: 'Evaporative Coolers',
        content: [
          'Evaporative coolers are presented as a great alternative to conventional AC because they blend cooling with humidity balance and use less electricity to operate.',
          'Rentmeister installs, repairs, replaces, and maintains evaporative coolers for homeowners who want that option.',
        ],
      },
      {
        title: 'Ductless Mini Split Systems',
        content: [
          'Ductless mini splits help solve hot and cold spots and work especially well in homes without room for ductwork.',
          'Rentmeister highlights their energy efficiency, flexibility, and usefulness for remodeling projects and new home construction.',
        ],
      },
      {
        title: 'Thermostats',
        content: [
          'A properly matched thermostat can boost heating and cooling efficiency, improve comfort, and help lower energy costs.',
          'Rentmeister helps homeowners choose thermostat solutions that match the existing system and expected performance.',
        ],
      },
      {
        title: 'Zone Systems',
        content: [
          'Zone control systems allow different parts of the home to be heated or cooled separately instead of conditioning the entire house at once.',
          'That improves customization, spreads comfort more evenly, and can save money. Rentmeister also offers zone system repair and maintenance.',
        ],
      },
    ],
  },
  {
    slug: 'commercial-hvac',
    title: 'Commercial HVAC',
    subtitle: '24/7 repair and maintenance support for commercial heating and cooling equipment.',
    imageSrc: '/images/rentmeister/commercialhvac-fbd93f78.jpg',
    intro: [
      'Rentmeister describes reliable commercial heating and AC as essential to running any business, which is why the company offers commercial HVAC repair services around the clock.',
      'Routine maintenance is also positioned as a way to lower operating costs, reduce breakdown risk, and improve overall efficiency for business owners.',
    ],
    highlights: ['24/7 commercial HVAC repair', 'Any type of commercial heating and cooling equipment', 'Energy-saving maintenance support', '100% satisfaction guarantee'],
    sections: [
      {
        title: 'Repair',
        content: [
          'If emergency repairs are needed, Rentmeister says it answers service calls immediately and provides repairs for any type of commercial heating and cooling equipment.',
          'The company recommends calling as soon as issues appear so damage is limited and normal operation can be restored faster.',
        ],
      },
      {
        title: 'Maintenance',
        content: [
          'Routine maintenance can help reduce the likelihood of issues while lowering operating costs over time.',
          'Rentmeister also provides maintenance tips, energy-saving suggestions, a 100% satisfaction guarantee, and a 10-year warranty on select systems.',
        ],
      },
    ],
  },
  {
    slug: 'indoor-air-quality',
    title: 'Indoor Air Quality',
    subtitle: 'Cleaner, safer air through carbon monoxide protection, purification, filtration, humidity control, and duct sealing.',
    imageSrc: '/images/rentmeister/indoorairquality-0328a7d0.jpg',
    intro: [
      'Indoor air quality can be affected by wood and fuel-burning appliances, building materials, mold, pet dander, chemical pollutants, carbon monoxide, radon, allergens, and outdoor pollution.',
      'Rentmeister says its experts can conduct radon testing and mitigation and provide a wide range of installation and maintenance services to improve indoor air quality and protect family health.',
    ],
    highlights: ['Carbon monoxide shutoff protection', 'Air purifiers and REME HALO options', 'Filter installation and replacement', 'Whole-home humidifier support', 'Duct sealing and duct repair'],
    sections: [
      {
        title: 'Carbon Monoxide Detection',
        content: [
          'Rentmeister promotes CO/PRO shutoff switches that stop carbon monoxide at its source before it spreads through the home.',
          'The company notes that standard detectors may not trigger quickly enough, while the CO/PRO can shut down fuel-burning appliances within seconds at 25 ppm detection levels.',
        ],
      },
      {
        title: 'Air Purifiers',
        content: [
          'Air purifiers are offered to reduce bacteria, dust, pollen, odors, and other pollutants in the home.',
          'Rentmeister specifically highlights the REME HALO UV air purifier as a way to address bio-infectious contaminants such as viruses, bacteria, and mold spores.',
        ],
      },
      {
        title: 'Air Filters',
        content: [
          'The company installs and replaces washable filters, pleated high-efficiency filters, media filters, electrostatic filters, EAC filters, and HEPA filters.',
          'Rentmeister also provides maintenance guidance, including typical cleaning or replacement intervals for each filter type.',
        ],
        bullets: ['Washable filter: clean twice a year', 'Throwaway or pleated filter: replace every 4–6 weeks', 'Media filter: replace once a year', 'HEPA filter: replace twice a year or as needed'],
      },
      {
        title: 'Humidifiers',
        content: [
          'Whole-home humidifiers can help with dry skin, dry nasal passages, scratchy throats, chapped lips, and can also help protect wood finishes, floors, artwork, and instruments.',
          'Rentmeister installs, repairs, and maintains humidifiers and notes that bypass humidifier pad replacement is covered through its maintenance agreement.',
        ],
      },
      {
        title: 'Duct Sealing',
        content: [
          'Rentmeister cites US Department of Energy findings that duct leaks can cause the loss of up to 30% of conditioned air in a ventilation system.',
          'Its duct services include testing, sealing holes and gaps, replacing existing ductwork, and installing energy-efficient duct layouts during repairs and system replacements.',
        ],
      },
    ],
  },
  {
    slug: 'fireplaces',
    title: 'Fireplaces',
    subtitle: 'Installation, repair, replacement, and tune-ups for fireplaces, inserts, gas stoves, and gas logs.',
    imageSrc: '/images/rentmeister/fireplaces-026e4919.jpg',
    intro: [
      'Rentmeister describes the ambiance, comfort, and warmth of a fireplace as unparalleled and positions professional installation, repair, replacement, and maintenance as essential to getting that experience safely.',
      'The company says it is an American Hearth and Monessen Hearth specialist and backs its work with a satisfaction guarantee.',
    ],
    highlights: ['High-efficiency and direct vent fireplaces', 'Gas log and wood stove inserts', 'Yearly inspections and tune-ups', 'Gas stove and gas log expertise'],
    sections: [
      {
        title: 'Installation & Replacement',
        content: [
          'Rentmeister installs high-efficiency fireplaces, direct vent fireplaces, multi-sided fireplaces, gas log inserts, and wood stove inserts into existing fireplaces.',
          'It also supports wall-mounted and stand-alone fireplaces and can handle components such as doors, mantels, and screens.',
        ],
      },
      {
        title: 'Repair & Maintenance',
        content: [
          'The fireplace team recommends yearly inspections so potential issues can be caught early and corrected before they become larger problems.',
          'Rentmeister also offers fireplace tune-up services, ongoing maintenance plans, and prompt repair service when concerns arise.',
        ],
      },
      {
        title: 'Gas Stoves, Inserts & Gas Logs',
        content: [
          'For homes where a traditional fireplace is not feasible, Rentmeister suggests gas stoves and gas fireplace inserts as practical, efficient alternatives.',
          'The company also installs and maintains gas logs and helps homeowners choose the right products without feeling overwhelmed by the options.',
        ],
      },
    ],
  },
  {
    slug: 'water-heater',
    title: 'Water Heater',
    subtitle: 'Tankless and conventional water heater guidance, installation, and long-term performance support.',
    imageSrc: '/images/rentmeister/promotions-99bc7736.jpg',
    intro: [
      'Rentmeister’s water heater service focuses on helping homeowners choose between tank and tankless systems based on house size, hot water demand, and long-term efficiency goals.',
      'The company also ties water heater performance to ongoing maintenance through its Ultimate Service Agreement.',
    ],
    highlights: ['Tankless water heater expertise', 'Tank vs. tankless comparisons', 'Energy savings guidance', 'Maintenance plan support'],
    sections: [
      {
        title: 'Tankless Water Heaters',
        content: [
          'Rentmeister explains that tankless water heaters use a copper heat exchanger to heat water on demand, so they do not run out of stored hot water in the same way a tank system can.',
          'The company highlights the Rinnai RUR199iN as a recommended model but also states it can work with whichever tankless model the customer chooses.',
        ],
      },
      {
        title: 'Tank vs. Tankless',
        content: [
          'A major consideration is standby heat loss in conventional storage tank water heaters, where heat gradually escapes from the tank and forces reheating.',
          'Rentmeister notes that tankless systems avoid this and can reduce water heating costs, with average lifetime savings around 30%, but also points out that high-demand homes may still benefit from a high-efficiency tank model.',
        ],
      },
      {
        title: 'Repair & Installation Support',
        content: [
          'Through the Ultimate Service Agreement, Rentmeister says tank and tankless water heaters can continue operating efficiently year after year.',
          'Routine flushing is included to help prevent sediment buildup and corrosion, which supports both comfort and equipment longevity.',
        ],
      },
    ],
  },
  {
    slug: 'clean-water',
    title: 'Clean Water',
    subtitle: 'Water softeners and HALO filtration systems for cleaner, better-performing water throughout the home.',
    imageSrc: '/images/rentmeister/plumbing-3c3890c9.png',
    intro: [
      'Rentmeister’s clean water services are designed for homeowners dealing with hard water, mineral residue, poor taste, or broader water quality concerns.',
      'The company offers both water softener work and HALO whole-home water filtration systems, with testing and recommendations tailored to the home.',
    ],
    highlights: ['Water softener installation and service', 'HALO water filtration systems', 'In-home water testing', 'Whole-home clean water solutions'],
    sections: [
      {
        title: 'Water Softeners',
        content: [
          'Hard water can lead to residue on dishes, dry skin and hair, brittle nails, and performance issues across household plumbing appliances.',
          'Rentmeister’s plumbing team recommends, installs, repairs, replaces, and maintains water softeners to address those problems.',
        ],
      },
      {
        title: 'Repair & Installation',
        content: [
          'If hard water has returned or water pressure has dropped, Rentmeister positions itself as the team to inspect the issue and restore softener performance.',
          'The company emphasizes that it handles both new installations and the repair or maintenance needed to keep existing softener systems working properly.',
        ],
      },
      {
        title: 'HALO Water Filtration Systems',
        content: [
          'HALO systems are described as a way to provide pure, clean water from every tap for drinking, cooking, washing, and cleaning.',
          'As an authorized HALO dealer and installer, Rentmeister says it will test a home’s water, explain the results, and help determine the best filtration setup for the family’s needs.',
        ],
      },
    ],
  },
  {
    slug: 'kitchen-bathroom-plumbing',
    title: 'Kitchen & Bathroom Plumbing',
    subtitle: 'Drain cleaning, fixture repair, garbage disposals, water treatment, and remodeling support for the rooms that matter most.',
    imageSrc: '/images/rentmeister/contact-plumbing-15ad8573.jpeg',
    intro: [
      'Rentmeister treats the kitchen and bathroom as vital parts of the home and positions fast, knowledgeable plumbing help as essential when issues happen there.',
      'Its plumbers are described as highly qualified and available 24/7 for plumbing emergencies involving showers, toilets, tubs, sinks, disposals, drains, and more.',
    ],
    highlights: ['Drain cleaning', 'Kitchen and bathroom repairs', 'Garbage disposal installation', 'Water treatment help', 'Bathroom remodeling plumbing'],
    sections: [
      {
        title: 'Drain Cleaning',
        content: [
          'Professional drain cleaning is used to prevent plumbing backups and major repairs or replacements before they happen.',
          'Rentmeister says it uses strong equipment and trained plumbers so customers can enjoy better performance from their home plumbing systems.',
        ],
      },
      {
        title: 'Kitchen & Bathroom Plumbing',
        content: [
          'If something goes wrong in the kitchen or bathroom, Rentmeister says it will do its best to save money for the customer while fixing the trouble correctly.',
          'The company specifically mentions repairs for showers, toilets, tubs, sinks, and other common kitchen and bath plumbing components.',
        ],
      },
      {
        title: 'Garbage Disposals',
        content: [
          'Rentmeister handles garbage disposal installation, repair, replacement, and maintenance, explaining that improper installation can trap food particles in pipes and cause clogs.',
          'Its recommendation is to let professional plumbers complete the installation to avoid damage to the plumbing system.',
        ],
      },
      {
        title: 'Water Treatment & Remodeling',
        content: [
          'The company notes that quality water softening extends the life of water heaters, dishwashers, and other plumbing appliances and can improve taste and reduce residue issues.',
          'For remodeling, Rentmeister installs plumbing from the drain pipes to showers and tubs and emphasizes cost-effective bathroom plumbing solutions.',
        ],
      },
    ],
  },
  {
    slug: 'pipes-sewers',
    title: 'Pipes & Sewers',
    subtitle: 'Pipe installation, maintenance, repair, replacement, and repiping to keep home plumbing dependable.',
    imageSrc: '/images/rentmeister/plumbing-152f8df7.webp',
    intro: [
      'Rentmeister covers piping work ranging from standard installation and repairs to whole-house repiping when an older plumbing system continues to create leaks, pressure issues, or repetitive service calls.',
      'The company encourages homeowners to use qualified professionals for piping work so further plumbing damage can be avoided.',
    ],
    highlights: ['Pipe installation', 'Drain maintenance', 'Emergency repair and replacement', 'Whole-house repiping'],
    sections: [
      {
        title: 'Installation',
        content: [
          'Rentmeister says its plumbers are certified to install any type of drain equipment and handle tub, shower, sink, and toilet piping installations or fixes inside the house.',
          'Professional installation is positioned as the best way to prevent additional damage to the home plumbing system.',
        ],
      },
      {
        title: 'Maintenance',
        content: [
          'Regular drain maintenance helps stop future repairs and extend the life of the plumbing system.',
          'The company strongly recommends regular inspections and links that support to the Ultimate Service Agreement.',
        ],
      },
      {
        title: 'Repair & Replacement',
        content: [
          'For emergency repairs, Rentmeister says its plumbers respond quickly and arrive equipped to handle plumbing problems throughout the home.',
          'When replacement is the smarter choice, the team also advises customers on whether to repair or replace parts of the drain system.',
        ],
      },
      {
        title: 'Whole House Repiping',
        content: [
          'Whole-house repiping is recommended when a home faces constant plumbing repairs, leaking pipes, or low water pressure.',
          'Rentmeister says new piping often saves money in the long run and that it performs the work in a way that minimizes disruption to daily life.',
        ],
      },
    ],
  },
  {
    slug: 'commercial-plumbing',
    title: 'Commercial Plumbing',
    subtitle: 'Code-compliant commercial plumbing repairs and maintenance with emergency service available.',
    imageSrc: '/images/rentmeister/commercialplumbing-bb838f91.jpg',
    intro: [
      'Rentmeister positions commercial plumbing support around dependable repairs, emergency response, and proactive maintenance that reduces risk for local businesses.',
      'All repairs are described as being completed according to local codes.',
    ],
    highlights: ['Leaks, clogs, and system backup repairs', '24-hour service availability', 'Routine maintenance agreement benefits', 'Code-conscious commercial work'],
    sections: [
      {
        title: 'Repair',
        content: [
          'Rentmeister handles commercial plumbing repairs for leaks, clogs, system backups, and other common issues that can interrupt operations.',
          'The company notes that the plumbing system can still develop problems even when it is maintained and encourages businesses to call immediately for urgent needs.',
        ],
      },
      {
        title: 'Maintenance',
        content: [
          'Routine maintenance is described as a way to reduce the chances of a plumbing emergency and help equipment such as water heaters keep working when needed.',
          'Rentmeister also highlights its 100% satisfaction guarantee and warranty support as part of the maintenance agreement.',
        ],
      },
    ],
  },
  {
    slug: 'new-construction',
    title: 'New Construction',
    subtitle: 'Whole-home plumbing planning, installation, repiping, and setup for new residential projects.',
    imageSrc: '/images/rentmeister/plumbing-4f11455b.png',
    intro: [
      'Rentmeister says there is a great deal of planning involved in new home plumbing and that strong upfront planning is just as important as the physical installation itself.',
      'The company uses its experience and training to guide plumbing systems from the initial planning stage through the final installed pipe.',
    ],
    highlights: ['Whole-home plumbing installation', 'Whole-home repiping', 'Weather-conscious pipe placement', 'Consultation on piping materials'],
    sections: [
      {
        title: 'Whole Home Plumbing Installation',
        content: [
          'Rentmeister explains that effective new home plumbing starts with proper planning, because a system that is not designed correctly from the beginning cannot be expected to perform effectively.',
          'The company positions itself as a partner from initial planning through final installation.',
        ],
      },
      {
        title: 'Whole Home Repiping',
        content: [
          'When repiping is needed, Rentmeister installs new piping where it will not be unnecessarily exposed to the elements or create issues related to harsh weather conditions.',
          'The plumbers can also insulate exposed sections for extra protection and are focused on reliable long-term operation.',
        ],
      },
      {
        title: 'Repair & Installation Support',
        content: [
          'The team invites homeowners to call with questions about installing new piping or the material choices used for the job.',
          'Rentmeister also notes that it can match new pipes to existing plumbing equipment in the home and takes pride in work that gives customers peace of mind.',
        ],
      },
    ],
  },
  {
    slug: 'electrical-services',
    title: 'Electrical Services',
    subtitle: 'General electrical installation, maintenance, repair, and replacement for safer home systems.',
    imageSrc: '/images/rentmeister/electrical-0c2230f0.jpg',
    intro: [
      'Rentmeister handles new electrical installations such as surge protectors and outlets while also recommending routine electrical panel checkups for ongoing system safety.',
      'Its repair team focuses on accurate work completed quickly without sacrificing homeowner safety.',
    ],
    highlights: ['New outlet and surge protector installs', 'Routine electrical panel checkups', 'Fast and accurate repairs', 'Safety-focused electrical troubleshooting'],
    sections: [
      {
        title: 'Installation & Maintenance',
        content: [
          'New electrical installations, including surge protectors and outlets, are positioned as jobs for Rentmeister’s licensed professionals.',
          'Routine electrical upkeep is recommended because it helps systems operate with fewer repairs and keeps the home safer from electrical dangers.',
        ],
      },
      {
        title: 'Repair & Replacement',
        content: [
          'Warning signs called out by Rentmeister include exposed or fraying wires, sparks, smoke, flickering lights, fading lights, and burning odors.',
          'The company says it goes the extra mile to complete electrical repairs with safety and customer satisfaction as the priority.',
        ],
      },
    ],
  },
  {
    slug: 'lighting',
    title: 'Lighting',
    subtitle: 'Indoor and outdoor lighting installation, maintenance, repair, and fixture replacement.',
    imageSrc: '/images/rentmeister/electrical-56a16398.jpg',
    intro: [
      'Rentmeister’s lighting work covers both indoor and outdoor systems and emphasizes proper installation as the foundation for long-lasting, reliable lighting performance.',
      'The company says its technicians are certified, trained, and licensed for these jobs.',
    ],
    highlights: ['Indoor lighting installation', 'Outdoor lighting installation', 'Fixture repair and replacement', 'Long-term reliability through proper setup'],
    sections: [
      {
        title: 'Installation & Maintenance',
        content: [
          'Lighting installation is described as the most important step because it lays the groundwork for a reliable system.',
          'Rentmeister says choosing professional installation helps homeowners avoid a host of future problems.',
        ],
      },
      {
        title: 'Repair & Replacement',
        content: [
          'When fixtures need repair or replacement, Rentmeister says it works fast without taking shortcuts.',
          'The goal is to deliver the best service with as little hassle as possible for the homeowner.',
        ],
      },
    ],
  },
  {
    slug: 'generators',
    title: 'Generators',
    subtitle: 'Whole-house generator installation, repair, and replacement matched to real home power needs.',
    imageSrc: '/images/rentmeister/electrical-e55bcf2d.jpeg',
    intro: [
      'Rentmeister frames generator work around dependable backup power and correct sizing so the system is ready when it is needed most.',
      'Its installation and repair services are intended to help homeowners avoid mismatched equipment and performance failures during outages.',
    ],
    highlights: ['Whole-house generator installation', 'Power-need matching', 'Repair and replacement support', 'Fast diagnosis when backup power struggles'],
    sections: [
      {
        title: 'Installation',
        content: [
          'Rentmeister says whole-house generators require professional installation so the unit matches the home’s power needs and performs correctly when needed.',
          'The company positions itself as a source for both generator model selection and installation that supports top performance.',
        ],
      },
      {
        title: 'Repair & Replacement',
        content: [
          'If a generator struggles during use, Rentmeister says it will pinpoint the problem and fix it as quickly as possible.',
          'When needed, the company also handles full generator replacement so homeowners are not left with unreliable backup power.',
        ],
      },
    ],
  },
  {
    slug: 'outlets-surge-protectors',
    title: 'Outlets & Surge Protectors',
    subtitle: 'GFCI, AFCI, outlet work, and whole-house surge protection that improves household electrical safety.',
    imageSrc: '/images/rentmeister/electrical-d4d588c6.webp',
    intro: [
      'Rentmeister’s outlet and surge protection services focus on keeping the home safer from electrical fires, electrical shocks, and damaging voltage spikes.',
      'The company recommends professional installation so protective devices do their job without introducing new safety problems.',
    ],
    highlights: ['GFCI and AFCI outlet installation', 'Outlet repair and replacement', 'Whole-house surge protection', 'Electrical safety consultation'],
    sections: [
      {
        title: 'GFCI & AFCI',
        content: [
          'Rentmeister explains that AFCI outlets are designed to help prevent electrical fires while GFCI outlets help prevent electrical shocks.',
          'Most homes will benefit from both types, but in different parts of the house depending on risk and use case.',
        ],
      },
      {
        title: 'Outlet Repair & Installation',
        content: [
          'The company says GFCI and AFCI outlets should be installed, replaced, repaired, and maintained by professionals.',
          'That approach helps the devices protect the household instead of becoming another electrical hazard.',
        ],
      },
      {
        title: 'Surge Protectors',
        content: [
          'Voltage spikes can come from storms, blown transformers, and downed power lines, which is why Rentmeister recommends whole-house surge protection rather than basic power strips alone.',
          'Its electricians wire surge protection into the electrical panel so excess voltage goes to ground instead of through the rest of the system.',
        ],
      },
    ],
  },
  {
    slug: 'ceiling-fans',
    title: 'Ceiling Fans',
    subtitle: 'Ceiling fan installation, repair, and replacement to support comfort and energy efficiency.',
    imageSrc: '/images/rentmeister/electrical-90621c94.jpg',
    intro: [
      'Rentmeister positions ceiling fans as strong partners to a home HVAC system because they can improve comfort while helping lower energy costs.',
      'Installation quality matters, since poorly installed fans can shorten equipment life or create safety hazards.',
    ],
    highlights: ['Professional fan installation', 'Energy-saving comfort support', 'Repair for wobbling or noisy fans', 'Replacement help when needed'],
    sections: [
      {
        title: 'Installation',
        content: [
          'Rentmeister says the initial installation must be done properly or the fan may have a shorter life and could create electrical hazards or even tear loose from the ceiling.',
          'Its licensed and trained technicians handle installation with those safety concerns in mind.',
        ],
      },
      {
        title: 'Repair & Replacement',
        content: [
          'When a ceiling fan is wobbling or spinning oddly, Rentmeister says its electricians can identify the issue and solve it quickly.',
          'The company also applies the same quality-focused approach to full fan replacement when a new unit is the better option.',
        ],
      },
    ],
  },
  {
    slug: 'electrical-panels',
    title: 'Electrical Panels',
    subtitle: 'Electrical panel installation, repair, and replacement to keep the home’s power system dependable.',
    imageSrc: '/images/rentmeister/electrical-f9574584.jpg',
    intro: [
      'Rentmeister describes the electrical panel as the heart of the home electrical system and positions panel upgrades and repairs as essential safety work.',
      'Its team performs the calculations needed to match a new panel to the home’s actual electrical demand.',
    ],
    highlights: ['New panel installation', 'Panel upgrade guidance', 'Repair for aging or damaged panels', 'Safety-first electrical expertise'],
    sections: [
      {
        title: 'Installation',
        content: [
          'When a new electrical panel is needed, Rentmeister says the work will be handled efficiently and matched to the home’s specific needs.',
          'If the homeowner is unsure whether an upgrade is needed, the company invites them to call and speak with an expert first.',
        ],
      },
      {
        title: 'Repair & Replacement',
        content: [
          'Outdated or damaged panels can quickly create serious problems ranging from power loss to electrical fires.',
          'Rentmeister says licensed, highly trained electricians should handle panel repair and replacement so the work is done safely and correctly.',
        ],
      },
    ],
  },
  {
    slug: 'outdoor-kitchens',
    title: 'Outdoor Kitchens',
    subtitle: 'Durable outdoor kitchen systems with fast installation, flexible layouts, and long-term value.',
    imageSrc: '/images/rentmeister/outdoorkitchens-a59d872f.jpg',
    intro: [
      'Rentmeister outdoor kitchens are built with patented Co-Turf technology and promoted as durable, long-lasting systems backed by a best-in-class warranty.',
      'The company says it does not build flimsy 5-year kitchens and instead focuses on 50-year-plus solutions tailored to the family and the property.',
    ],
    highlights: ['Patented Co-Turf technology', 'Best-in-class warranty', '90% pre-built in Hurricane, Utah', 'Installation on pavers, decks, gravel, or concrete'],
    sections: [
      {
        title: 'Durability',
        content: [
          'Rentmeister emphasizes long lifespan and a weather-ready build as the foundation of its outdoor kitchen offering.',
          'The pitch is centered on a durable product rather than a short-term backyard setup.',
        ],
      },
      {
        title: 'Ease & Speed',
        content: [
          'About 90% of each kitchen is pre-built in the company’s Hurricane, Utah factory before assembly happens at the home in just a few hours.',
          'That process is intended to reduce on-site disruption while keeping installation efficient.',
        ],
      },
      {
        title: 'Flexibility',
        content: [
          'Rentmeister offers numerous pre-designed configurations along with custom solutions matched to the home and family’s needs.',
          'The kitchens can be installed on pavers, decks, gravel, or a concrete pad without requiring footings.',
        ],
      },
    ],
  },
  {
    slug: 'maintenance-program',
    title: 'Maintenance Program',
    subtitle: 'The Ultimate Service Agreement for HVAC and plumbing systems with priority service, maintenance, and discounts.',
    imageSrc: '/images/rentmeister/maintenanceprogram-05fc2748.jpg',
    intro: [
      'Rentmeister says even well-designed home systems need annual service to operate at peak efficiency and reduce the risk of failure. The company compares it to changing the oil in a car.',
      'Its Ultimate Service Agreement is presented as a way to extend equipment life, preserve performance, and fit different family budgets while keeping home systems running year-round.',
    ],
    highlights: ['Maintains warranties', 'Increases system performance', 'Extends equipment lifespan', 'Priority scheduling and service', 'Improves air quality', 'Discounts in pricing'],
    sections: [
      {
        title: 'HVAC Plans',
        content: [
          'The program includes HVAC Gold, Silver, and Bronze options with annual and bi-annual choices.',
          'Pricing shown on the site is $25.95 per month for the first system on Gold, $15.95 per month on Silver, and $10.95 per month on Bronze.',
        ],
      },
      {
        title: 'Plumbing Plans',
        content: [
          'Plumbing options include a Combined Flush & Check Plan, a Water Heater Flush Plan, and a Plumbing Check Up Plan.',
          'Benefits include priority customer status, a 5-year warranty on replaced parts while the agreement is maintained, 10% discounts on plumbing repairs and equipment replacement, and no overtime or after-hours charges.',
        ],
        bullets: ['Combined Flush & Check: $155 standard / $185 tankless', 'Water Heater Flush: $125 standard / $155 tankless', 'Plumbing Check Up: $55 per year'],
      },
      {
        title: 'How It Works',
        content: [
          'Rentmeister outlines a simple process: contact the team, choose the plan that fits the home and budget, and then enjoy worry-free maintenance.',
          'The company frames this as a family-to-family commitment to comfort and reliability.',
        ],
      },
      {
        title: 'Why the Program Matters',
        content: [
          'Routine maintenance helps keep warranties valid, supports airflow and overall unit health, protects indoor air quality, and helps customers build an ongoing relationship with trusted technicians.',
          'Members also receive higher priority when comfort emergencies happen and benefit from discounted pricing when repairs are needed.',
        ],
      },
    ],
  },
  {
    slug: 'service-areas',
    title: 'Service Areas',
    subtitle: 'Rentmeister serves cities across Davis, Weber, Morgan, and Salt Lake Counties.',
    imageSrc: '/images/rentmeister/about-a40065ca.jpg',
    intro: [
      'Rentmeister says it has built relationships with customers throughout Davis, Weber, Morgan, and Salt Lake Counties and continues to grow and develop across those areas.',
      'The city list below is pulled from the Rentmeister about page and grouped by county for easier browsing.',
    ],
    highlights: ['Davis County', 'Morgan County', 'Salt Lake County', 'Weber County'],
    sections: serviceAreaGroups.map((group) => ({
      title: group.county,
      content: ['Cities currently listed on the Rentmeister site for this county.'],
      bullets: group.cities,
    })),
  },
  {
    slug: 'making-a-difference',
    title: 'Making a Difference in Our Community',
    subtitle: 'How Rentmeister describes its local giving, sponsorships, and community involvement.',
    imageSrc: '/images/rentmeister/about-d9ca1cc3.jpg',
    intro: [
      'Rentmeister says that after more than 70 years in the community, giving back is an important part of who the company is.',
      'Its community page highlights volunteer time, fundraising support, school and youth sponsorships, home system giveaways, and direct support for families in need.',
    ],
    highlights: ['Syracuse Heritage Days Pancake Breakfast', 'Utah 1033 Foundation support', 'North Davis Project Illumination support', 'The Christi Project donation'],
    sections: [
      {
        title: 'Local Sponsorships & Fundraising',
        content: [
          'Rentmeister employees volunteer time and effort to sponsor the Syracuse Heritage Days Annual Pancake Breakfast.',
          'The company also says it has helped raise funds for the Utah 1033 Foundation and the North Davis Project Illumination.',
        ],
      },
      {
        title: 'Schools, Arts & Youth Programs',
        content: [
          'The community page says Rentmeister has sponsored four high schools, two junior high schools, two elementary schools, Syracuse Arts, Girl Scouts, Boy Scouts, and youth sports programs.',
        ],
      },
      {
        title: 'Systems Donated to Families in Need',
        content: [
          'Rentmeister says it has donated several heating and cooling systems to community members who otherwise would not have heat for the winter or air conditioning for the summer.',
          'The page also points to another round of giveaways for families in need.',
        ],
      },
      {
        title: 'The Christi Project & Ongoing Involvement',
        content: [
          'In 2026, the company says it donated HVAC and plumbing to The Christi Project, a Pierce Design + Build effort to create a fully accessible home for a local child facing complex medical challenges.',
          'Rentmeister also highlights active participation in the West Davis Chamber of Commerce and notes that Ryan Rentmeister taught at Davis Technical College for over 18 years.',
        ],
      },
    ],
  },
  {
    slug: 'affiliations',
    title: 'Affiliations',
    subtitle: 'Real affiliation and financing imagery pulled from the Rentmeister affiliations page.',
    imageSrc: '/images/rentmeister/affiliations-317412c4.jpg',
    intro: [
      'The affiliations page centers on Rentmeister’s partner and financing logos rather than long-form copy.',
      'It also repeats the company phone number, head office address, and the message that 24 hour emergency service is available.',
    ],
    highlights: [emergencyAvailability, 'Financing Available Through:', contactPhone, `${contactAddressLine1}, ${contactAddressLine2}`],
    sections: [
      {
        title: 'What the Page Shows',
        content: [
          'The live affiliations page highlights partner and financing brand imagery, emergency availability, and Rentmeister’s head office contact information.',
          'The logo grid below uses the image assets pulled from the original site so the redesign keeps the real affiliation visuals instead of placeholder marks.',
        ],
      },
    ],
    logoGrid: affiliationLogos,
  },
]
