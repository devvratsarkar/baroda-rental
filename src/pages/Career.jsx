import EnquiryForm from '../components/EnquiryForm'
import PageIntro from '../components/PageIntro'
import { CAREER_AREAS, CAREER_QUALIFICATIONS } from '../data/content'

export default function CareerPage() {
  return (
    <>
      <PageIntro
        eyebrow="Work with us"
        title="Career with Us"
        lead="Baroda Realtor is a small Vadodara practice. There is no opening at the moment. You can still leave your details for the next role."
        crumbs={[{ label: 'Career' }]}
      />
      <section className="section section-tight">
        <div className="wrap layout">
          <div>
            <div className="notice">
              <p className="eyebrow">Current openings</p>
              <h2>No opening yet</h2>
              <p>When a role opens in sales or property consulting, we contact people who have already written in.</p>
            </div>
            <div className="prose">
              <p>Roles we hire for, when we hire, are local: showing properties, speaking with owners, and keeping listings accurate across Vadodara, Bharuch, Anand, and Panchmahal.</p>
            </div>
          </div>
          <aside className="side-card">
            <h2>Share your profile</h2>
            <EnquiryForm
              subject="Career application"
              intents={[]}
              submitLabel="Submit profile"
              extras={[
                { name: 'city', label: 'Current city', placeholder: 'Vadodara', required: true },
                { name: 'qualification', label: 'Qualification', options: CAREER_QUALIFICATIONS, placeholder: 'Select qualification' },
                { name: 'area', label: 'Functional area', options: CAREER_AREAS, placeholder: 'Select area' },
              ]}
            />
          </aside>
        </div>
      </section>
    </>
  )
}
