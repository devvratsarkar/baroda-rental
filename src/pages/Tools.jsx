import { useMemo, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import PageIntro from '../components/PageIntro'

const UNITS = {
  'Sq.ft.': 1,
  'Sq. meter': 10.7639,
  'Sq. yard': 9,
  Guntha: 1089,
  Acre: 43560,
  Vigha: 4000,
}

export default function ToolsPage() {
  const isArea = useLocation().pathname.includes('area')
  return isArea ? <AreaConverter /> : <EmiCalculator />
}

function EmiCalculator() {
  const [amount, setAmount] = useState(2500000)
  const [rate, setRate] = useState(8.5)
  const [years, setYears] = useState(20)
  const result = useMemo(() => {
    const months = years * 12
    const monthlyRate = rate / 12 / 100
    if (!amount || !months) return { emi: 0, total: 0, interest: 0 }
    const emi = monthlyRate
      ? (amount * monthlyRate * (1 + monthlyRate) ** months) / ((1 + monthlyRate) ** months - 1)
      : amount / months
    const total = emi * months
    return { emi, total, interest: total - amount }
  }, [amount, rate, years])

  return (
    <ToolShell
      eyebrow="Home loan"
      title="EMI Calculator"
      lead="Estimate the monthly payment for a home loan before you commit to a property."
      crumb="EMI Calculator"
    >
      <label className="field">
        Loan amount (₹)
        <input type="number" value={amount} min="0" onChange={(event) => setAmount(Number(event.target.value))} />
      </label>
      <label className="field">
        Interest rate (% per year)
        <input type="number" value={rate} step="0.1" min="0" onChange={(event) => setRate(Number(event.target.value))} />
      </label>
      <label className="field">
        Tenure (years)
        <input type="number" value={years} min="1" onChange={(event) => setYears(Number(event.target.value))} />
      </label>
      <div className="tool-result">
        <span>Monthly EMI</span>
        <strong>₹ {Math.round(result.emi).toLocaleString('en-IN')}</strong>
      </div>
      <div className="fact-grid">
        <div><span>Total payment</span><strong>₹ {Math.round(result.total).toLocaleString('en-IN')}</strong></div>
        <div><span>Total interest</span><strong>₹ {Math.round(result.interest).toLocaleString('en-IN')}</strong></div>
      </div>
      <p className="muted tool-note">
        This is an estimate. The bank’s offer can differ. <Link to="/area-converter">Convert area units</Link>
      </p>
    </ToolShell>
  )
}

function AreaConverter() {
  const [value, setValue] = useState(1000)
  const [from, setFrom] = useState('Sq.ft.')
  const sqft = (Number(value) || 0) * UNITS[from]

  return (
    <ToolShell
      eyebrow="Land measurement"
      title="Area Converter"
      lead="Convert square feet, square meters, yards, guntha, vigha, and acres."
      crumb="Area Converter"
    >
      <label className="field">
        Value
        <input type="number" value={value} min="0" onChange={(event) => setValue(Number(event.target.value))} />
      </label>
      <label className="field">
        From
        <select value={from} onChange={(event) => setFrom(event.target.value)}>
          {Object.keys(UNITS).map((unit) => <option key={unit}>{unit}</option>)}
        </select>
      </label>
      <div className="fact-grid">
        {Object.entries(UNITS).map(([unit, factor]) => (
          <div key={unit}>
            <span>{unit}</span>
            <strong>{(sqft / factor).toLocaleString('en-IN', { maximumFractionDigits: 2 })}</strong>
          </div>
        ))}
      </div>
      <p className="muted tool-note">
        Vigha is shown as 4,000 sq.ft., a figure commonly used around Vadodara. <Link to="/emi-calculator">Calculate EMI</Link>
      </p>
    </ToolShell>
  )
}

function ToolShell({ eyebrow, title, lead, crumb, children }) {
  return (
    <>
      <PageIntro eyebrow={eyebrow} title={title} lead={lead} crumbs={[{ label: crumb }]} />
      <section className="section section-tight">
        <div className="wrap panel tool-panel">{children}</div>
      </section>
    </>
  )
}
