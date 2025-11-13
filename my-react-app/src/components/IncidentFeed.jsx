import AlertCard from './AlertCard.jsx';

export default function IncidentFeed({ incidents }) {
    if (!incidents.length) {
        return <p>No incidents reported.</p>;
    }
    return (
        <div className="incident-feed">
            {incidents.map(incident => (
                <AlertCard key={incident.id} incident={incident} />
            ))}
        </div>
    )
}