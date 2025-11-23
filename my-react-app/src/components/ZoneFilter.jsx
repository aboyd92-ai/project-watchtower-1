const ZONES = ["All", "Northside", "Southside", "Eastside", "Westside", "Downtown"];

export default function ZoneFilter({ selectedZone, onChange }) {
    return (
        <div className="zone-filter">
            <label> Filter by zone:</label>
            <select value={selectedZone} onChange={e => onChange(e.target.value)}>
                {ZONES.map(zone => (
                    <option key={zone || "none"} value={zone}>{zone}</option>
                ))}
            </select>
        </div>
    )
}