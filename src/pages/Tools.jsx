import { useMemo, useState } from 'react'
import { useLocation } from 'react-router-dom'

const UNITS = {
  'Sq.ft.': 1,
  'Sq. meter': 10.7639,
  'Sq. yard': 9,
  Guntha: 1089,
  Acre: 43560,
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
    if (!amount || !months) return 0
    if (!monthlyRate) return amount / months
    const emi = (amount * monthlyRate * (1 + monthlyRate) ** months) / ((1 + monthlyRate) ** months - 1)
    return emi
  }, [amount, rate, years])

  return (
    <ToolShell title="EMI Calculator" crumb="EMI Calculator">
      <label className="field">Loan amount (₹)<input type="number" value={amount} min="0" onChange={(event) => setAmount(Number(event.target.value))} /></label>
      <label className="field">Interest rate (% per year)<input type="number" value={rate} step="0.1" min="0" onChange={(event) => setRate(Number(event.target.value))} /></label>
      <label className="field">Tenure (years)<input type="number" value={years} min="1" onChange={(event) => setYears(Number(event.target.value))} /></label>
      <p className="price">Monthly EMI ₹ {Math.round(result).toLocaleString('en-IN')}</p>
    </ToolShell>
  )
}

function AreaConverter() {
  const [value, setValue] = useState(1000)
  const [from, setFrom] = useState('Sq.ft.')
  const sqft = value * UNITS[from]

  return (
    <ToolShell title="Area Converter" crumb="Area Converter">
      <label className="field">Value<input type="number" value={value} min="0" onChange={(event) => setValue(Number(event.target.value))} /></label>
      <label className="field">From
        <select value={from} onChange={(event) => setFrom(event.target.value)}>
          {Object.keys(UNITS).map((unit) => <option key={unit}>{unit}</option>)}
        </select>
      </label>
      <div className="facts">
        {Object.entries(UNITS).map(([unit, factor]) => (
          <div key={unit}><span>{unit}</span><strong>{(sqft / factor).toLocaleString('en-IN', { maximumFractionDigits: 2 })}</strong></div>
        ))}
      </div>
    </ToolShell>
  )
}

function ToolShell({ title, crumb, children }) {
  return (
    <>
      <section className="page-hero">
        <div className="wrap">
          <p className="crumbs">Home / {crumb}</p>
          <h1>{title}</h1>
        </div>
      </section>
      <section className="section">
        <div className="wrap form" style={{ maxWidth: 720 }}>{children}</div>
      </section>
    </>
  )
}
