import { useState } from 'react'
import { COMPANY } from '../data/content'

const INTENTS = ['Buy a Property', 'Rent a Property', 'Sell a Property']

export default function EnquiryForm({
  subject = 'Property enquiry',
  intents = INTENTS,
  extras = [],
  submitLabel = 'Send Message',
}) {
  const [sent, setSent] = useState(false)

  function onSubmit(event) {
    event.preventDefault()
    const data = new FormData(event.currentTarget)
    const lines = [
      `Name: ${data.get('name')}`,
      `Email: ${data.get('email')}`,
      `Phone: ${data.get('phone')}`,
    ]
    if (intents.length) lines.push(`I want to: ${data.get('intent')}`)
    extras.forEach((field) => lines.push(`${field.label}: ${data.get(field.name) || ''}`))
    lines.push('', data.get('message') || '')
    const body = lines.join('\n')
    setSent(true)
    window.location.href = `mailto:${COMPANY.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
  }

  if (sent) {
    return (
      <div className="success">
        <p>Thank you</p>
        <p>Your Enquiry has been sent successfully.</p>
      </div>
    )
  }

  return (
    <form className="form" onSubmit={onSubmit}>
      <label className="field">
        Your Name
        <input name="name" required placeholder="Your Name" />
      </label>
      <label className="field">
        Email
        <input name="email" type="email" required placeholder="Email" />
      </label>
      <label className="field">
        Phone / Mobile
        <input name="phone" required placeholder="Phone / Mobile" />
      </label>
      {intents.length ? (
        <label className="field">
          I want to
          <select name="intent" defaultValue={intents[0]}>
            {intents.map((intent) => <option key={intent}>{intent}</option>)}
          </select>
        </label>
      ) : null}
      {extras.map((field) => (
        <label className="field" key={field.name}>
          {field.label}
          {field.options ? (
            <select name={field.name} defaultValue="" required={field.required}>
              <option value="">{field.placeholder || 'Select'}</option>
              {field.options.map((option) => <option key={option}>{option}</option>)}
            </select>
          ) : (
            <input name={field.name} required={field.required} placeholder={field.placeholder || field.label} />
          )}
        </label>
      ))}
      <label className="field">
        Leave a Message for us
        <textarea name="message" rows="4" placeholder="Leave a Message for us" />
      </label>
      <button className="btn" type="submit">{submitLabel}</button>
    </form>
  )
}
