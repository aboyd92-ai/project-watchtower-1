export default function AlertCard({ incident }) {

  // Determine color class based on severity
  const severityClass =
    incident.severity === "High"
      ? "severity-high"
      : incident.severity === "Medium"
      ? "severity-medium"
      : "severity-low";

  // Icon for severity
  const icon =
    incident.severity === "High"
      ? "🚨"
      : incident.severity === "Medium"
      ? "⚠️"
      : "👁️‍🗨️";

  // Message under description
  const message =
    incident.severity === "High"
      ? "High severity — consider calling local authorities."
      : incident.severity === "Medium"
      ? "Medium severity — stay alert and warn neighbors."
      : "Low severity — neighborhood watch recommended.";

  return (
    <article className={`alert-card ${severityClass}`}>
      <header className="alert-header">
        <h3>{incident.title}</h3>

        <span className={`severity-badge ${incident.severity.toLowerCase()}`}>
          {icon} {incident.severity}
        </span>
      </header>

      <p className="alert-description">{incident.description}</p>
      <p className="severity-message">{message}</p>

      <footer className="alert-footer">
        <small>{incident.time}</small>
        <span className="zone-tag">{incident.zone}</span>
      </footer>
    </article>
  );
}