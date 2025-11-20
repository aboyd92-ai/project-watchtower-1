import ReportForm from "../components/ReportForm";
import IncidentFeed from "../components/IncidentFeed.jsx";

export default function Report({ onAddIncident, reports }) {
  return (
    <section className="report-page">
      <div className="report-card">
        <ReportForm onAddIncident={onAddIncident} />
      </div>

      <div className="report-results">
        <h2>Your submitted reports</h2>
        {reports.length === 0 ? (
          <p>No reports submitted yet.</p>
        ) : (
          <IncidentFeed incidents={reports} />
        )}
      </div>
    </section>
  );
}