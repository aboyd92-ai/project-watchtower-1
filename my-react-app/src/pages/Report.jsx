import ReportForm from "../components/ReportForm.jsx";

export default function Report({ onAddIncident }) {
    return (
        <section>
            <h1>Submit a Report</h1>
            <p>Please fill out the form below to report a crime incident.</p>
            <ReportForm onAdd={onAddIncident} />
        </section>
    )
}