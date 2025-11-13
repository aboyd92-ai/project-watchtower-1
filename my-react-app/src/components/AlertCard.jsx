export default function AlertCard({ incident }) {
  return (
    <article className={`alert-card alert-${incident.severity}`}>
      <header>
        <h3>{incident.title}</h3>
        <span className="zone-tag">{incident.zone}</span>
      </header>
      <p>{incident.description}</p>
      <small>{incident.time}</small>
    </article>
  )
}