import React, { useState } from 'react';
import PropTypes from 'prop-types';
// import './DatePicker.css'; // Import the CSS file

const DatePicker = ({
  selectedDate,
  onDateChange,
  dateFormat = 'MM/DD/YYYY',
  minDate,
  maxDate,
  className = '',
}) => {
  const [isCalendarOpen, setIsCalendarOpen] = useState(false);
  const [currentDate, setCurrentDate] = useState(selectedDate || new Date());

  const handleDateChange = (event) => {
    const newDate = new Date(event.target.value);
    setCurrentDate(newDate);
    onDateChange(newDate);
  };

  return (
    <div className={`datepicker ${className}`}>
      <input
        type="text"
        value={currentDate.toLocaleDateString(dateFormat)}
        onClick={() => setIsCalendarOpen(!isCalendarOpen)}
        readOnly
      />
      {isCalendarOpen && (
        <div className="calendar">
          <img
            src="https://via.placeholder.com/150?text=Calendar+Image"
            alt="Calendar"
            className="calendar-image"
          />
          <input
            type="date"
            value={currentDate.toISOString().split('T')[0]}
            onChange={handleDateChange}
            min={minDate ? minDate.toISOString().split('T')[0] : undefined}
            max={maxDate ? maxDate.toISOString().split('T')[0] : undefined}
          />
        </div>
      )}
    </div>
  );
};

DatePicker.propTypes = {
  selectedDate: PropTypes.instanceOf(Date),
  onDateChange: PropTypes.func.isRequired,
  dateFormat: PropTypes.string,
  minDate: PropTypes.instanceOf(Date),
  maxDate: PropTypes.instanceOf(Date),
  className: PropTypes.string,
};

export default DatePicker;
