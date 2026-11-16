import { Link } from 'react-router-dom'
import { COMPANY } from '../data/content'

export default function AskBand({ title = 'Talk to us before you buy', copy = 'Call or send a message about homes, plots, and land around Vadodara. We answer promptly.' }) {
  return (
    <section className="plan-band">
      <div className="wrap plan-band-inner">
        <div>
          <h2>{title}</h2>
          <p>{copy}</p>
        </div>
        <div className="plan-actions">
          <a className="btn" href={COMPANY.phoneHref}>{COMPANY.phone}</a>
          <Link className="btn btn-line" to="/contact">Contact</Link>
        </div>
      </div>
    </section>
  )
}
