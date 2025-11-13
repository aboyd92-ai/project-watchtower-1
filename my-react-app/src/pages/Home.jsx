import { useState } from "react"
import { incidents as seedData } from "../data/incidents"
import IncidentFeed from "../components/IncidentFeed.jsx"
import ZoneFilter from "../components/ZoneFilter.jsx"

export default function Home() {
    const [selectedZone, setSelectedZone] = useState("All")

    const filtered = selectedZone === "All"
        ? seedData
        : seedData.filter(incident => incident.zone === selectedZone)
    return (
        <section>
            <h1>Welcome to Watchtower</h1>
            <p>Your trusted platform for reporting and tracking safety incidents in your community.</p>
        </section>
    )
}