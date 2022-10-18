import React from "react";
import {ContactPicker} from "../contactPicker/ContactPicker";

export const AppointmentForm = ({
  contacts,
  title,
  setTitle,
  contact,
  setContact,
  date,
  setDate,
  time,
  setTime,
  handleSubmit
}) => {
  const getTodayString = () => {
    const [month, day, year] = new Date()
      .toLocaleDateString("en-US")
      .split("/");
    return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
  };

  const getContactNames = () => {
    return contacts.map((contact) => contact.name);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        <input 
          placeholder="Title"
          value={title} 
          type='text'
          onChange={(e) => setTitle(e.target.value)}
          required />
      </label>
      <label>
        <input 
          value={date} 
          type='date'
          min={getTodayString()}
          onChange={(e) => setDate(e.target.value)}
          required />
      </label>
      <label>
        <input 
          value={time} 
          type='time'
          onChange={(e) => setTime(e.target.value)}
          required />
      </label>
      <label>
      <ContactPicker
        value={contact} 
        contacts={getContactNames()}
        name="contact"
        onChange={(e) => setContact(e.target.value)} />
      </label>
    <input type='submit' value="Add Appointment" />
    </form>
  );
};
