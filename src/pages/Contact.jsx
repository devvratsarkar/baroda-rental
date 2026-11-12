import EnquiryForm from '../components/EnquiryForm'
import { COMPANY } from '../data/content'

export default function ContactPage() {
  return (
    <>
      <section className="page-hero">
        <div className="wrap">
          <p className="crumbs">Home / Contact Us</p>
          <h1>Contact Us</h1>
        </div>
      </section>
      <section className="section">
        <div className="wrap detail">
          <div>
            <h2>Quick Contact</h2>
            <p><strong>{COMPANY.contact}</strong></p>
            <p>{COMPANY.address}</p>
            <p><a href={COMPANY.phoneHref}>{COMPANY.phone}</a></p>
            <p><a href={`mailto:${COMPANY.email}`}>{COMPANY.email}</a></p>
            <p><a href={COMPANY.whatsapp} target="_blank" rel="noreferrer">Chat on WhatsApp</a></p>
            <iframe
              title="Baroda Realtor office map"
              src="https://maps.google.com/maps?q=Gotri%20sevasi%20Road%20Sevasi%20Vadodara&t=&z=14&ie=UTF8&iwloc=&output=embed"
              style={{ width: '100%', height: 320, border: 0, borderRadius: 12, marginTop: 12 }}
            />
          </div>
          <div>
            <h2>Quick Enquiry</h2>
            <EnquiryForm />
          </div>
        </div>
      </section>
    </>
  )
}
