import IncidentFeed from "../components/IncidentFeed.jsx";
import ZoneFilter from "../components/ZoneFilter.jsx";
import { useState } from "react";

export default function ReportedIncidents({ incidents }) {
  const [selectedZone, setSelectedZone] = useState("All");

  const filteredIncidents =
    selectedZone === "All"
      ? incidents
      : incidents.filter((inc) => inc.zone === selectedZone);

  return (
    <section className="incident-page">
      <h1>Reported Incidents</h1>
      <p>Browse all incidents submitted by community members.</p>

      <ZoneFilter selectedZone={selectedZone} onChange={setSelectedZone} />
      <IncidentFeed incidents={filteredIncidents} />
    </section>
  );
}