import { useState } from 'react'
import { COMPANY } from '../data/content'

const INTENTS = ['Buy a Property', 'Rent a Property', 'Sell a Property']

export default function EnquiryForm({ subject = 'Property enquiry' }) {
  const [sent, setSent] = useState(false)

  function onSubmit(event) {
    event.preventDefault()
    const data = new FormData(event.currentTarget)
    const body = [
      `Name: ${data.get('name')}`,
      `Email: ${data.get('email')}`,
      `Phone: ${data.get('phone')}`,
      `I want to: ${data.get('intent')}`,
      '',
      data.get('message'),
    ].join('\n')
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
      <label className="field">
        I want to
        <select name="intent" defaultValue={INTENTS[0]}>
          {INTENTS.map((intent) => <option key={intent}>{intent}</option>)}
        </select>
      </label>
      <label className="field">
        Leave a Message for us
        <textarea name="message" rows="4" placeholder="Leave a Message for us" />
      </label>
      <button className="btn" type="submit">Send Message</button>
    </form>
  )
}
