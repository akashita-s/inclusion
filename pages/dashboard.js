import React, { useState } from "react";
import ChartOne from "../components/chartone/chartone";
import ChartTwo from "../components/charttwo/charttwo";
import Navbar from "../components/navbar/navbar";
import styles from "../styles/chart.module.css";
import { DateRangePicker } from "react-dates";
import "react-dates/lib/css/_datepicker.css";
import "react-dates/initialize";

export default function Dashboard() {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [focusedInput, setFocusedInput] = useState(null);
  const handleDatesChange = ({ startDate, endDate }) => {
    setStartDate(startDate);
    setEndDate(endDate);
  };
  return (
    <div className={styles.container}>
      <Navbar />
      
      <div className={styles.dates}>
      <h2>
          Select The dates you want information for:
      </h2>
        <DateRangePicker
          startDate={startDate}
          startDateId="tata-start-date"
          endDate={endDate}
          endDateId="tata-end-date"
          onDatesChange={handleDatesChange}
          focusedInput={focusedInput}
          onFocusChange={(focusedInput) => setFocusedInput(focusedInput)}
        />
      </div>
      <div className={styles.innercontainer}>
        <div className={styles.containerone}>
          <ChartOne />
        </div>
        <div className={styles.containerone}>
          <ChartTwo />
        </div>
      </div>

      <div>
          
      </div>
    </div>
  );
}
