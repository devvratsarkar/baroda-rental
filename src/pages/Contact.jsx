import EnquiryForm from '../components/EnquiryForm'
import PageIntro from '../components/PageIntro'
import { COMPANY } from '../data/content'

export default function ContactPage() {
  return (
    <>
      <PageIntro
        eyebrow="Quick contact"
        title="Contact Us"
        lead="Call, write, or send a message. Hareshbhai handles enquiries for homes, plots, and land."
        crumbs={[{ label: 'Contact Us' }]}
      />
      <section className="section section-tight">
        <div className="wrap">
          <div className="contact-cards">
            <a className="contact-card" href={COMPANY.phoneHref}>
              <span>Call</span>
              <strong>{COMPANY.phone}</strong>
              <em>{COMPANY.contact}</em>
            </a>
            <a className="contact-card" href={`mailto:${COMPANY.email}`}>
              <span>Email</span>
              <strong>{COMPANY.email}</strong>
              <em>We reply by email</em>
            </a>
            <a className="contact-card" href={COMPANY.whatsapp} target="_blank" rel="noreferrer">
              <span>WhatsApp</span>
              <strong>Chat with us</strong>
              <em>Share the property you have in mind</em>
            </a>
          </div>
          <div className="layout">
            <div>
              <p className="address-line">{COMPANY.address}</p>
              <iframe
                className="map-frame"
                title="Baroda Realtor office map"
                src="https://maps.google.com/maps?q=Gotri%20sevasi%20Road%20Sevasi%20Vadodara&t=&z=14&ie=UTF8&iwloc=&output=embed"
              />
            </div>
            <aside className="side-card">
              <h2>Quick Enquiry</h2>
              <EnquiryForm subject="Website enquiry" />
            </aside>
          </div>
        </div>
      </section>
    </>
  )
}
