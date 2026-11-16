import { COMPANY } from '../data/content'

export default function WhatsAppButton() {
  return (
    <a
      className="whatsapp-float"
      href={COMPANY.whatsapp}
      target="_blank"
      rel="noreferrer"
      aria-label="Chat on WhatsApp"
    >
      <span className="whatsapp-float-ring" aria-hidden="true" />
      <span className="whatsapp-float-ring whatsapp-float-ring-delay" aria-hidden="true" />
      <span className="whatsapp-float-label">Chat on WhatsApp</span>
      <span className="whatsapp-float-icon" aria-hidden="true">
        <svg viewBox="0 0 32 32">
          <path d="M16.01 3C9.4 3 4.03 8.37 4.03 14.98c0 2.11.55 4.17 1.6 5.99L4 29l8.22-2.15a11.94 11.94 0 0 0 5.79 1.48h.01c6.61 0 11.98-5.37 11.98-11.98C29.99 8.37 22.62 3 16.01 3zm6.96 16.95c-.29.82-1.45 1.5-2.37 1.7-.63.13-1.45.24-4.22-.91-3.54-1.46-5.82-5.05-6-5.28-.17-.23-1.42-1.89-1.42-3.6 0-1.71.9-2.55 1.22-2.9.32-.35.7-.44.93-.44.23 0 .47 0 .67.01.22.01.51-.08.8.61.29.7 1 2.42 1.09 2.6.09.17.15.38.03.61-.12.23-.18.38-.35.58-.17.2-.37.45-.53.6-.17.17-.36.36-.15.7.2.35.9 1.48 1.93 2.4 1.33 1.18 2.45 1.55 2.8 1.72.35.17.55.15.76-.09.2-.23.87-1.01 1.1-1.36.23-.35.47-.29.79-.17.32.12 2.04.96 2.39 1.14.35.17.58.26.67.41.09.14.09.84-.2 1.66z" />
        </svg>
      </span>
    </a>
  )
}
