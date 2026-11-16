import { useLocation } from 'react-router-dom'
import EnquiryForm from '../components/EnquiryForm'
import PageIntro from '../components/PageIntro'
import { BHK_OPTIONS, LOCALITIES, PROPERTY_TYPES } from '../data/content'

export default function PostFormPage() {
  const isRequirement = useLocation().pathname.includes('requirement')
  const title = isRequirement ? 'Post Requirement' : 'Post Property'
  const extras = isRequirement
    ? [
      { name: 'type', label: 'Property type', options: PROPERTY_TYPES, placeholder: 'Any type' },
      { name: 'location', label: 'Preferred locality', options: LOCALITIES.map((place) => place.name), placeholder: 'Any locality' },
      { name: 'bhk', label: 'Bedrooms', options: BHK_OPTIONS, placeholder: 'Any' },
      { name: 'budget', label: 'Budget', placeholder: 'Your budget' },
    ]
    : [
      { name: 'type', label: 'Property type', options: PROPERTY_TYPES, required: true, placeholder: 'Select type' },
      { name: 'location', label: 'Location', placeholder: 'Area, Vadodara', required: true },
      { name: 'size', label: 'Area', placeholder: 'For example, 1200 Sq.ft.' },
      { name: 'price', label: 'Expected price', placeholder: 'Sale price or monthly rent' },
    ]

  return (
    <>
      <PageIntro
        eyebrow={isRequirement ? 'Buy or rent' : 'Sell or rent out'}
        title={title}
        lead={isRequirement
          ? 'Tell Baroda Realtor what you want to buy or rent in Vadodara, Bharuch, Anand, or Panchmahal.'
          : 'Share a property you want Baroda Realtor to sell or rent. There is no listing fee.'}
        crumbs={[{ label: title }]}
      />
      <section className="section section-tight">
        <div className="wrap layout form-layout">
          <div className="steps">
            {(isRequirement
              ? [
                ['Share the brief', 'Area, budget, and whether you want to buy or rent.'],
                ['We shortlist', 'You get options that match, with price and location checked.'],
                ['Visit', 'We arrange the visit and stay with you through the paperwork.'],
              ]
              : [
                ['Send the details', 'Type, location, size, and the price you have in mind.'],
                ['We review it', 'Hareshbhai confirms the papers and the asking price.'],
                ['We find a buyer', 'The property is shown to people already looking in that area.'],
              ]).map(([heading, copy], index) => (
              <article className="step" key={heading}>
                <span>{index + 1}</span>
                <h3>{heading}</h3>
                <p>{copy}</p>
              </article>
            ))}
          </div>
          <aside className="side-card">
            <h2>{title}</h2>
            <EnquiryForm
              subject={title}
              intents={isRequirement ? ['Buy a Property', 'Rent a Property'] : ['Sell a Property', 'Rent out a Property']}
              extras={extras}
              submitLabel={isRequirement ? 'Send requirement' : 'Submit property'}
            />
          </aside>
        </div>
      </section>
    </>
  )
}
