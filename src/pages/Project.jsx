import { Link } from 'react-router-dom'
import EnquiryForm from '../components/EnquiryForm'

export default function ProjectPage() {
  return (
    <>
      <section className="page-hero" style={{ backgroundImage: 'linear-gradient(rgba(0,0,0,.45), rgba(0,0,0,.45)), url(/images/gotri_14991.jpg)' }}>
        <div className="wrap">
          <p className="crumbs">Home / Our Projects / Aashray Elegance</p>
          <h1>Aashray Elegance</h1>
        </div>
      </section>
      <section className="section">
        <div className="wrap detail">
          <div>
            <p>Aashray Elegance is a Baroda Realtor project in Gotri Road, Vadodara.</p>
            <p>Ask for the current availability, price, and site details. Nearby homes in Gotri are also listed with the agency.</p>
            <Link className="btn" to="/localities/gotri-vadodara">Properties in Gotri</Link>
          </div>
          <EnquiryForm subject="Aashray Elegance" />
        </div>
      </section>
    </>
  )
}
