import { useLocation } from 'react-router-dom'
import EnquiryForm from '../components/EnquiryForm'

export default function PostFormPage() {
  const isRequirement = useLocation().pathname.includes('requirement')
  const title = isRequirement ? 'Post Requirement' : 'Post Property'

  return (
    <>
      <section className="page-hero">
        <div className="wrap">
          <p className="crumbs">Home / {title}</p>
          <h1>{title}</h1>
        </div>
      </section>
      <section className="section">
        <div className="wrap" style={{ maxWidth: 720 }}>
          <p>
            {isRequirement
              ? 'Tell Baroda Realtor what you want to buy or rent in Vadodara, Bharuch, Anand, or Panchmahal.'
              : 'Share a property you want Baroda Realtor to sell or rent.'}
          </p>
          <EnquiryForm subject={title} />
        </div>
      </section>
    </>
  )
}
