import React, { useState } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";

function Calendar() {
  const [selectedDates, setSelectedDates] = useState([]);

  const handleDateClick = (info) => {
    const dateStr = info.dateStr;
    console.log("Selected date:", dateStr);

    if (selectedDates.includes(dateStr)) {
      // If the date is already selected, remove it from the list
      setSelectedDates(selectedDates.filter((date) => date !== dateStr));
    } else {
      // If the date is not selected, add it to the list
      setSelectedDates([...selectedDates, dateStr]);
    }
  };

  const clearSelection = () => {
    setSelectedDates([]);
  };

  const saveSelection = () => {
    // Placeholder for save functionality
    console.log("Selected dates saved:", selectedDates);
  };

  const formatDate = (dateStr) => {
    const options = { year: "numeric", month: "long", day: "numeric" };
    return new Date(dateStr).toLocaleDateString(undefined, options);
  };

  return (
    <div style={{ display: "flex" }}>
      <div style={{ flex: 1 }}>
        <FullCalendar
          plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
          initialView={"dayGridMonth"}
          headerToolbar={{
            start: "today prev,next", // normally on the left
            center: "title",
            end: "dayGridMonth,timeGridWeek,timeGridDay", // normally on the right
          }}
          height={"90vh"}
          dateClick={handleDateClick}
          events={selectedDates.map((date) => ({
            start: date,
            display: "background",
            backgroundColor: "#ff9f89",
          }))}
        />
      </div>
      <div style={{ flex: 0.3, padding: "10px", borderLeft: "1px solid #ccc" }}>
        <button onClick={clearSelection} style={{ marginTop: "10px" }}>
          Clear Selection
        </button>
        <button onClick={saveSelection} style={{ marginTop: "10px" }}>
          Save Selection
        </button>
        <h3>Selected Dates</h3>
        <ul>
          {selectedDates.map((date, index) => (
            <h4>{formatDate(date)}</h4>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Calendar;
