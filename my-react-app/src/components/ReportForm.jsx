import { useState } from "react";

export default function ReportForm({ onAddIncident }) {
  const [title, setTitle] = useState("");          // what happened
  const [severity, setSeverity] = useState("Low");
  const [zone, setZone] = useState("Northside");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [details, setDetails] = useState("");      // comment box
  const [error, setError] = useState("");

    const today = new Date(); 
  const maxDate = today.toISOString().split("T")[0]; 

  const minDateObj = new Date();
  minDateObj.setDate(minDateObj.getDate() - 6); 
  const minDate = minDateObj.toISOString().split("T")[0]; 

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title.trim()) {
      setError("Please enter what happened (incident type).");
      return;
    }

    if (!date || !time) {
      setError("Please provide both date and time of the incident.");
      return;
    }

    // if user doesn’t pick date/time, use current time
    const incidentTime =
      date && time
        ? `${date} ${time}`
        : new Date().toLocaleString();

    onAddIncident({
      type: title,
      severity,
      zone,
      description: details,
      time: incidentTime,
    });

    // reset form
    setTitle("");
    setSeverity("Low");
    setZone("Northside");
    setDate("");
    setTime("");
    setDetails("");
    setError("");
  };

  return (
    <form className="report-form" onSubmit={handleSubmit}>
      <h2>Submit a Report</h2>
      <p className="report-subtext">
        Please fill out the form below to report a crime incident.
      </p>

      <label>
        Incident / Report title
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="e.g. Suspicious vehicle, Domestic dispute, Noise complaint"
        />
      </label>

      <div className="report-row">
        <label>
          Severity
          <select
            value={severity}
            onChange={(e) => setSeverity(e.target.value)}
          >
            <option>Low</option>
            <option>Medium</option>
            <option>High</option>
          </select>
        </label>

        <label>
          Zone / Area
          <select
            value={zone}
            onChange={(e) => setZone(e.target.value)}
          >
            <option>Northside</option>
            <option>Southside</option>
            <option>Eastside</option>
            <option>Westside</option>
            <option>Downtown</option>
          </select>
        </label>
      </div>

      <div className="report-row">
        <label>
          Date
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            min={minDate}
            max={maxDate}
            required
          />
        </label>

        <label>
          Time
          <input
            type="time"
            value={time}
            onChange={(e) => setTime(e.target.value)}
            required
          />
        </label>
      </div>

      <label>
        Additional details (optional)
        <textarea
          rows="3"
          value={details}
          onChange={(e) => setDetails(e.target.value)}
          placeholder="Describe what you saw, who was involved, direction of travel, etc."
        />
      </label>

      {error && <p className="error-text">{error}</p>}

      <button
  type="submit"
  className="submit-btn"
  disabled={!title.trim() || !date || !time}
>
  Submit report
</button>
    </form>
  );
}