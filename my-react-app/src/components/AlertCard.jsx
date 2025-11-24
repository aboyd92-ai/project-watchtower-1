export default function AlertCard({ incident }) {

  // Determine color class based on severity
  const severityClass =
    incident.severity === "High"
      ? "severity-high"
      : incident.severity === "Medium"
      ? "severity-medium"
      : incident.severity === "Low"
      ? "severity-low"
      : "";

  // Icon for severity
  const icon =
    incident.severity === "High"
      ? "\u{1F6A8}" // 🚨
      : incident.severity === "Medium"
      ? "\u{26A1}" // ⚡
      : incident.severity === "Low"
      ? "\u{1F514}" // 🔔
      : "";

  // Message under description
  const message =
    incident.severity === "High"
      ? "High severity — 911! calling local authorities."
      : incident.severity === "Medium"
      ? "Medium severity — stay alert and warn individuals in surrounding areas of potential violence."
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