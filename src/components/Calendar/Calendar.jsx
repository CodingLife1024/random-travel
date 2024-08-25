import React, { useState } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import Selection from "../Selection/Selection";
import styles from "./Calendar.module.css";

// import bootstrapPlugin from "@fullcalendar/bootstrap";
// import "bootstrap/dist/css/bootstrap.min.css";

// needed for the style wrapper
import styled from "@emotion/styled";

// add styles as css
import { StyleWrapper } from './StyleWrapper';

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
    <div className={styles.main}>
      <div className={styles.left}>
        <StyleWrapper>
        <FullCalendar
          plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
          initialView={"dayGridMonth"}
          headerToolbar={{
            start: "today prev,next",
            center: "title",
            end: "",
          }}
          height={"auto"}
          backgroundColor={"red"}
          border={"6px solid black"}
          dateClick={handleDateClick}
          events={selectedDates.map((date) => ({
            start: date,
            display: "background",
            backgroundColor: "green",
            textColor: "white",
          }))}
          // themeSystem="bootstrap"
        />
        </StyleWrapper>
      </div>
      <div className={styles.middle}>
        <Selection />
      </div>
      <div className={styles.right}>
        <button onClick={clearSelection} style={{ marginTop: "10px" }}>
          Clear Selection
        </button>
        <button onClick={saveSelection} style={{ marginTop: "10px" }}>
          Save Selection
        </button>
        <h3>Selected Dates</h3>
        <div className={styles.date}>
          {selectedDates.map((date, index) => (
            <h4 className={styles.datefont}>{formatDate(date)}</h4>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Calendar;
