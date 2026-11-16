import { LISTINGS as PROPERTIES } from './listings'

export { PROPERTIES }

export const COMPANY = {
  name: 'Baroda Realtor',
  tagline: 'Be safe before you buy property',
  logo: '/images/12585-comp-image.png',
  phone: '+91-9712959511',
  phoneHref: 'tel:+919712959511',
  whatsapp: 'https://api.whatsapp.com/send?phone=919712959511&text=Hello! I found your website and am interested in your properties.',
  email: 'barodarealtor73@gmail.com',
  contact: 'Hareshbhai',
  address: 'Gotri sevasi Road, Sevasi, Vadodara, Gujarat, India - 391101',
  year: '2009',
  businessType: 'Real Estate Agent',
  legalStatus: 'Individual (Sole Proprietorship)',
  cities: 'Vadodara',
  employees: '1+',
}

export const ABOUT = {
  intro:
    'Baroda Realtor is one of the most celebrated names in the real estate sphere of Vadodara. The company has become a renowned name in the industry by providing top-notch real estate services. Our list of real estate services comprises buying property services, sell property services, real estate agent services, and rental property services. Due to our steady commitment to deliver excellent services, combined with thorough knowledge of market and effective delivery, we as consultants have been associated with reputed clients. Dial our numbers now to connect with us and avail our services at reasonable charges.',
  leader:
    'Baroda Realtor is a Vadodara (Gujarat, India) based company, which is owned and managed by Mr. Hareshbhai. He is a superb business leader, who has managed to overcome all the company\'s barriers.',
  locations:
    'Our main locations in Vadodara are Dabhoi, Padra, Tarsali, Vaghodia, Akota, Alkapuri, Bhayli, Fatehgunj, Koyali, Savli Town, Sevasi, Subhanpura, Atladra, Karelibaug, Makarpura, Manjalpur, Vadodara Race Course, Sayajigunj, Elora Park, and many more.',
  pillars: [
    {
      title: 'Our Startup',
      image: '/images/comp-info-img-489352.png',
      copy: 'Owing to our vast experience in the domain, we have been rendering valuable real estate solutions to the clients in the most professional manner.',
    },
    {
      title: 'Vision',
      image: '/images/comp-info-img-138697.png',
      copy: 'Baroda Realtor is one of the most celebrated names in the real estate sphere of Vadodara. The company has become a renowned name in the industry by providing top-notch real estate services.',
    },
    {
      title: 'Mission',
      image: '/images/comp-info-img-138698.png',
      copy: 'Due to our steady commitment to deliver excellent services, combined with thorough knowledge of market and effective delivery, we as consultants have been associated with reputed clients.',
    },
    {
      title: 'Values',
      image: '/images/comp-info-img-138698.png',
      copy: 'Over the last many years, Baroda Realtor has turned synonymous with the luxury and high-end real estate market in Vadodara, Gujarat (India). We are surely one of the renowned real estate consultants working in the best and luxury segment.',
    },
  ],
  stats: [
    { label: 'Projects Done', value: '10+' },
    { label: 'Happy Clients', value: '300+' },
    { label: 'Plots Soldout', value: '200+' },
    { label: 'Agricultural Land Soldout', value: '100+' },
  ],
}

const BANNER_IDS = ['1179684', '1141967']

export const HERO = BANNER_IDS.map((id) => {
  const item = PROPERTIES.find((property) => property.id === id)
  return {
    image: `/images/banners/${id}.jpg`,
    price: item.price === 'On request' ? 'Price on request' : `₹ ${item.price}`,
    title: item.location,
    copy: item.title,
    to: `/properties/${item.slug}`,
    cta: 'View more',
  }
})

export const ABOUT_SCENE = '/images/house-6-webp-400x314.webp'

export const LOCALITIES = [
  ['Padra, Vadodara', '/images/padra_93119.jpg'],
  ['Dahej, Bharuch', '/images/1239551_7-350x350.jpg'],
  ['Ajwa Road, Vadodara', '/images/ajwa-road_77966.jpeg'],
  ['Jhagadia Gidc, Bharuch', '/images/1371485_1-350x350.jpg'],
  ['Old Padra Road, Vadodara', '/images/old-padara-road_87337.jpg'],
  ['Gotri, Vadodara', '/images/gotri_14991.jpg'],
  ['Vasna Road, Vadodara', '/images/vasna-road_33384.jpg'],
  ['Manjusar GIDC, Vadodara', '/images/1179684_2-350x350.jpg'],
  ['Savli, Vadodara', '/images/973051_5-350x350.jpg'],
  ['Dahej GIDC, Bharuch', '/images/1239551_9-350x350.jpg'],
  ['Alkapuri, Vadodara', '/images/alkapuri_56161.jpg'],
  ['Sevasi, Vadodara', '/images/1038857_3-350x350.jpg'],
  ['Dabhoi, Vadodara', '/images/dabhoi_74392.jpg'],
  ['Atladra, Vadodara', '/images/atlardra_53561.jpg'],
  ['Halol, Panchmahal', '/images/985810_1-350x350.jpg'],
  ['Halol, Vadodara', '/images/985810_1-350x350.jpg'],
  ['Sherkhi, Vadodara', '/images/listings/1019747.jpg'],
  ['Fatehgunj, Vadodara', '/images/alkapuri_56161.jpg'],
  ['Hari Nagar, Vadodara', '/images/vasna-road_33384.jpg'],
  ['Waghodia, Vadodara', '/images/973051_5-350x350.jpg'],
  ['Tarsali, Vadodara', '/images/570422.jpg'],
  ['GIDC, Bharuch', '/images/1371485_1-350x350.jpg'],
  ['Dabhoi R S, Vadodara', '/images/dabhoi_74392.jpg'],
  ['Sama Savli Road, Vadodara', '/images/savli-town_59293.jpg'],
  ['Gotri Road, Vadodara', '/images/gotri_14991.jpg'],
  ['Saykha Industrial Zone, Bharuch', '/images/1394161_1-350x350.jpg'],
  ['Mahapura, Vadodara', '/images/990429_1-350x350.jpg'],
  ['Dandia Bazar, Vadodara', '/images/dandia-bazar_18414.jpg'],
  ['Tarapur, Anand', '/images/1019868_2-350x350.jpg'],
  ['Sayajigunj, Vadodara', '/images/sayajiganj_51189.jpg'],
  ['Vasna-bhayli-road, Vadodara', '/images/vasna-bhayli-road_31275.jpg'],
  ['Savli Town, Vadodara', '/images/savli-town_59293.jpg'],
  ['GIDC Industrial Area, Vadodara', '/images/1141965_2-350x350.jpg'],
  ['Karjan, Vadodara', '/images/karjan_33521.jpg'],
].map(([name, image]) => ({
  name,
  image,
  slug: name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, ''),
}))

export const SERVICES = [
  {
    slug: 'rental-property',
    title: 'Rental Property',
    image: '/images/rental-property-118019.jpg',
    paragraphs: [
      'Do you need a rental property in Vadodara, Gujarat (India)? If yes, you are in right place. We at Baroda Realtor are helping our clients in finding the right property solutions including flats, apartments, shops, houses, PG, offices, bouquet hall, and any vacant property.',
      'The main thing that a real estate agent does is examination of your need and discovers the kind of property that matches your needs the best. They appreciate your interests, social needs, family members and interior taste, etc., to discover the right property solution.',
      'If you are interested in renting a property with us, just share your needs with us now!',
    ],
  },
  {
    slug: 'real-estate-agent',
    title: 'Real Estate Agent',
    image: '/images/real-estate-agent4.jpg',
    paragraphs: [
      'Baroda Realtor is a Vadodara (Gujarat, India) based company, which is owned and managed by Mr. Hareshbhai. He is a superb business leader, who has managed to overcome all the company\'s barriers.',
      'Our list of real estate services comprises buying property services, sell property services, real estate agent services, and rental property services.',
      'Due to our steady commitment to deliver excellent services, combined with thorough knowledge of market and effective delivery, we as consultants have been associated with reputed clients.',
    ],
  },
  {
    slug: 'buying-property',
    title: 'Buying Property',
    image: '/images/buying-property2.jpg',
    paragraphs: [
      'Baroda Realtor is one of the most celebrated names in the real estate sphere of Vadodara. The company has become a renowned name in the industry by providing top-notch real estate services.',
      'Our list of real estate services comprises buying property services, sell property services, real estate agent services, and rental property services.',
      'Dial our numbers now to connect with us and avail our services at reasonable charges.',
    ],
  },
  {
    slug: 'real-estate-consultant',
    title: 'Real Estate Consultant',
    image: '/images/real-estate-consultant3.jpg',
    paragraphs: [
      'Over the last many years, Baroda Realtor has turned synonymous with the luxury and high-end real estate market in Vadodara, Gujarat (India). We are surely one of the renowned real estate consultants working in the best and luxury segment.',
      'Due to our steady commitment to deliver excellent services, combined with thorough knowledge of market and effective delivery, we as consultants have been associated with reputed clients.',
    ],
  },
]

export const TESTIMONIALS = [
  ['Professional support for MHADA property transfer', 'House Seekers'],
  ['Baroda Realtor knows Sevasi, Vadodara market well', 'Ravi'],
  ['The agent from Baroda Realtor checked society management and audit reports', 'Karan'],
  ['Found a duplex with separate kitchen for joint family through their service', 'Arun'],
  ['A noteworthy property agent. I am happy doing business with Baroda Realtor', 'vikram akade'],
  ['Baroda Realtor transformed Sevasi, Vadodara experience.', 'Rajesh'],
  ['The agent from Baroda Realtor helped me negotiate better purchase terms', 'Abhishek hi'],
  ['Genuine market guidance', 'Mahendra Vishwanath Thakare'],
  ['Happy with results achieved', 'mohan'],
  ['Baroda Realtor agent helped me understand property title insurance benefits', 'Genesis Homes'],
].map(([quote, name]) => ({ quote, name }))


export const PROJECT = {
  slug: 'aashray-elegance',
  title: 'Aashray Elegance',
  location: 'Gotri Sevasi Road, Gotri Road, Vadodara, Gujarat',
  image: '/images/flipbook/flip-189866.jpg',
  type: 'Flats & Apartments',
  unit: '3.5 BHK',
  area: '1267 Sq.ft.',
  possession: 'December 2027',
  rera: 'PR/GJ/VADODARA/VADODARA/Others/MAA10527/020822',
  status: 'Under construction',
  paragraphs: [
    'Aashray Elegance is a Baroda Realtor project of residential apartments on Gotri Sevasi Road, Vadodara. The homes are planned with contemporary finishes and a practical 1267 sq.ft. layout.',
    'The project sits in Bhayli and Gotri, with connections to schools, hospitals, and the main city hubs. Possession is scheduled for December 2027.',
    'Baroda Realtor is offering 3.5 BHK apartments in this project. Ask for the current price, floor options, and site visit.',
  ],
  facts: [
    ['Project type', 'Flats & Apartments'],
    ['Configuration', '3.5 BHK'],
    ['Area', '1267 Sq.ft.'],
    ['Location', 'Gotri Road, Vadodara'],
    ['Possession', 'December 2027'],
    ['RERA', 'PR/GJ/VADODARA/VADODARA/Others/MAA10527/020822'],
  ],
}

export const FLIPBOOK = [
  '/images/flipbook/flip-189866.jpg',
  '/images/flipbook/flip-189867.jpg',
  '/images/flipbook/flip-189868.jpg',
  '/images/flipbook/flip-189869.jpg',
  '/images/flipbook/flip-189870.jpg',
  '/images/flipbook/flip-189871.jpg',
  '/images/flipbook/flip-189872.jpg',
  '/images/flipbook/flip-189873.jpg',
]

export const CAREER_QUALIFICATIONS = [
  'Higher Secondary',
  'Diploma',
  'B.Com',
  'B.B.A',
  'B.Sc',
  'B.Tech / B.E',
  'M.B.A / PGDM',
  'M.Com',
  'Other',
]

export const CAREER_AREAS = [
  'Sales / Business Development',
  'Real Estate / Property Consulting',
  'Customer Service',
  'Accounts',
  'Administration',
  'Other',
]

export const PROPERTY_TYPES = [
  'Flats & Apartments',
  'Individual Houses',
  'Residential Plot',
  'Agricultural/Farm Land',
  'Commercial Shops',
  'Commercial Lands /Inst. Land',
  'Factory / Industrial Building',
  'Industrial Land / Plot',
  'Office Space',
  'Warehouse / Godown',
  'Business Center',
]

export const CATEGORIES = [
  {
    title: 'Flats & Apartments',
    tagline: 'Ready homes in Vadodara',
    type: 'Flats & Apartments',
    image: '/images/8.jpeg',
  },
  {
    title: 'Residential Plots',
    tagline: 'Plots in growing areas',
    type: 'Residential Plot',
    image: '/images/14.jpeg',
  },
  {
    title: 'Farm Land',
    tagline: 'Agricultural land nearby',
    type: 'Agricultural/Farm Land',
    image: '/images/5.jpeg',
  },
  {
    title: 'Office Space',
    tagline: 'Workspaces for businesses',
    type: 'Office Space',
    image: '/images/interior_july_2019-1170x921-webp.webp',
  },
  {
    title: 'Commercial Land',
    tagline: 'Sites for commercial use',
    type: 'Commercial Lands /Inst. Land',
    image: '/images/category-webp.webp',
  },
]

export const STEPS = [
  {
    title: 'Share your need',
    copy: 'Tell us the area, budget, and whether you want to buy or rent.',
  },
  {
    title: 'We shortlist options',
    copy: 'You get properties that match, with location and price checked first.',
  },
  {
    title: 'Visit the property',
    copy: 'We arrange the visit and walk through the society, title, and surroundings.',
  },
  {
    title: 'Close with confidence',
    copy: 'Help with negotiation and paperwork until the deal is done.',
  },
]

export const BHK_OPTIONS = ['2 BHK', '3 BHK', '3.5 BHK', '4 BHK']

export const BUDGETS = [
  { id: 'under-50', label: 'Under ₹50 Lac', max: 5000000 },
  { id: '50-100', label: '₹50 Lac – ₹1 Cr', min: 5000000, max: 10000000 },
  { id: '100-200', label: '₹1 Cr – ₹2 Cr', min: 10000000, max: 20000000 },
  { id: 'above-200', label: 'Above ₹2 Cr', min: 20000000 },
]

export function formatPrice(price) {
  if (!price || price === 'On request') return 'Price on request'
  if (String(price).includes('₹')) return price
  return `₹ ${price}`
}

export function priceToNumber(price) {
  const text = String(price)
  if (/request|\/|month|vigha|per /i.test(text)) return null
  const match = text.replace(/,/g, '').match(/[\d.]+/)
  if (!match) return null
  const value = Number(match[0])
  if (/cr/i.test(text)) return value * 10000000
  if (/lac/i.test(text)) return value * 100000
  return null
}

export function matchesLocality(property, place) {
  const [area, city = ''] = place.name.split(',').map((part) => part.trim())
  const propertyCity = (property.city || '').trim()
  if (city && propertyCity && city.toLowerCase() !== propertyCity.toLowerCase()) return false
  const skip = new Set(['road', 'area', 'zone', 'near', 'sale', 'rent', 'plot'])
  const words = (value) => value.toLowerCase().split(/[^a-z0-9]+/).filter((word) => word.length > 3 && !skip.has(word))
  const wanted = words(area)
  const found = words(property.location)
  if (!wanted.length) return property.location.toLowerCase().includes(area.toLowerCase())
  return wanted.every((word) => found.includes(word))
}

export function getProperty(slug) {
  return PROPERTIES.find((item) => item.slug === slug)
}

export function getLocality(slug) {
  return LOCALITIES.find((item) => item.slug === slug)
}

export function getService(slug) {
  return SERVICES.find((item) => item.slug === slug)
}
