import { Link } from 'react-router-dom'

export default function PageIntro({ crumbs = [], eyebrow, title, lead, children }) {
  return (
    <section className="page-intro">
      <div className="wrap">
        <p className="crumbs">
          <Link to="/">Home</Link>
          {crumbs.map((crumb) => (
            <span key={crumb.label}>
              {' / '}
              {crumb.to ? <Link to={crumb.to}>{crumb.label}</Link> : crumb.label}
            </span>
          ))}
        </p>
        {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
        <div className="page-intro-row">
          <div>
            <h1>{title}</h1>
            {lead ? <p className="page-lead">{lead}</p> : null}
          </div>
          {children}
        </div>
      </div>
    </section>
  )
}
