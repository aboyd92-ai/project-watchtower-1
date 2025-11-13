import { useState } from "react";
import IncidentFeed from "../components/IncidentFeed.jsx";
import ZoneFilter from "../components/ZoneFilter.jsx";

export default function Home({ incidents }) {
  const [selectedZone, setSelectedZone] = useState("All");

  const filtered = selectedZone === "All"
    ? incidents
    : incidents.filter((inc) => inc.zone === selectedZone);

  return (
    <section>
      <h1>Recent Incidents</h1>
      <p>Stay aware of what’s happening in your community.</p>

      <ZoneFilter selectedZone={selectedZone} onChange={setSelectedZone} />

      <IncidentFeed incidents={filtered} />
    </section>
  );
}