import React, { useState } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import styles from "./Calendar.module.css";

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
          selectable={true}
          select={handleDateClick}
          events={selectedDates.map((date) => ({ start: date, display: "background", backgroundColor: "#ff9f89" }))}
        />
      </div>
      <div style={{ flex: 0.3, padding: "10px", borderLeft: "1px solid #ccc" }}>
        <h3>Selected Dates</h3>
        <ul>
          {selectedDates.map((date, index) => (
            <li key={index}>{date}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Calendar;
