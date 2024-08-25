import React, { useState } from 'react';
import './BookingDetails.css';
import { FaTimes } from 'react-icons/fa';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

// Simulated server data
const serverData = {
  sessionDuration: 1, // 1-hour session by default
  bookedSlots: ['11:00 AM - 12:00 PM', '01:00 PM - 02:00 PM'], // Example booked slots
};

function BookingDetails({ isOpen, onClose }) {
  const [selectedDate, setSelectedDate] = useState(null);
  const [sessionDuration, setSessionDuration] = useState(serverData.sessionDuration);
  const [selectedSlotIndex, setSelectedSlotIndex] = useState(null);
  
  const slots = generateSlots(sessionDuration, serverData.bookedSlots);

  // Function to generate slots based on session duration
  function generateSlots(duration, bookedSlots) {
    let slotsArray = [];
    const startHour = 10;
    const endHour = 18;
    for (let hour = startHour; hour < endHour; hour += duration) {
      const startTime = formatTime(hour);
      const endTime = formatTime(hour + duration);
      const timeRange = `${startTime} - ${endTime}`;
      slotsArray.push({
        timeRange: timeRange,
        booked: bookedSlots.includes(timeRange),
      });
    }
    return slotsArray;
  }

  // Function to format hours into 12-hour format with AM/PM
  function formatTime(hour) {
    const period = hour >= 12 ? 'PM' : 'AM';
    const formattedHour = hour % 12 === 0 ? 12 : hour % 12;
    return `${formattedHour}:00 ${period}`;
  }

  const handleSlotSelection = (slotIndex) => {
    if (!slots[slotIndex].booked) {
      setSelectedSlotIndex(slotIndex);
    }
  };

  if (!isOpen) return null; // Do not render the dialog if not open

  return (
    <div className="booking-overlay" onClick={onClose}>
      <div className="booking-dialog" onClick={(e) => e.stopPropagation()}>
        <div className="booking-header">
          <h3>Book Your Session</h3>
          <FaTimes className="close-icon" onClick={onClose} />
        </div>

        <div className="booking-content">
          <div className="date-picker">
            <label>Select Start Date:</label>
            <DatePicker
              selected={selectedDate}
              onChange={(date) => setSelectedDate(date)}
              minDate={new Date()} // Disable past dates
              placeholderText="Select a date"
              className="custom-date-picker" // Custom class for styling
            />
          </div>

          <div className="session-duration">
            <label>Session Duration:</label>
            <button
              className={`duration-button ${sessionDuration === 1 ? 'active' : ''}`}
              onClick={() => {
                setSessionDuration(1);
                setSelectedSlotIndex(null); // Reset selected slot on duration change
              }}
            >
              1 hr
            </button>
            <button
              className={`duration-button ${sessionDuration === 2 ? 'active' : ''}`}
              onClick={() => {
                setSessionDuration(2);
                setSelectedSlotIndex(null); // Reset selected slot on duration change
              }}
            >
              2 hrs
            </button>
          </div>

          <div className="time-slots">
            {slots.map((slot, index) => (
              <button
                key={index}
                className={`slot-button ${slot.booked ? 'booked' : ''} ${
                  selectedSlotIndex === index ? 'selected' : ''
                }`}
                onClick={() => handleSlotSelection(index)}
                disabled={slot.booked}
                title={slot.booked ? 'Already Booked' : ''}
              >
                {slot.timeRange}
              </button>
            ))}
          </div>

          <button className="make-payment-button">Make Payment</button>
        </div>
      </div>
    </div>
  );
}

export default BookingDetails;
