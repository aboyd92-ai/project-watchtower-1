import { useState } from 'react'

export default function ReportForm({ onAdd }) {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [zone, setZone] = useState('North')
  const [severity, setSeverity] = useState('low')
  const [error, setError] = useState('')

  function handleSubmit(e) {
    e.preventDefault()
    if (!title.trim() || !description.trim()) {
      setError('Title and description are required.')
      return
    }
    setError('')
    const newIncident = {
      id: crypto.randomUUID(),
      title,
      description,
      zone,
      severity,
      time: new Date().toISOString().slice(0, 16).replace('T', ' ')
    }
    onAdd(newIncident)
    // reset
    setTitle('')
    setDescription('')
    setZone('North')
    setSeverity('low')
  }

  return (
    <form className="report-form" onSubmit={handleSubmit}>
      <label>
        Title*
        <input value={title} onChange={(e) => setTitle(e.target.value)} />
      </label>

      <label>
        Description*
        <textarea value={description} onChange={(e) => setDescription(e.target.value)} />
      </label>

      <label>
        Zone
        <select value={zone} onChange={(e) => setZone(e.target.value)}>
          <option>North</option>
          <option>South</option>
          <option>East</option>
          <option>West</option>
        </select>
      </label>

      <label>
        Severity
        <select value={severity} onChange={(e) => setSeverity(e.target.value)}>
          <option value="low">Low</option>
          <option value="medium">Medium</option>
          <option value="high">High</option>
        </select>
      </label>

      {error && <p className="error">{error}</p>}

      <button type="submit">Submit Report</button>
    </form>
  )
}